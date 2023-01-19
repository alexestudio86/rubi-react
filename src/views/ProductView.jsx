import { ResultProduct } from '../components/products/Product';
import { ShareButton } from '../layout/ShareButton';

export function ProductView ( ){
   return (
    <div className='bg-light py-4'>
      <div className="container bg-white">
        <ResultProduct />
        <ShareButton />
      </div>
    </div>
  )
}