import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"


export function AdminDashboard() {
  const { signOut } = useAuth()

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">Admin Dashboard</h1>
      <div className="flex flex-col gap-2">
        <Link to="/admin/messages">Gerenciar Mensagens Curtas</Link>
        <Link to="/admin/long-texts">Gerenciar Textos Longos</Link>
        <button onClick={signOut} className="mt-4 bg-red-500 text-white p-2">Sair</button>
      </div>
    </div>
  )
}
