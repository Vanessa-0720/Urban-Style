import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}

export default App;