import { GetAllProducts } from '../store/modules/blogger'


export function Articles( ){
    return <>
        <article className='col-md-6 p-2' >
            <div className='card p-2'>
                <div className='row'>
                    <header className='col-md-9 d-none d-sm-block'>
                    <h1 className='fs-4 text-uppercase text-primary card-title'>Titulo</h1> 
                        <span className='fs-5 badge bg-secondary'>Label</span>
                    </header>
                    <div className='col-md-3' style={{ background: 'linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)'}}>
                        <img className='w-100 rounded-circle' alt='Imagen' src='#' style={{ width: '100%', height: '100%', objectFit: 'contain'}} />
                    </div>
                    <div className='col-md-9 bg-light d-block d-sm-none d-flex justify-content-between align-items-center'>
                        <h1 className='m-0 text-secondary fs-6 fw-bold'>Título post</h1>
                    <a className='btn' href='#'>
                        <i className='far fa-caret-square-down text-primary fa-2x'></i>
                    </a>
                    </div>
                </div>
            </div>
        </article>
    </>
}