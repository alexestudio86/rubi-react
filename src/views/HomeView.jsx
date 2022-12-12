import Notice from '../components/Notice';
import { NavFull } from '../components/NavFull';
import { Carousel } from '../components/Carousel';
import { NavSecondary } from '../components/NavSecondary';
import storeImage from '../assets/store.jpeg'
import { Parallax } from '../components/Parallax';
import { Contact } from '../components/Contact';
import { FooterFull } from '../components/FooterFull';
import './homeView.css';
import { Link } from 'react-router-dom';



export function HomeView () {
    return (
        <>
            <div>
                <Notice />
                <NavFull />
                <Carousel />
            </div>
            <div>

            </div>
            <div>
                <NavSecondary />
                <div className='display-container'>
                    <img className='bg-image w3-opacity-max' src={storeImage} alt='Store' width='1024' height='auto' />
                    <div className='display-middle'>
                        <Link className='w3-jumbo text-uppercase btn btn-secondary' to='store'>Tienda</Link>
                    </div>
                </div>
                <Parallax />
                <Contact />
                <FooterFull />
            </div>
        </>
    )
}