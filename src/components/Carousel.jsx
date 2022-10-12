import slide01 from '../assets/slide_01.jpeg'
import slide02 from '../assets/slide_02.jpeg'
import slide03 from '../assets/slide_03.jpeg'


export function Carousel( ){
    return <>
        <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={ slide01 } className='d-block w-100' alt='Slide 01' />
                </div>
                <div className='carousel-item'>
                    <img src={ slide02 } className='d-block w-100' alt='Slide 02' />
                </div>
                <div className='carousel-item'>
                    <img src={ slide03 } className='d-block w-100' alt='Slide 03' />
                </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span >Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span >Next</span>
            </button>
        </div>
    </>
}
