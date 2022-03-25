import { Outlet } from "react-router-dom"
import './layout.css';
export const Layout = () => {
    return (
        <>
            <header>
                <h1>Zoo</h1>

            </header>

            <main>
                <Outlet></Outlet>

            </main>
        </>
    );
};