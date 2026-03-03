import { useAuthStore } from "@/store/authStore"
import { Navigate } from "react-router-dom"

const PublicRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token)

  if (token) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PublicRoute