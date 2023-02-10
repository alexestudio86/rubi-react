import { Link } from 'react-router-dom';
import { ResultProduct } from './ResultProduct';
import { NavSecondaryHome } from '../components/navSecondary/NavSecondaries';
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
            <div className='w3-padding-small'>
                <h2 className='text-center w3-large w3-padding'>Últimos Productos</h2>
                <ResultProduct />
            </div>
            <div className="w3-cell-row w3-cell-middle w3-light-gray">
                <div className="w3-cell w3-center w3-padding-small">
                    <Link to ='products' className="w3-button bg-white text-uppercase" onClick={goToUp}>Todos los productos</Link>
                </div>
            </div>
        </>
    )
}