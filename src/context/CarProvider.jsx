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
        const findID = car.indexOf( car.find( c => c.id === item.id ) );
        if( findID >= 0 ){
          //Find variant for name
          const itemVariants = car[findID].variants
          const findVariants = itemVariants.indexOf( itemVariants.find( itemVariant => itemVariant.name === item.variants[0].name ) )
          if( findVariants >= 0 ){
            car[findID].quantity    =   item.quantity;
          }else{
            itemVariants.push(
              {
                name: item.variants[0].name
              }
            )
          }
          setCarChangesTypes( 'UPDATED_ITEM' );
          console.log( 'Objeto actualizado');
        }else{
          /*
          car.push(
            {
              name: 'Alejandro',
              lastName: 'Ruiz'
            }
          );
          */
          setCar (
            [
              item,
              ...car
            ]
          );
          setCarChangesTypes( 'CREATED_ITEM' );
          console.log('objeto no encontrado pero creado')
        }
      }
        break;
      default: {
        console.log('Action no Set')
      }
        break;
    }
    console.log('mapuches')
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