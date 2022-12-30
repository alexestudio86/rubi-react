import { NavFull } from '../components/NavFull';
import { Header } from '../components/Header';
import { AllProducts } from '../components/products/AllProducts';
import { GetAllProducts } from '../store/modules/GetAllProducts';



export function StoreView () {
    return (
        <>
            <NavFull />
            <Header />
            <GetAllProducts>
                <AllProducts />
            </GetAllProducts>
        </>
    )
}