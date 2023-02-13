import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFoundView } from "../views/NotFoundView";
import { getHomeProducts, getAllProducts, getProduct, getProductsByPagination, getProductsByCategory, getProductsByCollection } from "../context/jsonCalls";
import { HomeView } from "../views/HomeView";
import { ProductsView } from "../views/ProductsView";
import { PaginationView } from "../views/PaginationView";
import { ProductView } from "../views/ProductView";
import { CheckoutView } from "../views/CheckoutView";
import { CollectionView } from "../views/CollectionView";
    import { Collection } from "../layout/Collection";
    import { Collections } from "../components/collection/Collections";
import { CategoryView } from "../views/CategoryView";
    import { Category } from "../layout/Category";
    import { Categories } from "../components/category/Categories";
import { ServicesPage } from "../pages/ServicesPage";


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
                element:    <CategoryView />,
                path:       'categories',
                children:   [
                    {
                        element:    <Category />,
                        path:       '',
                    },{
                        element:    <Categories />,
                        path:       ':categoryId',
                        loader:     getProductsByCategory
                    }
                ]
            },{
                element:    <CollectionView />,
                path:       'collections',
                children:   [
                    {
                        element:    <Collection />,
                        path:       '',
                    },{
                        element:    <Collections />,
                        path:       ':collectionId',
                        loader:     getProductsByCollection
                    }
                ]
            },{
                element:    <ServicesPage />,
                path:       'services'
            }
        ]
    }
])