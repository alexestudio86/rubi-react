import { Link } from 'react-router-dom';
import { ResultProduct } from './ResultProduct';
import { NavSecondaryHome, NavTertiaryHome } from '../components/navSecondary/NavSecondaries';
import { FeaturedProduct } from './FeaturedProduct';

const goToUp = ( ) => {
    window.scrollTo(0,0)
}


export function StoreHome ( ) {
    return (
        <>
            <div className="w3-padding-small">
                <NavSecondaryHome />
            </div>
            <div className='w3-padding-small'>
                <h2 className='text-center w3-large w3-padding'>Productos Destacados</h2>
                <FeaturedProduct />
            </div>
            <main className='w3-padding-small'>
                <h2 className='text-center w3-large w3-padding'>Últimos Productos</h2>
                <ResultProduct />
            </main>
            <div className="w3-paggind-small">
                <NavTertiaryHome />
            </div>
        </>
    )
}