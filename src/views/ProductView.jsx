import { useToggleLoadingContext } from '../store/modules/GetProduct';
import { NavCompact } from '../components/NavCompact';
import { GetProduct } from '../store/modules/GetProduct';
import { ProductPlaceholder } from '../components/placeholders/ProductPlaceholder';
import Product from '../components/products/Product';
import { FooterCompact } from '../components/FooterCompact';


export function ProductView ( ){

  const loading = useToggleLoadingContext();

  return (
    <>
      <NavCompact/>
      <div className='bg-secondary p-4'>
        <div className='container py-5'>
          <div className='bg-white p-3'>
          <GetProduct>
            <div className='py-3'>
              { loading ? <ProductPlaceholder /> : <Product /> }
            </div>
          </GetProduct>
          </div>
        </div>
      </div>
      <FooterCompact/>
    </>
  )

}