import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Cabecalho({ titulo }) {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>Moda para todos os estilos</p>

      <nav>
        {usuario ? (
          <>
            <Link to="/minha-conta">Minha Conta</Link>
            {" | "}
            <button onClick={handleLogout}>Sair</button>
          </>
        ) : (
          <Link to="/login">Entrar</Link>
        )}
      </nav>
    </header>
  );
}

export default Cabecalho;