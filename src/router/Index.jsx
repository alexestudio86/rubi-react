import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomeView } from '../views/HomeView';
import { Products } from '../views/Products'
import { NotFound } from '../views/NotFound';

export function Rutas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='/products' element={<Products />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}