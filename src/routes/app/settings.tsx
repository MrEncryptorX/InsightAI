import './settingsStyle.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import { PaginaIdiomas } from './settings/Idiomas';
import { PaginaFavDashboards } from './settings/MDashboards';
import { PaginaNotificacoes } from './settings/Notificacoes';
import NotificacoesIcone from '../../components/icones/settings';
import VozLeituraIcone from '../../components/icones/VozLeitura';
import DashboardIcone from '../../components/icones/dashboard';
import SairIcone from '../../components/icones/Sair';

export function SettingsPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white h-screen p-4">
        <h2 className='CongifTitlle'>CONFIGURAÇÕES</h2>
        <nav className="flex text-2xl flex-col gap-2">
          <NavLink to="Idiomas" className="hover:bg-gray-700 p-2 rounded">Idiomas</NavLink>
          <hr />
          <NavLink to="MDashboards" className="hover:bg-gray-700 p-2 rounded flex"><DashboardIcone />Dashboards</NavLink>
          <hr />
          <NavLink to="VozLeitura" className="hover:bg-gray-700 p-2 rounded flex"><VozLeituraIcone />Voz de Leitura</NavLink>
          <hr />
          <NavLink to="Notificacoes" className="hover:bg-gray-700 p-2 rounded flex"><NotificacoesIcone />Notificações</NavLink>
          <hr />
          <NavLink to="/app/dashboards" className="settingsSair text-2xl flex"><SairIcone />Sair</NavLink>
        </nav>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="Idiomas" element={<PaginaIdiomas />} />
          <Route path="MDashboards" element={<PaginaFavDashboards />} />
          <Route path="sistema" element={<h1>Página de Sistema</h1>} />
          <Route path="Notificacoes" element={<PaginaNotificacoes />} />
        </Routes>
      </div>
    </div>
  );
}
