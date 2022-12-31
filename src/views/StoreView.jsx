import { NavCompact } from '../components/NavCompact';
import { Search } from '../components/Search';
import { GetAllProducts } from '../store/modules/GetAllProducts';
import { AllProducts } from '../components/products/AllProducts';
import { FooterCompact } from '../components/FooterCompact';



export function StoreView () {
    return (
        <>
            <NavCompact />
            <div className='bg-secondary py-4'>
                <Search />
                <GetAllProducts>
                    <AllProducts />
                </GetAllProducts>
            </div>
            <FooterCompact/>
        </>
    )
}