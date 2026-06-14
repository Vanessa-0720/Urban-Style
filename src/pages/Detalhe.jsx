import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalhe() {
  const { id } = useParams();
   const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div>
        <button onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1>{produto.title}</h1>

      <img src={produto.thumbnail} alt={produto.title} 
      width="250"
      />
      <p>
        {produto.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}

export default Detalhe;