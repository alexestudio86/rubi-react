import { useLocation } from "react-router-dom";
import { StoreHome } from "./StoreHome";
import { StorePages } from "./StorePages";


export function Store ( ) {

    const location = useLocation( );

    return (
        <>
            { location.pathname === '/' ?
                <>
                    <div id='navSecondary' className='nav nav-tabs bg-secondary justify-content-center py-1 sticky-top' style={ {zIndex: '5'} }>
                        <h1 className='nav-item w3-center text-uppercase link-light w3-xxxlarge'>Tienda</h1>
                    </div>
                    <div className='container'>
                        <div className="py-4 bg-white">
                            <StoreHome />
                        </div>
                    </div>
                </>
            :
                <StorePages />
            }
        </>
    )
}