import parallax from '../styles/parallax.css'


export function Parallax( ){
    return <>
        <div className='d-flex justify-content-center bg-parallax' id='parallax'>
            <div className='align-self-center text-center'>
                <h1 className='text-white fs-1'>Producto Orgánico</h1>
                <p className='text-white fs-2'>Nuestra línea integra en todas sus fórmulas ingredientes de la más alta calidad para brindar el cuidado que necesitas</p>
                <a className='btn bg-white fs-3' href='#'>Saber mas</a>
            </div>
        </div>
    </>
}