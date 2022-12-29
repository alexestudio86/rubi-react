import { NavFull } from '../components/NavFull';
import { Header } from '../components/Header';
import { AllProductsPlaceholder } from '../components/placeholders/AllProductsPlaceholder';
import { AllProducts } from '../components/products/AllProducts'



const ok = false;

export function StoreView () {
    return (
        <>
            <NavFull />
            <Header />
            { ok ? <AllProductsPlaceholder /> : <AllProducts /> }
        </>
    )
}