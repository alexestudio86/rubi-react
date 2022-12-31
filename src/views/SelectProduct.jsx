import { NavCompact } from '../components/NavCompact';
import { FooterCompact } from '../components/FooterCompact';


export function SelectProduct ( ){

  return (
    <>
      <NavCompact />
      <div className='bg-secondary p-4'>
        <div className='container py-5'>
          <div className='bg-white p-3'>
            <h1>Selecciona un producto</h1>
          </div>
        </div>
      </div>
      <FooterCompact/>
    </>
  )

}