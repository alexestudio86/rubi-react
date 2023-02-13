import { Link, useSearchParams } from 'react-router-dom';
import { getAllLabels, getAllCategories } from "../../context/jsonCalls";


export function NavSecondaryHome ( ){

    const labels = getAllLabels();
    const goToUp = ( ) => {
        window.scrollTo(0,0)
    }

    return (
        <div id='navSecondary' className="w3-light-gray w3-padding-small d-flex justify-content-around" >
            { labels ? labels.map( (label, index) => (
                <Link key={index} to={`/search?labels=${label.url}`} className='w3-button w3-border w3-round-xxlarge w3-white' >{ label.name }</Link>
                ) ) : <span>No hay etiquetas</span>
            }
            <Link to={'products'} className='w3-button w3-border w3-round-xxlarge w3-blue' onClick={goToUp} >Todos los productos</Link>
        </div>
    )
}

export function NavSecondaryPages ( ){

    //Set and recover params
    const [searchParams, setSearchParams] = useSearchParams()

    const handleOrder = ( ) => {
        setSearchParams(
            {
                order:  'a-z'
            }
        )
    }

    return (
        <div id='navSecondary' className='w3-light-gray w3-padding-small d-flex justify-content-around'>
            <button className='w3-button w3-white' onClick={handleOrder}>Ordenar A-Z</button>
            <button className='w3-button w3-white'>Limpiar</button>
        </div>
    )
}


export function NavTertiaryHome ( ){

    const categories = getAllCategories();

    return (
        <div id='navTertiary' className='w3-light-gray p-1' style={ {zIndex: '5', overflow: 'auto', whiteSpace: 'nowrap'} }>
            { categories ? categories.map( (category, index) => (
                <Link key={index} to={`collections/${category.url}`} className='w3-button w3-border w3-round-xxlarge w3-white' >{ category.name }</Link>
                ) ) : <span>No hay categorías</span>
            }
        </div>
    )
}

