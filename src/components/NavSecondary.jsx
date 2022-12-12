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
            <ul id='navSecondary' className='nav nav-tabs bg-secondary justify-content-center py-1 sticky-top' style={ {zIndex: '5'} }>
                { categories.map(
                    (category, index) => (
                        <li key={index} className='nav-item'>
                            <NavLink className='nav-link text-uppercase link-light' to={category.url}>{ category.label }</NavLink>
                        </li>
                    )
                )}
            </ul>
        </>
    )
}