import Notice from '../components/Notice';
import { NavFull } from '../components/NavFull';
import { Carousel } from '../components/Carousel';
import { NavSecondary } from '../components/NavSecondary';
import { Products } from '../components/Products';
import { Parallax } from '../components/Parallax';
import { Contact } from '../components/Contact';
import { FooterFull } from '../components/FooterFull';



export function HomeView () {
    return (
        <>
            <div>
                <Notice />
                <NavFull />
                <Carousel />
            </div>
            <div>

            </div>
            <div>
                <NavSecondary />
                <div className='container py-2'>
                    <h1 className='text-center py-3'>Lo más nuevo</h1>
                    <main className='row'>
                        <Products />
                    </main>
                </div>
                <Parallax />
                <Contact />
                <FooterFull />
            </div>
        </>
    )
}