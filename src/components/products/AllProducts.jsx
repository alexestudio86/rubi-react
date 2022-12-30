import { ProductsPlaceholder } from '../placeholders/ProductsPlaceholder';
import Products from './Products';
import { useToggleLoadingContext } from '../../store/modules/GetAllProducts';


export function AllProducts ( ) {
  
  const loading = useToggleLoadingContext();

  return (
    <>
      { loading ? <ProductsPlaceholder /> : <Products /> }
    </>
  )
}
