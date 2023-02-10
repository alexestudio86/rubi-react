import { useLocation , Outlet } from 'react-router-dom';
import { Notice } from './Notice';
import { Navbar } from './Navbar';
import { Carousel } from './Carousel';
import { Parallax } from './Parallax';
import { Footer } from './Footer';



export function Layout( ){
    const location = useLocation();
    return(
        <>
            <div>
                { location.pathname === '/' && <Notice />  }
                <Navbar />
                { location.pathname === '/' && <Carousel /> }
            </div>
            <div>
            <main className="w3-light-gray">
                <Outlet />
            </main>
                { location.pathname === '/' && <Parallax /> }
                <Footer />
            </div>
        </>
    )
}