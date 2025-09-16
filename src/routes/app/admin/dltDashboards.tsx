import React from "react";
import IconeLixo from "../../../components/icones/lixo";



export function PaginaDeletarDashboards() {
    const dashboards = [
        "Dashboard 1",
        "Dashboard 2",
        "Dashboard 3",
        "Dashboard 4",
        "Dashboard 5",
    ]
    return (
        <div className="p-6 text-1xl">
            <h1 className="text-2xl font-bold mb-4">Deletar Dashboards</h1>
            <p className="text-gray-400 mb-6">
                Selecione um dashboard para excluir
            </p>


            <ul className="space-y-2 mr-4">
                {dashboards.map(d => (
                    <li
                        
                        className="flex items-center justify-start gap-2 p-2 rounded hover:rg(#020818) relative group"
                    >
                        <div className="flex items-center gap-2 mr-2">
                            <span>{d}</span>
                        </div>

                        {/* Botão de rename que aparece no hover */}
                        <button className="hidden group-hover:inline text-white text-sm px-2 py-1 rounded ml-2"><IconeLixo /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

