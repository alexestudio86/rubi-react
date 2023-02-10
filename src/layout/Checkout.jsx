import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { CarFull } from "./CarFull";
import { Form } from './Form';
import { Gratitude } from './Gratitude';


export function Checkout ( ) {

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


    return (
        <>
            <Carousel indicators={false} interval={null} controls={false} activeIndex={state.index} >
                    <Carousel.Item>
                        <CarFull state={state} setState={setState} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Form state={state} setState={setState} />
                    </Carousel.Item>
                    <Carousel.Item>
                        { state.slide === 'thanks' && <Gratitude /> }
                    </Carousel.Item>
            </Carousel>
        </>
    )
}