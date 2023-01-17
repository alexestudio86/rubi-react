export function NotFounds ( ){
    return (
        <div className='container py-5'>
            <div className='row align-items-center bg-white m-3'>
                <div className='col-md-5 p-0'>
                    <img src={ require('../../assets/notFound/404-travolta.gif') } alt="Página no encontrada" width='640' height='622' className='w-100' />
                </div>
                <div className='col-md-7'>
                    <h1>Ooops!, La página que buscas no existe</h1>
                </div>
            </div>
        </div>
    )
}