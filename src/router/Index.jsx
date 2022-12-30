import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { StoreView } from '../views/StoreView';
import { NotFoundView } from '../views/NotFoundView';
import { SelectProductView } from '../views/SelectProductView';
import { ProductView } from '../views/ProductView';


export function Rutas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='store' element={<StoreView />} />
                <Route path='store/product' element={<SelectProductView />} />
                <Route path='store/product/:postID' element={<ProductView />} />
                <Route path='*' element={<NotFoundView />} />
            </Routes>
        </BrowserRouter>
    )
}