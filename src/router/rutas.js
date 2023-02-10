import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFoundView } from "../views/NotFoundView";
import { getHomeProducts, getAllProducts, getProduct, getProductsByPagination, getProductsByCollection } from "../context/jsonCalls";
import { HomeView } from "../views/HomeView";
import { ProductsView } from "../views/ProductsView";
import { PaginationView } from "../views/PaginationView";
import { ProductView } from "../views/ProductView";
import { CheckoutView } from "../views/CheckoutView";
import { CollectionView } from "../views/CollectionView";
    import { Collection } from "../layout/Collection";
    import { Collections } from "../components/collection/Collections";


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
                loader:     getProduct,
            },{
                element:    <PaginationView />,
                path:       'products/search',
                loader:     getProductsByPagination
            },{
                element:    <CheckoutView />,
                path:       'checkout',
            },{
                element:    <CollectionView />,
                path:       'collections',
                children:   [
                    {
                        element:    <Collections />,
                        path:       ''
                    },{
                        element:    <Collection />,
                        path:       ':collectionId',
                        loader:     getProductsByCollection
                    }
                ]
            }
        ]
    }
])