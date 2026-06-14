import { Link } from "react-router-dom";
import Botao from "./Botao";
import Selo from "./Selo";

function ProdutoCard({ produto }) {
  return (
    <div className="card">
      {produto.price < 1000 && <Selo texto="Frete Grátis" />}

      <Link to={`/produto/${produto.id}`}>
        <img src={produto.thumbnail} alt={produto.title} />
        <h3>{produto.title}</h3>
      </Link>

      <p>
        {produto.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <Botao texto="Comprar" />
    </div>
  );
}

export default ProdutoCard;