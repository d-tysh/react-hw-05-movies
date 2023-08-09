import { Suspense } from "react";
import { Header } from "../Header/Header";
import { Container } from "./Layout.styled";

const { Outlet } = require("react-router-dom");

const Layout = () => {
    return (
        <Container>
            <Header />
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
}

export default Layout;