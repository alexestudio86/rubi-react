import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { rutas } from './router/rutas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CarProvider } from './context/CarProvider';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <CarProvider>
            <RouterProvider router={rutas} />
        </CarProvider>
    </React.StrictMode>
)