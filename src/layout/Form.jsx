import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGuestNameContext } from "../context/CarProvider";
import { ContactForm } from "../components/form/Forms";

export function Form ( {state, setState} ) {

    //Use params
    const [params, setParams] = useSearchParams();

    //Guest Name
    const guestName     = useGuestNameContext();

    //Data Message
    const [msg, setMsg] = useState('')
    const checkName = ( ) => {

        if( guestName.length < 3 ){
            setMsg('Nombre demasiado corto')
        }else{
            params.delete('contactInfo')
            setParams(
                {
                    greetings:  true
                }
            );
            setState(
                {
                    ...state,
                    slide:      'thanks'
                }
            );
            setMsg('')
        }
    }

    return (
        <div className="container">
            <h1 className="fs-5">Ingresa tu nombre para continuar</h1>
            <ContactForm msg={msg} checkName={checkName}  />
            <hr />
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={ () => {
                    params.delete('contactInfo')
                    setParams(params);
                    setState(
                        {
                            ...state,
                            slide:      'car'
                        }
                    )
                }}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="btn btn-primary" onClick={ checkName } >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}