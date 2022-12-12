import { Link } from 'react-router-dom'

export function NavCompact(){
    return (
        <>
            <nav className='navbar navbar-dark bg-dark sticky-top'>
                <div className='container'>
                    <Link className='btn' to='/'>
                        <i className='fas fa-home fa-2x text-white'></i>
                    </Link>
                    <Link className='btn btn-dark d-block d-sm-none' to='/checkout'>
                        <i className='fas fa-shopping-cart fa-lg me-1'></i>
                        <span className='badge rounded-pill bg-danger'>0</span>
                    </Link>
                </div>
            </nav>
        </>
    )
}