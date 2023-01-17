import { useLocation } from "react-router-dom";
import { NavFull, NavCompact } from "../components/navbar/Navbars";



export function Navbar ( ){
    const location = useLocation();
    return (
        <>
            { location.pathname === '/' ? <NavFull /> : <NavCompact /> }
        </>
    )
}