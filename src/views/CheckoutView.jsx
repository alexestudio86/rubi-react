import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Checkouts } from "../components/chekout/Checkouts";
import { useCarContext } from "../context/CarProvider";
import { Form } from '../layout/Form';


export function CheckoutView ( ) {

    //Recovery car data
    const car       =   useCarContext();
    //State for control carousel
    const [index, setIndex] = useState(0);

    return (
        <main className="w3-light-gray py-4" style={ {height: '100vh'} }>
            <div className='container bg-white py-3'>
                <Carousel indicators={false} interval={null} controls={false} activeIndex={index} >
                    <Carousel.Item>
                        <h1 className="bg-light fs-6 container">Carrito de compras</h1>
                        <Checkouts />
                    </Carousel.Item>
                    { car.length > 0 &&
                        <Carousel.Item>
                            <Form />
                        </Carousel.Item>
                    }
                </Carousel>
                { car.length > 0 && <button className='btn btn-primary w-100' onClick={ () => {
                    setIndex(1)
                } }>Siguiente</button> }
            </div>
        </main>
    )
}