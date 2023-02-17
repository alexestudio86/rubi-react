import { useRouteError } from "react-router-dom";
import { NotFounds } from "../components/notFound/NotFounds";


export function NotFound ( ) {

    const error = useRouteError()

    return (
        <>
            { console.error( `Error al cargar el sitio: ${error} `) }
            <NotFounds />
        </>
    )
}