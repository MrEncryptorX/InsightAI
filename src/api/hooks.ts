// Importa os hooks principais do React Query:
// - useQuery: para buscar dados (GET)
// - useMutation: para criar, atualizar ou deletar dados (POST, PUT, DELETE)
// - useQueryClient: para acessar e manipular o cache do React Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Importa o cliente de API, responsável por fazer as requisições HTTP para o backend
import { apiClient } from './client';

// Importa os tipos TypeScript usados para tipar os dados retornados pela API
import type { Dataset, Dashboard, AnalysisJob, User, AuditLog } from '../types';

// Define um objeto com as chaves únicas para cada consulta (query) no React Query.
// Essas chaves são usadas para identificar e invalidar caches corretamente.
export const queryKeys = {
  user: ['user'] as const, // Chave para o usuário atual
  organizations: ['organizations'] as const, // Chave para organizações do usuário
  datasets: ['datasets'] as const, // Chave para todos os datasets
  dataset: (id: string) => ['dataset', id] as const, // Chave para um dataset específico
  dashboards: ['dashboards'] as const, // Chave para todos os dashboards
  dashboard: (id: string) => ['dashboard', id] as const, // Chave para um dashboard específico
  analysis: (id: string) => ['analysis', id] as const, // Chave para uma análise específica
  history: ['history'] as const, // Chave para histórico de análises
  users: ['admin', 'users'] as const, // Chave para usuários (admin)
  auditLogs: ['admin', 'audit-logs'] as const, // Chave para logs de auditoria (admin)
} as const;

// =====================
// User hooks
// =====================

// Hook para buscar o usuário atualmente logado
export function useCurrentUser() {
  return useQuery({
    queryKey: queryKeys.user, // Usa a chave definida para o usuário
    queryFn: () => apiClient.getCurrentUser(), // Função que faz a requisição para buscar o usuário
    staleTime: 5 * 60 * 1000, // Tempo em que os dados são considerados "frescos" (5 minutos)
  });
}

// Hook para buscar as organizações do usuário logado
export function useUserOrganizations() {
  return useQuery({
    queryKey: queryKeys.organizations, // Chave para organizações
    queryFn: () => apiClient.getUserOrganizations(), // Função que busca as organizações
    staleTime: 10 * 60 * 1000, // Dados válidos por 10 minutos
  });
}

// =====================
// Dataset hooks
// =====================

// Hook para buscar todos os datasets disponíveis
export function useDatasets() {
  return useQuery({
    queryKey: queryKeys.datasets, // Chave para datasets
    queryFn: async () => {
      try {
        const response = await apiClient.getDatasets(); // Busca dashboards da API
        // Verifica se a resposta tem dados
        if (response && response.data) {
          return response.data; // Retorna os dados dos dashboards
        }
        return []; // Retorna array vazio se não houver dados
      } catch (error) {
        console.error('Erro ao buscar datasets:', error); // Loga erro no console
        return []; // Retorna array vazio em caso de erro
      }
    }, // Função que busca todos os datasets
    staleTime: 2 * 60 * 1000, // Dados válidos por 2 minutos
  });
}

// Hook para buscar um dataset específico pelo ID
export function useDataset(id: string) {
  return useQuery({
    queryKey: queryKeys.dataset(id), // Chave única para o dataset pelo ID
    queryFn: () => apiClient.getDataset(id), // Função que busca o dataset pelo ID
    enabled: !!id, // Só executa se o ID for válido (não vazio)
  });
}

// Hook para fazer upload de um novo dataset
export function useUploadDataset() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query para manipular o cache
  
  return useMutation({
    // Função que faz o upload do arquivo, podendo receber callbacks de progresso e sinal de abortar
    mutationFn: (params: { 
      file: File; 
      onProgress?: (progress: any) => void;
      signal?: AbortSignal;
    }) => 
      apiClient.uploadDataset(params.file, {
        onProgress: params.onProgress,
        signal: params.signal,
      }),
    // Após sucesso, invalida o cache dos datasets para atualizar a lista
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.datasets });
    },
  });
}

// Hook para deletar um dataset pelo ID
export function useDeleteDataset() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (id: string) => apiClient.deleteDataset(id), // Função que deleta o dataset
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.datasets }); // Atualiza a lista de datasets após deletar
    },
  });
}

// =====================
// Dashboard hooks
// =====================

