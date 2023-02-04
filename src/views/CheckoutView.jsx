import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useGuestNameContext } from "../context/CarProvider";
import { CarFull } from "../layout/CarFull";
import { Form } from '../layout/Form';
import { Gratitude } from '../layout/Gratitude';


export function CheckoutView ( ) {


    //State for control carousel
    const [state, setState] = useState({
        slide:      '',
        index:      0
    });

    //Use effect
    useEffect( () => {
        switch ( state.slide ){
            case 'car':
                setState(
                    {
                        ...state,
                        index: 0
                    }
                );
                break;
            case 'form':
                setState(
                    {
                        ...state,
                        index: 1
                    }
                );
                break;
            case 'thanks':
                setState(
                    {
                        ...state,
                        index: 2
                    }
                );
                break;
            default:
                setState(
                    {
                        ...state,
                        index: 0
                    }
                );
        }
    }, [state.slide])


    //Use params
    const [params, setParams] = useSearchParams();

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
                        <CarFull state={state} setState={setState} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Form state={state} setState={setState} checkName={checkName} msg={msg} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Gratitude />
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
    )
}