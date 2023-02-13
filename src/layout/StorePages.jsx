import { Link, useLocation, useParams } from 'react-router-dom'
import { ResultProduct } from './ResultProduct';
import { SearchForm } from './SearchForm';
import { NavSecondaryPages } from '../components/navSecondary/NavSecondaries';
import { LabelProductsPages, CategoryProductsPages, CollectionProductsPages } from '../components/products/Products';


export function StorePages ( ) {

    const location = useLocation();
    const paramas = useParams();

    function renderSwitch( ){
        if( window.location.href.indexOf("products") !== -1 ){
            return 'Productos'
        }else if( window.location.href.indexOf("category") !== -1 ){
            return 'Filtro por categoría'
        }else if( window.location.href.indexOf("collection") !== -1 ){
            return `${paramas.collectionId}`
        }else{
            return ''
        }
    }

    return (
        <div className="w3-row">
            <div className="w3-quarter w3-padding">
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
                        <h1 className='text-center'>
                            <Link to={'/categories'} >Categorías</Link>
                        </h1>
                        <CategoryProductsPages />
                    </div>
                </div>
                <div className='w3-padding-small'>
                    <div className='bg-white w3-padding-small'>
                        <h1 className='text-center'>
                            <Link to={'/collections'} >Colecciones</Link>
                        </h1>
                        <CollectionProductsPages />
                    </div>
                </div>     
            </div>
            <div className="w3-rest w3-padding ">
                <h1 className='w3-center py-3'>{ renderSwitch() }</h1>
                <NavSecondaryPages />
                <div className="w3-padding-small">
                    <div className='bg-white w3-padding-small'>
                        <ResultProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}