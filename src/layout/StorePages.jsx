import { useState, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { Navbar, Button, Container } from 'react-bootstrap';
import { ResultProduct } from './ResultProduct';
import { SearchForm } from '../components/search/SearchForms';
import { NavSecondaryPages } from '../components/navSecondary/NavSecondaries';
import { LabelProductsPages, CategoryProductsPages, CollectionProductsPages } from '../components/products/Products';


export function StorePages ( ) {

    const paramas = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    function renderSwitch( ){
        if( window.location.href.indexOf("search") !== -1 ){
            return `${searchParams.get('labels')}`
        }else if( window.location.href.indexOf("categories") !== -1 ){
            return `${paramas.categoryId}`
        }else if( window.location.href.indexOf("collection") !== -1 ){
            return `${paramas.collectionId}`
        }else{
            return 'Productos'
        }
    }

    const [sidebarState, setSidebarState] = useState(false);

    //Use reference for reset position of aside
    const ref = useRef(null);


    return (
        <>
            <Navbar className='d-sm-none d-sm-block' bg="secondary" sticky="top" id='navSidebar'>
                <div className='content'>
                    <Button variant="outline-light" type="button" onClick={ () => {
                        setSidebarState(!sidebarState);
                        //Set style property for reference
                        ref.current.style.setProperty('top', '0', 'important');
                        ref.current.style.setProperty('left', '0');
                    }}>
                        <i className='fas fa-bars'></i>
                    </Button>
                </div>
            </Navbar>
            <div className="px-3">
                <div className="py-3 bg-white">
                    <div className="w3-row">
                        <aside id='sidebar' className={ `offcanvas-lg offcanvas-start w3-quarter ${ sidebarState ? 'show showing' : 'hidding w3-show' }` } ref={ ref } >
                            <div className='d-block d-sm-none'>
                                <ul className='nav w3-light-gray w3-padding justify-content-end'>
                                    <li className='nav-item'>
                                        <Button variant='outline-secondary btn-light' type="button" onClick={ () => {
                                            setSidebarState(!sidebarState);
                                        }} >
                                            <i class="fa-solid fa-xmark"></i>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <div className='w3-padding'>
                                <SearchForm />
                                <hr />
                                <LabelProductsPages />
                                <hr />
                                <CategoryProductsPages />
                                <hr />
                                <CollectionProductsPages />
                            </div>
                        </aside>
                        <main className="w3-main w3-rest w3-padding" style={ {marginLeft: '24.99999%'} }>
                            <h1 className='fs-2 w3-center py-3'>{ renderSwitch() }</h1>
                            <NavSecondaryPages />
                            <div className="w3-padding-small">
                                <div className='bg-white w3-padding'>
                                    <ResultProduct />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}