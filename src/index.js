import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Index'



const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);



root.render(
    <>
        <Rutas />
    </>
)