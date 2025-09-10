import React from "react";
import LapisIcone from "../../../components/icones/lapis";

export function PaginaFavDashboards() {
    const dashboards = [
        { id: 1, name: "Dashboard 1", icon: "⭐" },
        { id: 2, name: "Dashboard 2", icon: "❤️" },
        { id: 3, name: "Dashboard 3", icon: "🔖" },
        { id: 4, name: "Dashboard 4", icon: "🔥" },
        { id: 5, name: "Dashboard 5", icon: "💡" },
    ]

  return (
    <div className="p-6 text-3xl">
      <h1 className="text-4xl font-bold mb-4">Seus Dashboards Favoritos</h1>
      <p className="text-gray-600 mb-6">
        Dashboards.
      </p>

      
      <ul className="space-y-2">
        {dashboards.map(d => (
          <li
            key={d.id}
            className="flex items-center justify-start gap-2 p-2 rounded hover:rg(#020818) relative group"
          >
            <div className="flex items-center gap-2">
              <span>{d.icon}</span>
              <span>{d.name}</span>
            </div>

            {/* Botão de rename que aparece no hover */}
            <button className="hidden group-hover:inline text-white text-sm px-2 py-1 rounded ml-2"><LapisIcone /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
