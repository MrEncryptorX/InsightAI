import './login_signup.css'; // Importa estilos CSS específicos para login e cadastro
import { Eye, EyeOff, BarChart3 } from 'lucide-react'; // Importa ícones SVG
import { Button } from '../../components/ui/button'; // Importa componente de botão reutilizável
import { Input } from '../../components/ui/input'; // Importa componente de input reutilizável
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'; // Importa componentes de card
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Importa componentes e hooks de navegação do React Router








export function TelaCadastro() {
    return (
        <div className='box-signup'>
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
                            Sign up
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
                                    className='password-input'
                                    placeholder="Enter your password"
                                />
                                <Input 
                                    className='confirm-password-input'
                                    placeholder="Confirm your password"
                                />

                            </div>
                        </div>
                        <Button type="submit" className="w-full">Cadastrar</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}