import logoArminda from '../assets/logo_arminda-dark.png';
import { NavLink } from 'react-router-dom';
const labels = ['Crema para peinar', 'Fijación', 'Herramientas', 'Mascarilla matizante', 'Multifuncionales', 'Multivitaminico', 'Semipermanentes', 'Shampoo'];

export function NavFull( ){
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
            <div className='container'>
                <a className='navbar-brand d-none d-sm-block' href='/'>
                    <img src={ logoArminda } alt='Logo arminda' height='74' />
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className='navbar-toggler-icon'></i>
                </button>
                <a className='btn btn-dark d-block d-sm-none' href='/checkout' >
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    <span className='badge rounded-pill bg-danger'></span>
                </a>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link text-uppercase' href='#home'>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-uppercase' href='#services'>
                                Servicios
                            </a>
                        </li>
                        <li className='nav-item dropdown'>
                            <button className='nav-link dropdown-toggle text-uppercase btn' id='navbarDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                                Productos
                            </button>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                { labels.map( (l, index) => 
                                    <li key={index} >
                                    <a className='dropdown-item' href='/'> {l} </a>
                                </li>
                                ) }
                            </ul>
                        </li>
                    </ul>
                    <form className='d-flex' >
                        <input v-model='searchText' className='form-control me-2' type='search' placeholder='ej. shampoo' aria-label='Search' />
                        {/* Change router link to button */}
                        <button className='btn btn-outline-success' type='submit' >Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

/* If you export directly, you need import with destructuring*/