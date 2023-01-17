import { FeaturedProduct } from '../../layout/FeaturedProduct';
import { ResultProduct } from '../../layout/ResultProduct';
import { LabelProduct } from '../../layout/LabelProduct'
import { CategoryProduct } from '../../layout/CategoryProduct';


export function StoreHome ( ) {
    return (
        <div className='w3-light-gray p-4'>
            <div className="container bg-white">
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
            </div>
        </div>
    )
}