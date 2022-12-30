import { NavCompact } from '../components/NavCompact';
import Product from "../components/products/Product";
import { GetProduct } from '../store/modules/GetProduct';


export function ProductView ( ){
  return (
    <>
      <NavCompact />
      <GetProduct>
        <Product />
      </GetProduct>
    </>
  )
}