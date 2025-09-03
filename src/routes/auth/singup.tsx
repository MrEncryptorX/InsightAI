import { Eye, EyeOff, BarChart3 } from 'lucide-react'; // Importa ícones SVG
import { Button } from '../../components/ui/button'; // Importa componente de botão reutilizável
import { Input } from '../../components/ui/input'; // Importa componente de input reutilizável
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'; // Importa componentes de card
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Importa componentes e hooks de navegação do React Router








export function TelaCadastro() {
    return (
        <div>
            <Card className="w-full max-w-md">
                {/* Cabeçalho do card com logo e título */}
                <CardHeader className="text-center space-y-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                            <BarChart3 className="w-7 h-7 text-primary-foreground" />
                        </div>
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">InsightAI</CardTitle>
                        <CardDescription>
                            Sign in to your account
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Formulário de login */}
                    <form className="space-y-4">

                         {/* Campo de nome e sobrenome */}
                        <div className="space-y-2">
                            <label htmlFor="nome" className="text-sm font-medium">
                                
                            </label>
                            <label htmlFor="sobrenome" className="text-sm font-medium">
                            </label>
                            <Input
                                type="text"
                                placeholder="Nome"
                            />
                        </div>


                        {/* Campo de email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                            </label>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Campo de senha com botão para mostrar/ocultar */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                               
                            </label>
                            <div className="relative">
                                <Input
                                   
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                    </form>

                    {/* Links para cadastro e recuperação de senha */}
                    <div className="mt-6 text-center">
                        <div className="text-sm text-muted-foreground">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-primary hover:underline">
                                Sign up
                            </Link>
                        </div>
                        <div className="mt-2">
                            <Link to="/forgot-password" className="text-sm text-muted-foreground hover:text-foreground">
                            </Link>
                        </div>
                    </div>

                    {/* Credenciais de demonstração */}
                    <div className="mt-6 p-3 bg-muted rounded-lg">
                        <div className="text-xs font-medium text-muted-foreground mb-2">Demo Credentials:</div>
                        <div className="text-xs space-y-1">
                            <div>Email: demo@insightai.com</div>
                            <div>Password: demo123</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}