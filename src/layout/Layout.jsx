import { useLocation , Outlet, useNavigation } from 'react-router-dom';
import { Notice } from './Notice';
import { Navbar } from './Navbar';
import { Carousel } from './Carousel';
import { Parallax } from './Parallax';
import { Footer } from './Footer';



export function Layout( ){

    const location = useLocation();
    const navigation = useNavigation();

    return(
        <>  { navigation.state === "loading" ?
            <div className='vh-100 bg-light d-flex justify-content-center align-items-center'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        :
            <>
            <div>
                { location.pathname === '/' && <Notice />  }
                <Navbar />
                { location.pathname === '/' && <Carousel /> }
            </div>
            <div>
            <div className="w3-light-gray">
                <Outlet />
            </div>
                { location.pathname === '/' && <Parallax /> }
                <Footer />
            </div>
            </>
            }
        </>
    )
}