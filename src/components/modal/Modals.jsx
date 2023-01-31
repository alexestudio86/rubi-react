import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';
import { useUpdateCarContext } from '../../context/CarProvider';


export function ModalVariables ( {show, stateChanger, text} ){

    const [params, setParams] = useSearchParams();
    const deleteParams = ( ) => {
        params.delete('variantSelected')
        setParams(params);
    }

    return (
        <Modal show={show} backdrop='static' centered onHide={ () => {
                    stateChanger();
                    deleteParams();
                }
            }>
            <Modal.Header closeButton>
                <Modal.Title>{text.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>{text.body}</Modal.Body>
        </Modal>
    )
}


export function ModalDelete ( {show, showStateChanger, text} ){

    //Recovery car data
    const updateCar   =   useUpdateCarContext();
    const [params, setParams] = useSearchParams();
    const deleteParams = ( ) => {
        params.delete('deleteItem');
        params.delete('deleteVariable');
        setParams(params);
    }


    return (
        <Modal show={show} backdrop='static' centered >
            <Modal.Header>
                <Modal.Title>{text.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-around'>
                <Button variant="secondary" onClick={ ()=> {
                    //Delete params
                    deleteParams();
                    showStateChanger(false);
                }}>Cancelar</Button>
                <Button variant="primary" onClick={ () => {
                    updateCar( {actionType: 'DELETE_ITEM'},{itemID: params.get('deleteItem'), variableID: parseInt( params.get('deleteVariable') )});
                    //Delete params
                    deleteParams()
                    showStateChanger(false);
                }}>Confirmar</Button>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <span>{text.body}</span>
            </Modal.Footer>    
        </Modal>
    )
}