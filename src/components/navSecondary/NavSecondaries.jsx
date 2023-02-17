import { Link, useSearchParams } from 'react-router-dom';
import { getAllLabels, getAllCategories } from "../../context/jsonCalls";


const goToUp = ( ) => {
    window.scrollTo(0,0)
}


export function NavSecondaryHome ( ){

    const labels = getAllLabels();

    return (
        <div id='navSecondary' className="w3-light-gray w3-padding-small d-flex justify-content-around" >
            { labels ? labels.map( (label, index) => (
                <Link key={index} to={`/products/search?labels=${label.url}`} className='w3-button w3-border w3-round-xxlarge w3-white' onClick={goToUp} >{ label.name }</Link>
                ) ) : <span>No hay etiquetas</span>
            }
            <Link to={'products'} className='w3-button w3-border w3-round-xxlarge w3-blue' onClick={goToUp} >Todos los productos</Link>
        </div>
    )
}

export function NavSecondaryPages ( ){

    //Set and recover params
    const [searchParams, setSearchParams] = useSearchParams()

    const ascendantParams = () => {
        searchParams.set( 'order', 'ascendant');
        setSearchParams( searchParams );
    }

    const descendantParams = () => {
        searchParams.set( 'order', 'descendant');
        setSearchParams( searchParams );
    }

    const clearParams = () => {
        searchParams.delete('order');
        setSearchParams( searchParams );
    }

    return (
        <div id='navSecondary' className='w3-light-gray w3-padding-small d-flex justify-content-around'>
            <button className='w3-button w3-white' onClick={ ascendantParams }>Ordenar A-Z  ↑</button>
                        <button className='w3-button w3-white' onClick={ descendantParams }>Ordenar A-Z  ↓</button>
            <button className='w3-button w3-white' onClick={ clearParams }>Limpiar</button>
        </div>
    )
}

export function NavTertiaryHome ( ){

    const categories = getAllCategories();

    return (
        <div id='navTertiary' className='w3-light-gray text-center p-1' style={ {zIndex: '5', overflow: 'auto', whiteSpace: 'nowrap'} }>
            { categories ? categories.map( (category, index) => (
                <Link key={index} to={`categories/${category.url}`} className='w3-button w3-border w3-round-xxlarge w3-white' onClick={goToUp} >{ category.name }</Link>
                ) ) : <span>No hay categorías</span>
            }
        </div>
    )
}

