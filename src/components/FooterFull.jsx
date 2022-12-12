export function FooterFull( ){
    return <>
        <footer id='footerFull'>
            <div className='bg-secondary'>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='text-center fs-2 text-white py-2'>Horarios</h2>
                            <ul className='list-group text-center'>
                                <li className='list-group-item'>Lunes y martes de 10 a 19hrs</li>
                                <li className='list-group-item'>miércoles de 10 a 18hrs</li>
                                <li className='list-group-item'>jueves 10 a 17hrs</li>
                                <li className='list-group-item'>viernes de 10 a 19hrs</li>
                                <li className='list-group-item'>sábado de 10 a 17hrs</li>
                                <li className='list-group-item'>domingo cerrado</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <h2 className='text-center fs-2 text-white py-2'>Secciones</h2>
                            <ul className='list-group text-center'>
                                <li className='list-group-item'>
                                    <a href='#' className='link-primary'>Términos y condiciones</a>
                                </li>
                                <li className='list-group-item'>
                                    <a href='#' className='link-primary'>Aviso de privacidad</a>
                                </li>
                            </ul>
                            <h2 className='text-center fs-2 text-white py-2'>Redes</h2>
                            <ul className='list-group text-center'>
                                <li className='list-group-item'>
                                    <a className='text-dark' href='#'>
                                        <i className='fab fa-facebook fa-lg me-1'></i>
                                    </a>
                                    <a className='text-dark' href='#'>
                                        <i className='fab fa-twitter fa-lg me-1'></i>
                                    </a>
                                    <a className='text-dark' href='#'>
                                        <i className='fab fa-instagram fa-lg'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark'>
                <div className='container py-2'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            By <a href='#' className='link-primary'>Petitpua Buró Creativo</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}