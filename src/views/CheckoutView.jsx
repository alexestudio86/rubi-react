import { Checkouts } from "../components/chekout/Checkouts"


export function CheckoutView ( ) {
    return (
        <main className="w3-light-gray py-4">
            <h1 className="bg-light fs-6 container">Carrito de compras</h1>
            <div className='container bg-white py-3'>
                <Checkouts />
            </div>
        </main>
    )
}