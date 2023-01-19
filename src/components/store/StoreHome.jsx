import { FeaturedProduct } from '../../layout/FeaturedProduct';
import { ResultProduct } from '../../layout/ResultProduct';
import { LabelProduct } from '../../layout/LabelProduct'
import { CategoryProduct } from '../../layout/CategoryProduct';
import { Link } from 'react-router-dom';


export function StoreHome ( ) {
    return (
        <>
            <div className='w3-padding-small'>
                <h2 className='text-center w3-large w3-padding'>Productos Destacados</h2>
                <FeaturedProduct />
            </div>
            <div className="w3-padding-small">
                <h2 className='text-center w3-large w3-padding'>Filtro por Etiquetas</h2>
                <LabelProduct />
            </div>
            <div className='w3-padding-small'>
                <h2 className='text-center w3-large w3-padding'>Filtro por Categoría</h2>
                <CategoryProduct />
            </div>
            <div className="w3-padding-small">
                <h2 className='text-center w3-large w3-padding'>Últimos Productos</h2>
                <ResultProduct />
            </div>
            <div className="w3-cell-row w3-cell-middle w3-light-gray">
                <div className="w3-cell w3-center w3-padding-small">
                    <Link to ='products' className="w3-button bg-white text-uppercase">Todos los productos</Link>
                </div>
            </div>
        </>
    )
}