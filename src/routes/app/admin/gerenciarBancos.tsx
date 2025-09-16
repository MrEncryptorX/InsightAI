
export function PaginaGerenciadorBanco() {
    const Banco = [
        "Dashboards",
        "Usuarios",
        "Administradores"

    ];

    return(
        <div className="p-6 text-white min-h-screen bg-[#0B0F1A]">
            {/* Titulo */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Gerenciador de Banco de Dados</h1>
                <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg text-sm shadow">
                    Nova Tabela
                </button>
            </div>
            <p className="text-gray-400 mb-4">
                Tabelas:
            </p>
            {/* Lista das tabelas */}
            <ul className="space-y-3 w-72">
                {Banco.map((banc, i) => (
                    <li
                        key={i}
                        className="flex items-center justify-between bg-[#141A29] hover:bg-[#1E2538] transition p-3 rounded-lg shadow-sm group"
                    >

                        {/* Botões de ação */}
                        <div className="space-x-1 opacity-0 group-hover:opacity-100 transition">
                            <button className="px-2 py-1 text-xs rounded-md bg-blue-600 hover:bg-blue-700 transition">
                                Visualizar Banco
                            </button>
                            <button className="px-2 py-1 text-xs rounded-md bg-yellow-600 hover:bg-yellow-700 transition">
                                Editar
                            </button>
                            <button className="px-2 py-1 text-xs rounded-md bg-red-600 hover:bg-red-700 transition">
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}