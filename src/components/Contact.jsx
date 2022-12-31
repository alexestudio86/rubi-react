import contact from './contact.css';


export function Contact( ){
    return (
        <div className='bg-contact' id='contact'>
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-center fs-2 text-white py-2'>Ubicación</h1>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1987391028106!2d-102.35059538509849!3d19.09893538707468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf661007393d607a!2sArminda%20Ch%C3%A1vez!5e0!3m2!1ses-419!2smx!4v1638646663073!5m2!1ses-419!2smx' width='100%' height='320' style={{ border: 0 }} allowFullScreen='yes' ></iframe>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='text-center fs-2 text-white py-2'>Horarios</h1>
                        <ul className='w3-ul w3-tiny text-white fs-3 text-end'>
                            <li className='fs-4'>Lunes y martes de 10 a 19hrs</li>
                            <li className='fs-4'>miércoles de 10 a 18hrs</li>
                            <li className='fs-4'>jueves 10 a 17hrs</li>
                            <li className='fs-4'>viernes de 10 a 19hrs</li>
                            <li className='fs-4'>sábado de 10 a 17hrs</li>
                            <li className='fs-4'>domingo cerrado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}