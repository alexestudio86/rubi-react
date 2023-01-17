import { useLocation } from "react-router-dom";
import { getAllCategories } from '../context/jsonCalls'
import { CategoryProductsHome, CategoryProductsPages } from '../components/products/Products';

export function CategoryProduct ( ){
    const location = useLocation();
    return (
        <>
            { location.pathname === '/' ? <CategoryProductsHome categories={getAllCategories()} /> : <CategoryProductsPages categories={getAllCategories()} /> }
        </>
    )
}