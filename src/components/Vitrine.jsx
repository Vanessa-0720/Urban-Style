import ProdutoCard from "./ProdutoCard";
import { useState, useEffect } from "react";

function Vitrine() {
const [produtos, setProdutos] = useState([]);
const [busca, setBusca] = useState("");
const [loading, setLoading] = useState(true);
const [categoria, setCategoria] = useState("all");

useEffect(() => {
  async function carregarProdutos() {
    try {
      const [r1, r2, r3, r4] = await Promise.all([
        fetch("https://dummyjson.com/products/category/womens-dresses"),
        fetch("https://dummyjson.com/products/category/mens-shirts"),
        fetch("https://dummyjson.com/products/category/womens-shoes"),
        fetch("https://dummyjson.com/products/category/mens-shoes"),
      ]);

      const d1 = await r1.json();
      const d2 = await r2.json();
      const d3 = await r3.json();
      const d4 = await r4.json();

      setProdutos([
        ...d1.products,
        ...d2.products,
        ...d3.products,
        ...d4.products,
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  carregarProdutos();
}, []);

const produtosFiltrados = produtos.filter((p) => {
    const matchBusca = p.title.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria =
      categoria === "all" || p.category === categoria;

    return matchBusca && matchCategoria;
  });

if (loading) return <p>Carregando produtos...</p>;

  return (
  <section>

<div className="filtros">

<input
      type="text"
      placeholder="Buscar produtos..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />

 <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="all">Todas as roupas</option>
        <option value="womens-dresses">Vestidos femininos</option>
        <option value="mens-shirts">Camisas masculinas</option>
        <option value="womens-shoes">Sapatos femininos</option>
        <option value="mens-shoes">Sapatos masculinos</option>
      </select>

        </div>

 <div className="grid">
    {produtosFiltrados.map((produto) => (
      <ProdutoCard
        key={produto.id}
        produto={produto}
      />
    ))}

</div>

  </section>
);
}

export default Vitrine;