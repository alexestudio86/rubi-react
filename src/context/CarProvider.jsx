import { useState, useContext, createContext } from "react"

//Functions for create hooks
const carChangesTypesContext = createContext();
const updateCarChangesTypesContext = createContext();
const carContext = createContext();
const updateCarContext = createContext();

//Custom Hooks
export function useCarChangesTypesContext ( ){
  return useContext(carChangesTypesContext)
}
export function useUpdateCarChangesTypesContext ( ){
  return useContext(updateCarChangesTypesContext)
}
export function useCarContext ( ){
  return useContext(carContext)
}
export function useUpdateCarContext ( ){
  return useContext(updateCarContext)
}



export function CarProvider ( {children} ) {

  const [carChangesTypes, setCarChangesTypes] = useState( null );
  const updateCarChangesTypes = ( instruction = {carStatus: null} ) => {
    setCarChangesTypes(instruction.carStatus)
  }
  
  const [car, setCar] = useState( JSON.parse(localStorage.getItem('car')) || [] );
  const updateCar = ( instruction, item ) => {
    switch ( instruction.actionType ){
      case 'CHECK_ITEM': {
        //Find item for id
        const newCar = car.map( c => {
          if( c.id === item.id ){
            const { variants } = c
            return (
              {
                ...c,
                variants: variants.map( v => {
                            //Find for name founded with spread operator
                            if( v.name === item.variants[0].name ){
                              return (
                                {
                                  ...v,
                                  name:     item.variants[0].name,
                                  price:    item.variants[0].price,
                                  quantity: item.variants[0].quantity
                                }
                              )
                            }
                            return v
                        } ) 
              }
            )
          }
          return c
        } )
        setCar(newCar)
        setCarChangesTypes( 'CREATED_ITEM' );
      }
        break;
      default: {
        console.log('Action no Set')
      }
        break;
    }
    const carString = JSON.stringify(car);
    localStorage.setItem('car', carString);
  }

  return (
    <carChangesTypesContext.Provider value={carChangesTypes}>
      <updateCarChangesTypesContext.Provider value={updateCarChangesTypes}>
        <carContext.Provider value={car}>
          <updateCarContext.Provider value={updateCar}>
            {children}
          </updateCarContext.Provider>
        </carContext.Provider>
      </updateCarChangesTypesContext.Provider>
    </carChangesTypesContext.Provider>
  )
}