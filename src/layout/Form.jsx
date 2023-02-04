import { useSearchParams, useNavigate } from "react-router-dom";
import { ContactForm } from "../components/form/Forms";


export function Form ( {state, setState, checkName, msg} ) {

    //Use params
    const [params, setParams] = useSearchParams();

    //Redirect
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="fs-5">Ingresa tu nombre para continuar</h1>
            <ContactForm checkName={checkName} msg={msg} />
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
                <button className="btn btn-primary" onClick={ () => {
                    checkName();
                    if( msg.length > 1 ){
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
                        )
                        setTimeout(() => navigate('/'), 5000);
                    }
                }} >
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}