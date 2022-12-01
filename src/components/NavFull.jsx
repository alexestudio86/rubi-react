import logoArminda from '../assets/logo_arminda-dark.png';
import { NavLink } from 'react-router-dom';

const active = 'nav-link text-uppercase active';
const inactive = 'nav-link text-uppercase';

export function NavFull( ){
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
            <div className='container'>
                <NavLink className='navbar-brand d-none d-sm-block' to='/'>
                    <img src={ logoArminda } alt='Logo arminda' height='74' />
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <i className='navbar-toggler-icon'></i>
                </button>
                <NavLink className='btn btn-dark d-block d-sm-none' to='/checkout' >
                    <i className='fas fa-shopping-cart fa-lg me-1'></i>
                    <span className='badge rounded-pill bg-danger'></span>
                </NavLink>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink className={ ({isActive}) => isActive ? active : inactive} to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-uppercase' to='/services'>
                                Servicios
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link text-uppercase' to='/products'>
                                Productos
                            </NavLink>
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