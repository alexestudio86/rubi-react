import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { StoreView } from '../views/StoreView';
import { NotFoundView } from '../views/NotFoundView';
import { ProductView } from '../views/ProductView';
import { Product } from '../components/products/Product';


export function Rutas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='store' element={<StoreView />} />
                <Route path='store/product' element={<ProductView />} />
                <Route path='store/product/:postID' element={<Product/>} />
                <Route path='*' element={<NotFoundView />} />
            </Routes>
        </BrowserRouter>
    )
}