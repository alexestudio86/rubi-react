import {NavLink} from 'react-router-dom';
const categories = [
    {
        label:   'Lìnea Capilar',
        url:    '/products/categories/linea-capilar'
    },
    {
        label:   'Lìnea cosmética',
        url:    '/products/categories/linea-cosmetica'
    }
];

export function NavSecondary( ){
    return (
        <>
            <ul className='nav bg-secondary justify-content-center py-1 sticky-top' style={ {zIndex: '5'} }>
                { categories.map(
                    c => (
                        <li className='nav-item'>
                            <NavLink className='nav-link text-uppercase text-light' to={c.url}>{ c.label }</NavLink>
                        </li>
                    )
                )}
            </ul>
        </>
    )
}