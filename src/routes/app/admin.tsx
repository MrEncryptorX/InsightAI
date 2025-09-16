import { Routes, Route, NavLink } from 'react-router-dom';
import { PaginaDeletarDashboards } from './admin/dltDashboards';
import { PaginaControleUsuarios } from './admin/controleUsuarios';
import { PaginaControleAdministradores } from './admin/crontroleAdmins';
import { PaginaGerenciadorBanco } from './admin/gerenciarBancos';



export function AdminPage(){
    return(
    <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 text-white h-screen p-4">
            <nav className="flex flex-col gap-2">
              <NavLink to="dltDashboards" className="hover:bg-gray-700 p-2 rounded">Deletar Dashboards</NavLink> {/*deleta dashboards especificos*/}
              <NavLink to="controleUsuarios" className="hover:bg-gray-700 p-2 rounded">Controle de Usuarios</NavLink> {/*excluir editar adicionar listar users*/}
              <NavLink to="controleAdmins" className="hover:bg-gray-700 p-2 rounded">Controle de Adiminstradores</NavLink> {/*ativar desativar remover listar admins*/}
              <NavLink to="gereciarBancos" className="hover:bg-gray-700 p-2 rounded">Gerenciar Banco de Dados</NavLink> {/*gerencia o banco de dados do site*/}
              <NavLink to="testeBugs" className="hover:bg-gray-700 p-2 rounded">Testes e Debug do Site</NavLink> {/*debug do site*/}
              <NavLink to="desempenho" className="hover:bg-gray-700 p-2 rounded">Monitoramento e Desempenho do Site</NavLink> {/*monitoramento do site*/}
              <NavLink to="logsErro" className="hover:bg-gray-700 p-2 rounded">Logs de Erro do Server</NavLink> {/*logs de erros*/}
              <NavLink to="backupDados" className="hover:bg-gray-700 p-2 rounded">Backup de Dados</NavLink> {/*backup e restauração de dados*/}
              <NavLink to="bloqueioIp" className="hover:bg-gray-700 p-2 rounded">Bloqueio de IP e Firewall</NavLink> {/*bloqueio de ip e firewall*/}
              
            
            </nav>
          </div>
    
          {/* Conteúdo */}
          <div className="flex-1 p-6">
            <Routes>
              <Route path="dltDashboards" element={<PaginaDeletarDashboards />} />
              <Route path="controleUsuarios" element={<PaginaControleUsuarios />} />
              <Route path="controleAdmins" element={<PaginaControleAdministradores />} />
              <Route path="gereciarBancos" element={<PaginaGerenciadorBanco />} />
            </Routes>
          </div>
        </div>
      );
    
}