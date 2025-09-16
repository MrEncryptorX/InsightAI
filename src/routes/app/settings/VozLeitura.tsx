

export function PaginaVozLeitura() {
    const opcoes = [
        "Ativar voz de leitura",
        "Selecionar voz",
        "Ajustar volume da voz",
        "Testar voz",
    ];

    const vozes = [
        "Voz 1",
        "Voz 2",
        "Voz 3",
    ]

    return (
        <div className="p-6 text-2xl">
            <h1 className="text-2xl font-bold mb-4">Voz de Leitura</h1>
            <p className="text-gray-600 mb-6">
                Configure as opções da voz de leitura.
            </p>
        <ul className="flex flex-col gap-3">
            {opcoes.map((opcao, index) => (
                <li
                    key={index}
                    className="flex items-center justify-start p-3 hover:rg(#020818) rounded text-white"
                >
                    <span>{opcao}</span>

                    {/* BOTÃO LIGADO/DESLIGADO */}
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                    </label>
                </li>
            ))}              
        </ul>
        </div>
    )
}