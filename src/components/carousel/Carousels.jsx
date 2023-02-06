import Carousel from 'react-bootstrap/Carousel';


export function Carousels ( ){

    const slides = [
        {
            slideTitle: "Mascarillas",
            slideUrl:   require("../../assets/carousel/slide_01.jpeg")
        },{
            slideTitle: "En lugar de crema, poner permanente",
            slideUrl:   require("../../assets/carousel/slide_02.jpeg")
        },{
            slideTitle: "En lugar de multi, poner líquidos",
            slideUrl:   require("../../assets/carousel/slide_03.jpeg")
        },{
            slideTitle: "Shampoo",
            slideUrl:   require("../../assets/carousel/slide_04.jpeg")
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
