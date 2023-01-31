export function FooterCompact ( ){
    return (
        <div className='bg-dark fixed-bottom' id='footerFull'>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-12 text-center'>By <a href='#' className='link-primary'>Petitpua Buró Creativo</a></div>
                </div>
            </div>
        </div>
    )
}


export function FooterFull( ){
    return (
        <div className='bg-secondary'>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        { /* related documents */ }
                        <h1 className='text-center fs-2 text-white py-2'>Links</h1>
                        <ul className='list-group text-center'>
                            <li className='list-group-item'>
                                <a href='#' className='link-primary'>Términos y condiciones</a>
                            </li>
                            <li className='list-group-item'>
                                <a href='#' className='link-primary'>Aviso de privacidad</a>
                            </li>
                            <li className='list-group-item'>
                                <a href='#' className='link-primary'>Contacto</a>
                            </li>
                        </ul>
                        { /* contact information */ }
                        <h1 className='text-center fs-2 text-white py-2'>Redes</h1>
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
                    <div className='col-md-6 text-center'>
                        { /* authorship information */ }
                        <h1 className='text-center fs-2 text-white py-2'>Perfil</h1>
                        <div className='row'>
                            <div className='col-md-8'>
                                <ul className='list-group text-center'>
                                    <li className='list-group-item'>
                                    <p className='text-start'><b>Soy Arminda Chávez</b> directora Internacional Mishley31. <small>(INC-AF-M31/ABCV-MICH/010221-05)</small>, <b>Master en Colorimetría.</b><small>(AF-M31/ABCV-011-COL/010221)</small> Instructor. (AF-M31/ABCV-012-INS/010221) Estilista Profesional con 15 años de experiencia creadora de su propia marca capilar y cosmética, también soy coach espiritual, coreógrafa, thetahealer, numeróloga y tarotista</p>
                                    </li>
                                </ul>
                                </div>
                                <div className='col-md-4'>
                                    <img className='w-100' src={ require('../../assets/footer/profile.png') } alt='Profile' width='120' style={ { objectFit: 'contain' } } />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}