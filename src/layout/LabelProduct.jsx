import { useLocation } from "react-router-dom";
import { getAllLabels } from "../context/jsonCalls";
import { LabelProductsHome, LabelProductsPages } from "../components/products/Products";


export function LabelProduct ( ) {
    const location = useLocation();
    return (
        <>
            { location.pathname === '/' ? <LabelProductsHome labels={getAllLabels()} /> : <LabelProductsPages labels={getAllLabels()} /> }
        </>
    )
}