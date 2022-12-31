import { ProductPlaceholder } from '../placeholders/ProductPlaceholder';
import Product from './Product';
import { useToggleLoadingContext } from '../../store/modules/GetProduct';

export function SelectProduct ( ){

  const loading = useToggleLoadingContext();

  return (
    <div className='bg-light'>
      <div className='container py-5'>
        <div className='bg-white p-3'>
          <h1>Selecciona un producto</h1>
          { loading ? <ProductPlaceholder /> : <Product /> }
        </div>
      </div>
    </div>
  )
}