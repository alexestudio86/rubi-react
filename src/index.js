import React from 'react'
import ReactDOM from 'react-dom/client'
import Notice from './components/Notice'
import { NavFull } from './components/NavFull'
import { Carousel } from './components/Carousel'
import { NavSecondary } from './components/NavSecondary'
import { Articles } from './components/Articles'
import { Parallax } from './components/Parallax'
import { Contact } from './components/Contact'
import { FooterFull } from './components/FooterFull'


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);



root.render(
    <>
        <Notice />
        <NavFull />
        <Carousel />
        <NavSecondary />
        <div className='container py-2'>
            <h1 className='text-center py-3'>Lo más nuevo</h1>
            <main className='row'>
                <Articles />
            </main>
        </div>
        <Parallax />
        <Contact />
        <FooterFull />
    </>
)