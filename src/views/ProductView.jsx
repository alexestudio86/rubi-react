import { NavCompact } from '../components/NavCompact';
import { GetProduct } from '../store/modules/GetProduct';
import { SelectProduct } from '../components/products/SelectProduct';


export function ProductView ( ){
  return (
    <>
      <NavCompact />
      <div className='bg-secondary py-3'>
        <GetProduct>
          <SelectProduct />
        </GetProduct>
      </div>
    </>
  )
}