import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import Navbar from "../navbar/Navbar";


export default function Layout() {
    const [path, setPath] = useState("home");

    
     
    return (
        <>
            <Navbar active={path} setActive={setPath} />

            <main>
                <Outlet />
            </main>

            <Footer setActive={setPath} />
        </>
    )
}
