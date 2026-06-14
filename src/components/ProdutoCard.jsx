import Botao from "./Botao";
import Selo from "./Selo";

function ProdutoCard({ produto }) {
  return (
    <div className="card">
      {produto.freteGratis && (
        <Selo texto="Frete Grátis" />
      )}

      <h3>{produto.nome}</h3>

      <p>
  {produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}
</p>

      <Botao texto="Comprar" />
    </div>
  );
}

export default ProdutoCard;