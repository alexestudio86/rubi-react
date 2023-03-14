import { useCarContext, useUpdateCarContext } from "../../context/CarProvider";
import { ModalDelete } from '../modal/Modals';
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useCarChangesTypesContext } from '../../context/CarProvider';
import { ToastDelete } from "../toast/Toasts";


export function Carfulls ( ) {

    //Recovery car data
    const car       =   useCarContext()
    const updateCar =   useUpdateCarContext();
    const carChangesTypes       = useCarChangesTypesContext();

    //Show Modal
    const [ deleteItem, setDeleteItem ] = useState(false)
    //Add params
    const [params, setParams] = useSearchParams();

    const formateador =  (e) => {
        return (new Intl.NumberFormat('en-US') ).format(e)
    }


    return (
        <div>
            { car.length > 0 ?
                <>
                    { car.map( (c,idx) => (
                        <div key={idx}>
                            { c.variants.map( (v,i) => (
                                <div key={i} className="bg-light m-1 py-2">
                                    <div key={i} className='w3-row'>
                                        <div className='w3-col s4 p-0'>
                                            <img className='rounded' width='100px' height='auto' src={c.picture} alt={c.name} style={ {width: '100%', height: '70px', objectFit: 'contain'} } />
                                        </div>
                                        <div className='w3-rest p-0'>
                                            <h1 className='fs-4 m-0 fw-bold'>{ c.name }</h1>
                                            <p className="fs-6">1 x { formateador(v.price) } = <span className="price fw-bold">{ formateador(v.price*v.quantity) }</span></p>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-6 fw-bold">Variante: </span><span className="m-0">{ v.name }</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w3-row">
                                        <div className='col-12 p-0'>
                                            <div className='rounded border border-secondary d-flex justify-content-between align-items-center'>
                                                { v.quantity === 1 ? (
                                                    <button className="btn text-white" onClick={ () => {
                                                        setParams( {deleteItem:   c.id, deleteVariable:    i} )
                                                        setDeleteItem(true);
                                                    }}>
                                                        <i className='far fa-trash-alt text-danger fs-2'/>
                                                    </button>
                                                    ) : (
                                                        <button className='btn text-danger fs-3 px-3 py-0' onClick={ () => {
                                                            updateCar(
                                                                {actionType: 'CHECK_ITEM'},
                                                                {
                                                                    id:         c.id,
                                                                    name:       c.name,
                                                                    picture:    c.picture,
                                                                    variants:   [
                                                                        {
                                                                            name:       v.name,
                                                                            price:      v.price,
                                                                            quantity:   v.quantity ? v.quantity-1 : 1
                                                                        }
                                                                    ]
                                                                }
                                                            );
                                                        }} >
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                ) }
                                                <span className='fs-3'>{ v.quantity ? v.quantity : 1 }</span>
                                                <button className='btn text-primary fs-3 px-3 py-0' onClick={ () => {
                                                    if( v.quantity <= 50 ){
                                                        updateCar(
                                                            {actionType: 'CHECK_ITEM'},
                                                            {
                                                                id:         c.id,
                                                                name:       c.name,
                                                                picture:    c.picture,
                                                                variants:   [
                                                                    {
                                                                        name:       v.name,
                                                                        price:      v.price,
                                                                        quantity:   v.quantity ? v.quantity+1 : 1
                                                                    }
                                                                ]
                                                            }
                                                        );
                                                    }
                                                }} >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) ) }
                        </div>
                    ) ) }
                </>
            : <h1 className="px-2 py-5 text-center">Tu carrito está vacío</h1>}
            { params.get('deleteItem') && <ModalDelete show={deleteItem} showStateChanger={setDeleteItem} text={ {title: 'Rubi Chávez dice:', body: '¿Desea eliminar éste item?'} } />}
            { carChangesTypes === 'VARIANT_DELETED' && <ToastDelete show={true} text={ {title: 'Rubi Chavez dice:', body: 'Variante eliminada correctamente'} } bGround={'bg-danger'} />  }
            { carChangesTypes === 'ITEM_DELETED' && <ToastDelete show={true} text={ {title: 'Rubi Chavez dice:', body: 'Elemento eliminado correctamente'} } bGround={'bg-danger'} />  }
        </div>
    )
}