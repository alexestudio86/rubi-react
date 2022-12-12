import bgHeader from '../assets/slide_01.jpeg';
import logoArminda from '../assets/logo_arminda-dark.png'

export function Header( ){
    return <>
        <header id='header'>
            <div className='py-3 bg-secondary d-none d-sm-block'>
                <h2 className='text-center text-white fs-1 fw-bold text-uppercase'>Toluca Arminda</h2>
            </div>
            <div className='d-block d-sm-none'>
                <div className='w3-display-container'>
                    <img src={ bgHeader } alt='Background header' height='120' style={ {width: '100%', objectFit: 'cover'} } />
                    <img className='w3-display-bottomright' src={ logoArminda } alt='Logo' width='120' height='90' style={ {objectFit: 'cover'} } />
                </div>
            </div>
        </header>
    </>
}