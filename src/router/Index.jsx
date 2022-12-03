import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { Store } from '../views/Store';
import { Product } from '../views/Product'
import { NotFound } from '../views/NotFound';

export function Rutas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='/store' element={<Store />} >
                    <Route path=':10' element={<Product/>} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}