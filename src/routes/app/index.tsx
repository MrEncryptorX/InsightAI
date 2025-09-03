//import { Navigate } from 'react-router-dom'; // Importa o componente Navigate do React Router para redirecionamento de rotas
import './indexStyle.css'; // Importa o arquivo de estilos para a página de índice do app
import IconeUpload from '../../components/icones/upload'
import IconeAnalise from '../../components/icones/analise'
import IconePrevisao from '../../components/icones/previsao'
import IconeTelefone from '../../components/icones/telefone'
import IconeEmail from '../../components/icones/email'
import IconeSocial from '../../components/icones/social'
import IconeGrafico from '../../components/icones/grafico'
// Componente funcional AppIndexPage, responsável por redirecionar a rota inicial do app
export function AppIndexPage() {
  
  // Retorna um componente Navigate que redireciona o usuário para "/app/dashboards"
  // O prop 'replace' faz com que o histórico do navegador substitua a rota atual, evitando voltar para esta página
  return (
    <section>
        <header className='cabecalho'>
            <h2 className='logo'>InsightAI</h2>
            <nav className='cabecalho-menu'>
                <a href="/login" className='botao-login'>Login</a>
                <a href="" className='botao-cadastro'>Cadastro</a>
            </nav>
        </header>
        <div className="welcome-text">
            <p>Bem vindo ao <strong>InsightAI</strong></p>
        </div>
        <div className="descricao-produto">
            <h2 className="titulo-descricao">
                <strong>Descubra o poder da análise de <br />dados e previsões inteligentes <br />com o InsightAI.</strong>
            </h2>
            <div className='Icone-grafico'>{<IconeGrafico />}</div>
            <p className="sobreNos">
                Nossa plataforma oferece ferramentas avançadas para <br />transformar dados em insights valiosos.
            </p>
        </div>

  {/*Card das Funcionalidades*/}

      <div className="grid">
                <div className="card">
                    <span className="icon">
                    </span>
                    <h4 className="Titulo-card"><strong>UPLOAD DE DADOS</strong></h4>
                    <p className="Frase-card">Carregue seus dados e comece a análise imediatamente.</p>
                    <div className='Icone-upload'>{<IconeUpload />}</div>
                </div>

                <div className="card">
                    <span className="icon">
                    </span>
                    <h4 className="Titulo-card"><strong>VER ANÁLISE BÁSICA</strong></h4>
                    <p className="Frase-card">Explore métricas fundamentais para entender seus dados.</p>
                    <div className='Icone-analise'>{<IconeAnalise />}</div>
                </div>

                <div className="card">
                    <span className="icon">
                    </span>
                    <h4 className="Titulo-card"><strong>SOLICITAR PREVISÕES</strong></h4>
                    <p className="Frase-card">Utilize nossas ferramentas de previsão para tomar decisões.</p>
                    <div className='Icone-previsao'>{<IconePrevisao />}</div>
                    
                </div>
            </div>

    {/*Card das Assinaturas*/}

        <h2 className="tituloPreco"><strong>PREÇO DE ASSINATURA</strong></h2>
            <div className="assinaturas">
                <div className="plano">
                    <h3 className="plano-titulo"><strong>DELUXE</strong></h3>
                    <p className="plano-descricao">
                        • O plano básico com limites <br />em uploads de dados e <br />relatórios, ideal para empresas <br />que estão começando.
                    </p>
                    <p className="plano-preco"><strong>R$ 1.000</strong></p>
                </div>
                <div className="plano">
                    <h3 className="plano-titulo"><strong>PROFISSIONAL</strong></h3>
                    <p className="plano-descricao">
                        • Um plano intermediário com <br />mais funcionalidades e menos <br />restrições, projetado para <br />empresas em crescimento.
                    </p>
                    <p className="plano-preco"><strong>R$ 5.000</strong></p>
                </div>
                <div className="plano">
                    <h3 className="plano-titulo"><strong>ELITE</strong></h3>
                    <p className="plano-descricao">
                        • O plano completo com todas <br />as funcionalidades disponíveis, <br />sem limites, perfeito para <br />empresas que precisam de <br />análises extensivas.
                    </p>
                    <p className="plano-preco"><strong>R$ 10.000</strong></p>
                </div>
            </div>

        {/*Card do Contato*/}

        <h2 className="titulo-contato">Pronto para chegar ao resultados com a gente?</h2>
        <h3 className="subtitulo-contato">Nos envie uma mensagem!</h3>
        <div className="grid-contato">
            <div className="contato-card">
                <h4>TELEFONE</h4>
                <p>+55 (41) 99999-9999</p>
                {<IconeTelefone />}
            </div>
            <div className="contato-card">
                <h4>E-MAIL</h4>
                <p>personal_department@insightAi.com</p>
                {<IconeEmail />}
            </div>
            <div className="contato-card">
                <h4>Social</h4> 
                <p>Redes sociais</p>
                <div className='icone-social'>{<IconeSocial />}</div>
            </div>
        </div>


    </section>
  );
}