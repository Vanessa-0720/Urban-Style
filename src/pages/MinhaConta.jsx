import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function MinhaConta() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h2>Minha Conta</h2>

      <p>
        Olá,! Bem-vindo à Urban Style 👗
      </p>

      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}

export default MinhaConta;