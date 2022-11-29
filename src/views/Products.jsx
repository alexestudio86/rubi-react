import { NavFull } from '../components/NavFull';
import { PopularProductsPlaceholder } from '../components/PopularProductsPlaceholder';
import { NavSecondary } from '../components/NavSecondary';



export function Products () {
    return (
        <>
            <NavFull />
            <div className="bg-light py-3">
                <div className='container bg-white py-4'>
                    <h1 className='text-center'>Lo mas visto</h1>
                        <main className='row'>
                        <PopularProductsPlaceholder />
                        <PopularProductsPlaceholder />
                        <PopularProductsPlaceholder />
                    </main>
                    <h1 className='text-center'>Categorías</h1>
                    <NavSecondary />
                </div>
            </div>

        </>
    )
}