// Hook para buscar todos os dashboards
export function useDashboards() {
  return useQuery({
    queryKey: queryKeys.dashboards, // Chave para dashboards
    queryFn: async () => {
      try {
        const response = await apiClient.getDashboards(); // Busca dashboards da API
        // Verifica se a resposta tem dados
        if (response && response.data) {
          return response.data; // Retorna os dados dos dashboards
        }
        return []; // Retorna array vazio se não houver dados
      } catch (error) {
        console.error('Erro ao buscar dashboards:', error); // Loga erro no console
        return []; // Retorna array vazio em caso de erro
      }
    },
    staleTime: 2 * 60 * 1000, // Dados válidos por 2 minutos
    retry: 3, // Tenta novamente até 3 vezes em caso de erro
    retryDelay: 1000, // Espera 1 segundo entre tentativas
  });
}

// Hook para buscar um dashboard específico pelo ID
export function useDashboard(id: string) {
  return useQuery({
    queryKey: queryKeys.dashboard(id), // Chave única para o dashboard pelo ID
    queryFn: () => apiClient.getDashboard(id), // Função que busca o dashboard pelo ID
    enabled: !!id, // Só executa se o ID for válido
  });
}

// Hook para criar um novo dashboard
export function useCreateDashboard() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (dashboard: Partial<Dashboard>) => 
      apiClient.createDashboard(dashboard), // Função que cria o dashboard
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboards }); // Atualiza a lista de dashboards após criar
    },
  });
}

// Hook para atualizar um dashboard existente
export function useUpdateDashboard() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (params: { id: string; dashboard: Partial<Dashboard> }) =>
      apiClient.updateDashboard(params.id, params.dashboard), // Função que atualiza o dashboard pelo ID
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboards }); // Atualiza a lista de dashboards
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard(variables.id) }); // Atualiza o dashboard individual
    },
  });
}

// Hook para deletar um dashboard pelo ID
export function useDeleteDashboard() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (id: string) => apiClient.deleteDashboard(id), // Função que deleta o dashboard
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboards }); // Atualiza a lista de dashboards após deletar
    },
  });
}

// =====================
// Analysis hooks
// =====================

// Hook para criar uma nova análise para um dataset
export function useCreateAnalysis() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (datasetId: string) => apiClient.createAnalysis(datasetId), // Função que cria a análise
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.history }); // Atualiza o histórico de análises após criar
    },
  });
}

// Hook para buscar uma análise específica, com opções de atualização automática
export function useAnalysis(id: string, options?: { 
  refetchInterval?: number; // Intervalo de atualização automática
  enabled?: boolean; // Se a query está habilitada
}) {
  return useQuery({
    queryKey: queryKeys.analysis(id), // Chave única para a análise pelo ID
    queryFn: () => apiClient.getAnalysis(id), // Função que busca a análise
    enabled: !!id && options?.enabled !== false, // Só executa se o ID for válido e a opção enabled não for false
    refetchInterval: options?.refetchInterval || 5000, // Atualiza a cada 5 segundos por padrão
  });
}

// Hook para buscar o histórico de análises
export function useHistory() {
  return useQuery({
    queryKey: queryKeys.history, // Chave para histórico
    queryFn: () => apiClient.getHistory(), // Função que busca o histórico
    refetchInterval: 10000, // Atualiza a cada 10 segundos
  });
}

// =====================
// Admin hooks
// =====================

// Hook para buscar todos os usuários (admin)
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users, // Chave para usuários
    queryFn: () => apiClient.getUsers(), // Função que busca os usuários
    staleTime: 5 * 60 * 1000, // Dados válidos por 5 minutos
  });
}

// Hook para criar um novo usuário (admin)
export function useCreateUser() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (user: Partial<User>) => apiClient.createUser(user), // Função que cria o usuário
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users }); // Atualiza a lista de usuários após criar
    },
  });
}

// Hook para atualizar um usuário existente (admin)
export function useUpdateUser() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (params: { id: string; user: Partial<User> }) =>
      apiClient.updateUser(params.id, params.user), // Função que atualiza o usuário pelo ID
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users }); // Atualiza a lista de usuários após atualizar
    },
  });
}

// Hook para deletar um usuário pelo ID (admin)
export function useDeleteUser() {
  const queryClient = useQueryClient(); // Obtém o cliente do React Query
  
  return useMutation({
    mutationFn: (id: string) => apiClient.deleteUser(id), // Função que deleta o usuário
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users }); // Atualiza a lista de usuários após deletar
    },
  });
}

// Hook para buscar os logs de auditoria (admin)
export function useAuditLogs() {
  return useQuery({
    queryKey: queryKeys.auditLogs, // Chave para logs de auditoria
    queryFn: () => apiClient.getAuditLogs(), // Função que busca os logs
    staleTime: 2 * 60 * 1000, // Dados válidos por 2 minutos
  });
}