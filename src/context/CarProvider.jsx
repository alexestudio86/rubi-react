import { useState, useContext, createContext } from "react"

//Functions for create Car
const carContext = createContext();
const updateCarContext = createContext();

//Custom Hooks
export function useCarContext ( ){
  return useContext(carContext)
}

export function useUpdateCarContext ( ){
  return useContext(updateCarContext)
}

export function CarProvider ( {children} ) {

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
            car[findID].quantity    =   item.quantity
            console.log( 'Objeto actualizado');
          }else{
            itemVariants.push(
              {
                name: item.variants[0].name
              }
            )
            console.log( 'Objeto añadido' );
          }
        }else{
          updateCar( item );
          console.log('objeto no encontrado')
        }
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
      }
        break
      default: {
        console.log('Action no Set')
      }
    }
    console.log(car)
  }

  return (
    <carContext.Provider value={car}>
      <updateCarContext.Provider value={updateCar}>
        {children}
      </updateCarContext.Provider>
    </carContext.Provider>
  )
}