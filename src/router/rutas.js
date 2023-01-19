import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFoundView } from "../views/NotFoundView";
import { HomeView } from "../views/HomeView";
import { ProductsView } from "../views/ProductsView";
import { PaginationView } from "../views/PaginationView";
import { ProductView } from "../views/ProductView";
import { getHomeProducts, getAllProducts, getPagination, getProduct } from "../context/jsonCalls";


export const rutas = createBrowserRouter([
    {
        element:    <Layout />,
        path:       '/',
        errorElement: <NotFoundView />,
        children:   [
            {
                index:      true,
                element:    <HomeView />,
                loader:     getHomeProducts
            },{
                element:    <ProductsView />,
                path:       "products",
                loader:     getAllProducts
            },{
                element:    <ProductView />,
                path:       'products/:itemID',
                loader:     getProduct
            },{
                element:    <PaginationView />,
                path:       'products/search',
                loader:     getPagination
            }
        ]
    }
])