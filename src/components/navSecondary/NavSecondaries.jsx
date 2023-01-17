export function NavSecondaries ( { labels } ){
    return (
        <div id='navSecondary' className='nav nav-tabs bg-secondary justify-content-center py-1 sticky-top' style={ {zIndex: '5'} }>
            <div className='nav-item'>
                <h1 className='nav-link text-uppercase link-light w3-jumbo'>Tienda</h1>
            </div>
        </div>
    )
}