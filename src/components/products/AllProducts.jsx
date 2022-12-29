import { GetAllProducts } from '../../store/modules/GetAllProducts';
import Products from './Products';



export function AllProducts ( ) {
  return (
    <GetAllProducts>
      <Products />
    </GetAllProducts>
  )
}
