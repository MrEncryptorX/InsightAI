export function PaginaControleUsuarios() {
    const dashboards = [
        "Dashboard 1",
        "Dashboard 2",
        "Dashboard 3",
        "Dashboard 4",
        "Dashboard 5",
    ];

    return (
        <div className="p-6 text-white min-h-screen bg-[#0B0F1A]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Usuários</h1>
                <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-sm shadow">
                    Adicionar Novo Usuário
                </button>
            </div>

            {/* Subtítulo */}
            <p className="text-gray-400 mb-4">
                Selecione um dashboard para gerenciar
            </p>

            {/* Lista de dashboards */}
            <ul className="space-y-3 w-72">
                {dashboards.map((d, i) => (
                    <li
                        key={i}
                        className="flex items-center justify-between bg-[#141A29] hover:bg-[#1E2538] transition p-3 rounded-xl shadow-sm group"
                    >
                        <span className="font-medium">{d}</span>

                        {/* Botões de ação */}
                        <div className="space-x-2 opacity-0 group-hover:opacity-100 transition">
                            <button className="px-3 py-1 text-sm rounded-lg bg-yellow-600 hover:bg-yellow-700 transition">
                                Editar
                            </button>
                            <button className="px-3 py-1 text-sm rounded-lg bg-red-600 hover:bg-red-700 transition">
                                Excluir
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
