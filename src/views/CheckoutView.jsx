import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Checkouts } from "../components/chekout/Checkouts";
import { useCarContext } from "../context/CarProvider";
import { Form } from '../layout/Form';
import { useGuestNameContext } from '../context/CarProvider';


export function CheckoutView ( ) {

    //Recovery car data
    const car       =   useCarContext();

    //State for control carousel
    const [state, setState] = useState({
        contactForm:    false,
        index:          0
    });

    //Use params
    const [params, setParams] = useSearchParams();

    //Use effect
    useEffect( () => {
        if( state.contactForm ){
            //Other form to set preview and new value
            setState(
                {
                    ...state,
                    index: 1
                }
            );
        }else{
            //Other form to set preview and new value
            setState(
                {
                    ...state,
                    index: 0
                }
            );
        }
    }, [state.contactForm])


    //Guest Name
    const guestName     = useGuestNameContext();
    
    //Data Message
    const [msg, setMsg] = useState('')
    //Check name
    const navigate = useNavigate()
    const checkName = ( ) => {
        if( guestName.length < 3 ){
            setMsg( 'El nombre es demasiado corto' )
        }else{
            setMsg('');
            navigate('/order')
        }
    }


    return (
        <main className="w3-light-gray py-4" style={ {height: '100vh'} }>
            <div className='container bg-white py-3'>
                <Carousel indicators={false} interval={null} controls={false} activeIndex={state.index} >
                    <Carousel.Item>
                        <h1 className="bg-light fs-6 container">Carrito de compras</h1>
                        <Checkouts />
                        { car.length > 0 && <button className='btn btn-secondary w-100' onClick={ () => {
                            setParams(
                                {
                                    contactInfo:    true
                                }
                            );
                            setState(
                                {
                                    ...state,
                                    contactForm: true
                                }
                            )
                        } }>Siguiente</button> }
                    </Carousel.Item>
                    <Carousel.Item>
                        <Form checkName={checkName} msg={msg} />
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-secondary" onClick={ () => {
                                params.delete('contactInfo')
                                setParams(params);
                                setState(
                                    {
                                        ...state,
                                        contactForm: false
                                    }
                                )
                            }}>
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button className="btn btn-primary" onClick={ checkName } >
                                <i className="fa-solid fa-angles-right"></i>
                            </button>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
    )
}