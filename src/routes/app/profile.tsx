import { Eye, EyeOff, BarChart3 } from 'lucide-react'; // Importa ícones SVG
import { Button } from '../../components/ui/button'; // Importa componente de botão reutilizável
import { Input } from '../../components/ui/input'; // Importa componente de input reutilizável
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'; // Importa componentes de card
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Importa componentes e hooks de navegação do React Router








export function ProfilePage() {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Card className="w-full max-w-4xl  h-[1000px]">
                {/* Cabeçalho do card com logo e título */}
                <CardHeader className="text-center space-y-4">
                    <div className="flex items-center justify-start">
                        <div className="flex items-center justify-start w-32 h-32 bg-primary rounded-xl">
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
                        <div className="flex space-x-4">
                            <label htmlFor="nome" className="flex flex-col text-sm font-medium">
                                <Input
                                type="text"
                                placeholder="Nome"
                                className="w-96 h-8 text-sm px-2 py-1"
                                />
                            </label>

                            <label htmlFor="sobrenome" className="flex flex-col text-sm font-medium">
                                <Input
                                type="text"
                                placeholder="Sobrenome"
                                className="w-96 h-8 text-sm px-2 py-1 mr-10"
                                />
                            </label>
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