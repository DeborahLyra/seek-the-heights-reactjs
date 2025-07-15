import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import type { JSX } from "react"


export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { session } = useAuth()

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return children
}
