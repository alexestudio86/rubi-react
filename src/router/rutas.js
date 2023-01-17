import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomeView } from "../views/HomeView";
import { ProductsView } from "../views/ProductsView";
import { ProductView } from "../views/ProductView";
import { NotFoundView } from "../views/NotFoundView";
import { getHomeProducts, getAllProducts, getProduct } from "../context/jsonCalls";


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
                loader:     getAllProducts,
            },{
                element:    <ProductView />,
                path:       'products/:postID',
                loader:     getProduct
            }
        ]
    }
])