import Notice from '../components/Notice';
import { NavFull } from '../components/NavFull';
import { Carousel } from '../components/Carousel';
import { NavSecondary } from '../components/NavSecondary';
import { Store } from '../components/Store'
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
                <NavSecondary />
                <Store />
                <Parallax />
                <Contact />
                <FooterFull />
            </div>
        </>
    )
}