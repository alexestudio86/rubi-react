import { useEffect, useState, useContext, createContext } from "react"

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

  const [car, setCar] = useState( JSON.parse(localStorage.getItem('car')) || []  );
  const updateCar = ( instruction, item ) => {
    switch ( instruction.actionType ){
      case 'CHECK_ITEM': {
        //Compare ID
        const searchID = car.indexOf( car.find( c => c.id === item.id ) );
        if( searchID >= 0 ){
          //Search item for id
          const { variants } = car[searchID];
          const searchVariants = variants.indexOf( variants.find( variant => variant.name === item.variants[0].name ) )
          
          //Item founded for variants
          if( searchVariants >= 0 ){
              const newCar = car.map( c => {
                if( c.id === item.id ){
                  //cVariants = c.variants
                  return {
                    id:         item.id,
                    name:       item.name,
                    picture:    item.picture,
                    variants:   c.variants.map( v => {
                      if( v.name === item.variants[0].name ){
                        return {
                          name:       item.variants[0].name,
                          price:      item.variants[0].price,
                          quantity:   item.variants[0].quantity
                        }
                      }
                      return v
                    } )
                  }
                }
                return c
              } )
              setCar(newCar)
              setCarChangesTypes( 'VARIANT_UPDATED' );
          }else{
            //Variant not found an created
            const newCar = car.map( c => {
              if( c.id === item.id ){
                //cVariants = c.variants
                return {
                  id:         item.id,
                  name:       item.name,
                  picture:    item.picture,
                  variants:   [...c.variants, item.variants[0]]
                }
              }
              return c
            } )
            setCar(newCar)
            setCarChangesTypes( 'VARIANT_CREATED' );
          }
        }else{
          //Item not found and created
          setCarChangesTypes( 'ITEM_CREATED' );
          setCar( [...car, item] )
        }
      }
        break;
      case 'DELETE_ITEM': {
        //Delete one item with variable
        if( item.variableID >= 0 ){
          //Compare ID
          const searchID = car.indexOf( car.find( c => c.id === item.itemID ) );
          //if item has multiple variable
          if( car[searchID].variants.length >1 ){
            const newCar = car.map( c => {
              if( c.id === item.itemID ){
                return {
                  ...c,
                  variants: [c.variants.filter( (v,i) => i !== item.variableID )]
                }
              }
              return c
            })
            setCarChangesTypes( 'VARIANT_DELETED' );
            setCar( newCar )
          }else{
          //if item has one variable
            setCarChangesTypes( 'VARIANT_DELETED' );
            setCar( car.filter( (c) => c.id !== item.itemID ) )
          }
        }else{
        //Delete item without variable
          setCarChangesTypes( 'ITEM_DELETED' );
          setCar( car.filter( (c) => c.id !== item.itemID ) )
        }
      }
        break;
      default: {
        console.log('Action no Set')
      }
        break;
    }
  }

  useEffect( () => {
    const carString = JSON.stringify(car);
    localStorage.setItem('car', carString);
  },[car])

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