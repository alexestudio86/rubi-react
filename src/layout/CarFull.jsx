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
            <h1 className="bg-light fs-6 container">Carrito de compras</h1>
            <Carfulls />
            { car.length > 0 && <button className='btn btn-secondary w-100' onClick={ () => {
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
        </>
    )
}