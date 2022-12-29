import { FeaturedProductsPlaceholder } from './FeaturedProductsPlaceholder';
import { CategoriesPlacesholder } from './CategoriesPlaceholder';
import { ProductsPlaceholder } from './ProductsPlaceholder';



export function AllProductsPlaceholder (){
    return(
        <main className='row'>
            <div className="bg-secondary py-3">
                <div className='container bg-white py-4'>
                    <h1 className='text-center placeholder-glow'>
                        <span className='placeholder col-3'></span>
                    </h1>
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
                    <h1 className='text-center placeholder-glow'>
                        <span className='placeholder col-3' ></span>
                    </h1>
                    <div className='placeholder-glow'>
                        <div className="placeholder py-4 w-100"></div>
                    </div>
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
                    <h1 className='text-center placeholder-glow'>
                        <span className='placeholder col-3' ></span>
                    </h1>
                    <div className="row py-3">
                        <div className="col-md-6">
                            <ProductsPlaceholder />
                        </div>
                        <div className="col-md-6">
                            <ProductsPlaceholder />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}