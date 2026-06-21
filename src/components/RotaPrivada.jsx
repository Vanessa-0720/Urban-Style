import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RotaPrivada({ children }) {
  const { usuario } = useAuth();

  return usuario ? children : <Navigate to="/login" />;
}

export default RotaPrivada;