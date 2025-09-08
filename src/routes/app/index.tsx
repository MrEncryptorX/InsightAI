//import { Navigate } from 'react-router-dom'; // Importa o componente Navigate do React Router para redirecionamento de rotas
import './indexStyle.css'; // Importa o arquivo de estilos para a página de índice do app
import IconeUpload from '../../components/icones/upload'
import IconeAnalise from '../../components/icones/analise'
import IconePrevisao from '../../components/icones/previsao'
import IconeTelefone from '../../components/icones/telefone'
import IconeEmail from '../../components/icones/email'
import IconeSocial from '../../components/icones/social'
import IconeGrafico from '../../components/icones/grafico'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
// Componente funcional AppIndexPage, responsável por redirecionar a rota inicial do app
export function AppIndexPage() {
    const [data, setData] = useState([40, 80, 60]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData([
                Math.random() * 80 + 20,
                Math.random() * 80 + 20,
                Math.random() * 80 + 20
            ]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const chartTypes = [
        {
            title: "Upload De Dados",
            component: (
                <div className="h-20 flex items-center justify-center">
                    <motion.div
                        className="w-16 h-16 border-4 border-yellow-500 rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            borderColor: ["#EAB308", "#10B981", "#3B82F6", "#EAB308"]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            )
        },
        
        {
            title: "Processamento",
            component: (
                <div className="h-20 flex items-center justify-center">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-3 h-3 bg-green-500 rounded-full mx-1"
                            animate={{
                                y: [-10, 10, -10],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3
                            }}
                        />
                    ))}
                </div>
            )
        },
        {
            title: "Dashboard Finalizado",
            component: (
                <div className="flex items-end justify-center gap-2 h-20">
                    {data.map((height, index) => (
                        <motion.div
                            key={index}
                            className="bg-blue-500 w-4 rounded-t"
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    ))}
                </div>
            )
        }
        
    ];
    // Retorna um componente Navigate que redireciona o usuário para "/app/dashboards"
    // O prop 'replace' faz com que o histórico do navegador substitua a rota atual, evitando voltar para esta página
    return (
        <section>
            <header className='cabecalho'>
                <h2 className='logo'>InsightAI</h2>
                <nav className='cabecalho-menu'>
                    <Link to="/login">Login</Link>
                    <Link to="/signup" className='botao-cadastro'>Cadastro</Link>
                </nav>
            </header>
            <div className="welcome-text">
                <p>Bem vindo ao <strong>InsightAI</strong></p>
            </div>
            
            <div className="descricao-produto">

                <h2 className="titulo-descricao">
                    <strong>Descubra o poder da análise de <br />dados e previsões inteligentes <br />com o InsightAI.</strong>
                </h2>
                
                <p className="sobreNos">
                    Nossa plataforma oferece ferramentas avançadas para <br />transformar dados em insights valiosos.
                </p>
            </div>
            <div className='Icone-grafico'>{chartTypes.map((chart, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <Card className="rounded-2xl shadow-lg bg-[#2A3550] hover:shadow-2xl transition w-60 ">
                                        <CardContent className="p-6 text-center">
                                            <h2 className="text-lg font-semibold text-gray-200 mb-4">
                                                {chart.title}
                                            </h2>
                                            {chart.component}
                                           
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
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
