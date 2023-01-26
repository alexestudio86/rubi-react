import Modal from 'react-bootstrap/Modal';
import { useSearchParams } from 'react-router-dom';


export function Modals ( {show, stateChanger, text} ){

    const [params, setParams] = useSearchParams();
    const deleteParams = ( ) => {
        params.delete('variantSelected')
        setParams(params);
    }

    return (
        <Modal show={show} onHide={ () => {
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