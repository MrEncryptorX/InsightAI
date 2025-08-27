// filepath: backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock data para dashboards
const mockDashboards = [
  { 
    id: '1', 
    name: 'Dashboard de Vendas', 
    description: 'Dashboard principal de vendas', 
    tags: ['vendas', '2025'],
    createdAt: '2024-12-20T10:00:00Z',
    createdBy: 'user-1',
    orgId: 'org-1',
    tiles: [],
    isPublic: false,
    favorites: 3
  },
  { 
    id: '2', 
    name: 'Dashboard Financeiro', 
    description: 'Análise financeira completa', 
    tags: ['financeiro', 'relatórios'],
    createdAt: '2024-12-19T15:30:00Z',
    createdBy: 'user-2',
    orgId: 'org-1',
    tiles: [],
    isPublic: true,
    favorites: 7
  }
];

// Endpoint para dashboards - formato correto da API
app.get('/api/dashboards', (req, res) => {
  res.json({
    data: mockDashboards,
    status: 'success',
    message: 'Dashboards retrieved successfully'
  });
});

// Endpoint para dashboard específico
app.get('/api/dashboards/:id', (req, res) => {
  const { id } = req.params;
  const dashboard = mockDashboards.find(d => d.id === id);
  
  if (!dashboard) {
    return res.status(404).json({
      status: 'error',
      message: 'Dashboard not found'
    });
  }
  
  res.json({
    data: dashboard,
    status: 'success'
  });
});

// Endpoint para criar dashboard
app.post('/api/dashboards', (req, res) => {
  const newDashboard = {
    id: String(mockDashboards.length + 1),
    ...req.body,
    createdAt: new Date().toISOString(),
    createdBy: 'user-1',
    orgId: 'org-1',
    tiles: [],
    favorites: 0
  };
  
  mockDashboards.push(newDashboard);
  
  res.status(201).json({
    data: newDashboard,
    status: 'success',
    message: 'Dashboard created successfully'
  });
});

// Endpoint para atualizar dashboard
app.patch('/api/dashboards/:id', (req, res) => {
  const { id } = req.params;
  const index = mockDashboards.findIndex(d => d.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Dashboard not found'
    });
  }
  
  mockDashboards[index] = {
    ...mockDashboards[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  
  res.json({
    data: mockDashboards[index],
    status: 'success',
    message: 'Dashboard updated successfully'
  });
});

// Endpoint para deletar dashboard
app.delete('/api/dashboards/:id', (req, res) => {
  const { id } = req.params;
  const index = mockDashboards.findIndex(d => d.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Dashboard not found'
    });
  }
  
  mockDashboards.splice(index, 1);
  
  res.json({
    status: 'success',
    message: 'Dashboard deleted successfully'
  });
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API!',
    endpoints: {
      dashboards: '/api/dashboards',
      dashboard: '/api/dashboards/:id'
    }
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
  console.log(`📊 Dashboards disponíveis em http://localhost:${PORT}/api/dashboards`);
});