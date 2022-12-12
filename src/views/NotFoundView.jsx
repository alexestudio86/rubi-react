import { NavCompact } from '../components/NavCompact'
import Travolta from '../assets/404-travolta.gif'

export function NotFoundView ( ){
    return (
        <>
            <NavCompact />
            <main className='bg-light'>
                <div className='container py-5'>
                    <div className='row align-items-center bg-white m-3'>
                        <div className='col-md-5 p-0'>
                            <img src={Travolta} alt="Página no encontrada" width='640' height='622' className='w-100' />
                        </div>
                        <div className='col-md-7'>
                            <h1>Ooops!, La página que buscas no existe</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}