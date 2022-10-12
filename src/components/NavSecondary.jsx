export function NavSecondary( ){
    return <>
        <ul className='nav bg-secondary justify-content-center py-1 sticky-top' style={ {zIndex: '5'} }>
            <li className='nav-item'>
                <a className='nav-link text-uppercase text-light' aria-current='page' href='#' >Línea Capilar</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link text-uppercase text-light' aria-current='page' href='#' >Línea Cosmética</a>
            </li>
        </ul>
    </>
}