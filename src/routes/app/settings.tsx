import './settingsStyle.css'

export function SettingsPage() {
    return (
    <div className="settingsPage">
        <h1 className="TitleSettings"> 
            CONFIGURAÇÕES
        </h1>
        <div className="user">
            <h2 className="dashboardsFavoritos">
                MODELO DE DASHBOARD FAVORITOS
                <p> Escolha seu Dashboard Favorito </p>
            </h2>
            <h2 className="vozDeLeitura">
                VOZ DE LEITURA 
                <p> Ative sua Voz de Leitura</p>
            </h2>
            <h2 className="idiomaSettings">
                IDIOMA
                <p> Escolha seu Idioma </p>
            </h2>
            <h2 className="notificacoes">
                NOTIFICAÇÕES
                <p> Ativar as notificações</p>
                <p> Ativar as notificações</p>
            </h2>
        </div>
    </div>
    )
}