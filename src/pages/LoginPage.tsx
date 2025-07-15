import { useState } from "react"
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"
import CrossIcon from '../../public/cross-icon.svg'
import bgImage from '../../public/img/imagemBanner.jpeg'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setError(error.message)
        } else {
            navigate('/admin')
        }
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center text-secondary p-4 flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 bg-primary rounded-xl w-full max-w-md shadow-lg">
                <div className="w-fit mb-4 bg-light-gray flex items-center justify-center rounded-full p-4">
                    <img src={CrossIcon} className="h-16 md:h-24" />
                </div>
                <h1 className="text-xl mb-4">Admin Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
                    <input
                        className="bg-light-gray p-2 rounded-xl w-full"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className="bg-light-gray p-2 rounded-xl w-full"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="bg-secondary rounded-xl text-white py-2">Entrar</button>
                </form>
            </div>
        </div>
    )
}
