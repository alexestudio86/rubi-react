import Carousel from 'react-bootstrap/Carousel';


export function Carousels ( ){

    const slides = [
        {
            slideTitle: "Slide 01",
            slideUrl:   require("../../assets/carousel/slide_01.jpeg")
        },{
            slideTitle: "Slide 02",
            slideUrl:   require("../../assets/carousel/slide_02.jpeg")
        },{
            slideTitle: "Slide 03",
            slideUrl:   require("../../assets/carousel/slide_03.jpeg")
        }
    ]

    return (
        <Carousel>
            { slides.map( (slide, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={ slide.slideUrl } alt={ slide.slideTitle } />
                </Carousel.Item>
            ) ) }
        </Carousel>
    )
}
