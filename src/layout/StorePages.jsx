import { useLocation } from 'react-router-dom'
import { NavSecondaryPages } from '../components/navSecondary/NavSecondaries';
import { ResultProduct } from './ResultProduct';
import { SearchForm } from './SearchForm';
import { LabelProductsPages, CategoryProductsPages } from '../components/products/Products';


export function StorePages ( ) {



    const location = useLocation();

    function renderSwitch( ){
        if( window.location.href.indexOf("products") !== -1 ){
            return 'Productos'
        }else if( window.location.href.indexOf("collection") !== -1 ){
            return 'Filtro por Colecciones'
        }
    }

    return (
        <div className="w3-row">
            <div className="w3-threequarter w3-padding ">
                <h1 className='w3-center py-3'>{ renderSwitch() }</h1>
                <NavSecondaryPages />
                <div className="w3-padding-small">
                    <div className='bg-white w3-padding-small'>
                        <ResultProduct />
                    </div>
                </div>
            </div>
            <div className="w3-rest w3-padding">
                <div className="w3-padding-small">
                    <div className='bg-white w3-padding-small'>
                        <h1 className='text-center'>Buscar</h1>
                        <SearchForm />
                    </div>
                </div>
                <div className="w3-padding-small">
                    <div className="bg-white w3-padding-small">
                        <h1 className='text-center'>Etiquetas</h1>
                        <LabelProductsPages />
                    </div>
                </div>
                <div className='w3-padding-small'>
                    <div className='bg-white w3-padding-small'>
                        <h1 className='text-center'>Categorías</h1>
                        <CategoryProductsPages />
                    </div>
                </div>
            </div>
        </div>
    )
}