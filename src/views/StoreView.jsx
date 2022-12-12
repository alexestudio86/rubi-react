import { NavFull } from '../components/NavFull';
import { Header } from '../components/Header';
import { FeaturedProductsPlaceholder } from '../components/store/FeaturedProductsPlaceholder';
import { NavSecondary } from '../components/NavSecondary';
import { CategoriesPlacesholder } from '../components/CategoriesPlaceholder';
import { Products } from '../components/products/Products';



export function StoreView () {
    return (
        <>
            <NavFull />
            <Header />
            <div className="bg-secondary py-3">
                <div className='container bg-white py-4'>
                    <h1 className='text-center'>Lo mas visto</h1>
                    <div className='row'>
                        <div className='col-md-4'>
                            <FeaturedProductsPlaceholder />
                        </div>
                        <div className='col-md-4'>
                            <FeaturedProductsPlaceholder />
                        </div>
                        <div className='col-md-4'>
                            <FeaturedProductsPlaceholder />
                        </div>
                    </div>
                </div>
                <div className='container bg-white mt-4'>
                    <h1 className='text-center'>Categorías</h1>
                    <NavSecondary />
                    <div className='row'>
                        <div className="col-md-3">
                            <CategoriesPlacesholder />
                        </div>
                        <div className="col-md-3">
                            <CategoriesPlacesholder />
                        </div>
                        <div className="col-md-3">
                            <CategoriesPlacesholder />
                        </div>
                        <div className="col-md-3">
                            <CategoriesPlacesholder />
                        </div>
                    </div>
                </div>
                <div className='container bg-white mt-4'>
                    <h1 className='text-center'>Archivo</h1>
                    <Products />
                </div>
            </div>
        </>
    )
}