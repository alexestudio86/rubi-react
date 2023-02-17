import { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Navbar, Button, Container } from 'react-bootstrap';
import { ResultProduct } from './ResultProduct';
import { SearchForm } from '../components/search/SearchForms';
import { NavSecondaryPages } from '../components/navSecondary/NavSecondaries';
import { LabelProductsPages, CategoryProductsPages, CollectionProductsPages } from '../components/products/Products';


export function StorePages ( ) {

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

    const [sidebarState, setSidebarState] = useState(false);

    //Use reference for reset position of aside
    const ref = useRef(null);


    return (
        <>
            <Navbar className='d-sm-none d-sm-block' bg="secondary" sticky="top" id='navSidebar'>
                <Container>
                    <Button variant="outline-light" onClick={ () => {
                        setSidebarState(!sidebarState);
                        //Set style property for reference
                        ref.current.style.setProperty('position', 'relative', 'important');
                    }}>
                        <i className='fas fa-bars'></i>
                    </Button>
                </Container>
            </Navbar>
            <div className="px-3">
                <div className="py-3 bg-white">
                    <div className="w3-row">
                        <aside id='sidebar' className={ `w3-sidebar w3-bar-block w3-collapse w3-quarter ${ sidebarState ? 'w3-show w3-animate-left' : '' }` } ref={ ref } >
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
                        </aside>
                        <div className="w3-main w3-rest w3-padding" style={ {marginLeft: '24.99999%'} }>
                            <h1 className='w3-center py-3'>{ renderSwitch() }</h1>
                            <NavSecondaryPages />
                            <div className="w3-padding-small">
                                <main className='bg-white w3-padding-small'>
                                    <ResultProduct />
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}