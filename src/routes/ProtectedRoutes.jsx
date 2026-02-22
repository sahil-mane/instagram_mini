import { useAuthStore } from "@/store/authStore"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {
  const token = useAuthStore((state)=>state.token)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoutes