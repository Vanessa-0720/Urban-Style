import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";
import Login from "./pages/Login";
import MinhaConta from "./pages/MinhaConta";

import RotaPrivada from "./components/RotaPrivada";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="*" element={<NaoEncontrado />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/minha-conta"
  element={
    <RotaPrivada>
      <MinhaConta />
    </RotaPrivada>
  }
/>
      </Routes>
    </Layout>
  );
}

export default App;