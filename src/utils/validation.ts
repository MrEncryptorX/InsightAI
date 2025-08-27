// Este arquivo verifica se os dados estão no formato correto
export function validateDashboardsResponse(data: any): boolean {
  // Verifica se é um array
  if (!Array.isArray(data)) {
    console.warn('Dados não são um array:', data);
    return false;
  }
  
  // Verifica se cada item tem as propriedades necessárias
  return data.every(item => {
    const isValid = (
      typeof item === 'object' && 
      typeof item.id === 'string' && 
      typeof item.name === 'string'
    );
    
    if (!isValid) {
      console.warn('Item inválido encontrado:', item);
    }
    
    return isValid;
  });
}