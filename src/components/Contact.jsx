import imageProfile from '../assets/profile.png'


export function Contact( ){
    return <>
        <div className='bg-light' id='contact'>
            <div className='container py-2'>
                <h1 className='text-center py-2'>Contacto</h1>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                        <img src={ imageProfile } alt='Profile' width='320' />
                        <p className='text-start'><b>Soy Arminda Chávez</b> directora Internacional Mishley31. <small>(INC-AF-M31/ABCV-MICH/010221-05)</small>, <b>Master en Colorimetría.</b><small>(AF-M31/ABCV-011-COL/010221)</small> Instructor. (AF-M31/ABCV-012-INS/010221) Estilista Profesional con 15 años de experiencia creadora de su propia marca capilar y cosmética, también soy coach espiritual, coreógrafa, thetahealer, numeróloga y tarotista</p>
                    </div>
                    <div className='col-md-6'>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1987391028106!2d-102.35059538509849!3d19.09893538707468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf661007393d607a!2sArminda%20Ch%C3%A1vez!5e0!3m2!1ses-419!2smx!4v1638646663073!5m2!1ses-419!2smx' width='100%' height='400' style={{ border: 0 }} allowFullScreen='yes' loading='lazy'></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
}