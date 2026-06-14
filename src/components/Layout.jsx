import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout({ children }) {
  return (
    <>
      <Cabecalho titulo="Urban Style" />

      <main>
        {children}
      </main>

      <Rodape />
    </>
  );
}

export default Layout;