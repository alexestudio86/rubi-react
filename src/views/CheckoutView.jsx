import { Checkouts } from "../components/chekout/Checkouts"


export function CheckoutView ( ) {
    return (
        <main className="w3-light-gray py-4">
            <div className='container bg-white'>
                <h1 className="text-end">Carrito de compras</h1>
                <Checkouts />
            </div>
        </main>
    )
}