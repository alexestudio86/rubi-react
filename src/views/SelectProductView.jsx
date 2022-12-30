import { NavCompact } from "../components/NavCompact";

export function SelectProductView ( ){
  return (
    <>
      <NavCompact />
      <div className='bg-light'>
        <div className='container py-5'>
          <div className='bg-white p-3'>
            <h1>Selecciona un producto</h1>
          </div>
        </div>
      </div>
    </>
  )
}