import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";

const { default: Rodape } = require("components/Rodape");
const { Outlet } = require("react-router-dom");

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </Container>
            <Rodape />
        </main>
    )
}

export default PaginaBase;