
import { useLocation } from "react-router-dom";
import { FooterFull, FooterCompact } from "../components/footer/Footers";


export function Footer ( ) {
    const localtion = useLocation();
    return (
        <footer id='footerFull'>
            { localtion.pathname === '/' && <FooterFull/> }
            <FooterCompact/>
        </footer>
    )
}