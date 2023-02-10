import { ResultProduct } from '../components/products/Product';
import { ShareButton } from '../layout/ShareButton';


export function Product ( ) {
    return (
        <div className='bg-light py-4'>
            <div className="container bg-white">
                <ResultProduct />
                <ShareButton />
            </div>
        </div>
    )
}