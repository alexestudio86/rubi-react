import { useSearchParams } from "react-router-dom";
import { useCarContext } from "../context/CarProvider";
import { Carfulls } from "../components/carFull/Carfulls";


export function CarFull ( {state, setState} ) {

    //Recovery car data
    const car       =   useCarContext();

    //Use params
    const [params, setParams] = useSearchParams();

    return (
        <>
            <h1 className="px-2 bg-light fs-5 container">Carrito de compras</h1>
            <Carfulls />
            <div className="px-2">
                { car.length > 0 && <button className='btn btn-secondary w-100 mb-5' onClick={ () => {
                    setParams(
                        {
                            contactInfo:    true
                        }
                    );
                    setState(
                        {
                            ...state,
                            slide:          'form'
                        }
                    )
                } }>Siguiente</button> }
            </div>
        </>
    )
}