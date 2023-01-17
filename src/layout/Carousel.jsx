import { Carousels } from "../components/carousel/Carousels"


export function Carousel ( ){
    const slides = [
        {
            slideTitle: "Slide 01",
            slideUrl:   require("../assets/carousel/slide_01.jpeg")
        },{
            slideTitle: "Slide 02",
            slideUrl:   require("../assets/carousel/slide_02.jpeg")
        },{
            slideTitle: "Slide 03",
            slideUrl:   require("../assets/carousel/slide_03.jpeg")
        }
    ]
    return (
        <div id='carousel' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
                <Carousels slides={slides} />
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carousel' data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span >Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carousel' data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span >Next</span>
            </button>
        </div>
    )
}