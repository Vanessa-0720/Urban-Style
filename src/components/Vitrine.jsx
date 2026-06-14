import ProdutoCard from "./ProdutoCard";

function Vitrine() {
  const produtos = [
    {
      id: 1,
      nome: "Jaqueta Jeans",
      preco: 249.90,
      freteGratis: true
    },
    {
      id: 2,
      nome: "Vestido Midi",
      preco: 189.90,
      freteGratis: true
    },
    {
      id: 3,
      nome: "Camisa Social",
      preco: 119.90,
      freteGratis: false
    },
    {
      id: 4,
      nome: "Tênis Casual",
      preco: 299.90,
      freteGratis: true
    }
  ];

  return (
    <section>
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          produto={produto}
        />
      ))}
    </section>
  );
}

export default Vitrine;