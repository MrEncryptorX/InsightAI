import './settingsStyle.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import { PaginaIdiomas } from './settings/Idiomas';
import { PaginaFavDashboards } from './settings/MDashboards';
import { PaginaNotificacoes } from './settings/Notificacoes';

export function SettingsPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white h-screen p-4">
        <nav className="flex flex-col gap-2">
          <NavLink to="Idiomas" className="hover:bg-gray-700 p-2 rounded">Idiomas</NavLink>
          <NavLink to="MDashboards" className="hover:bg-gray-700 p-2 rounded">Modelos de Dashboards Favoritos</NavLink>
          <NavLink to="VozLeitura" className="hover:bg-gray-700 p-2 rounded">Voz de Leitura</NavLink>
          <NavLink to="Notificacoes" className="hover:bg-gray-700 p-2 rounded">Notificações</NavLink>
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
