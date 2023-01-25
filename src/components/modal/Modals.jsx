import Modal from 'react-bootstrap/Modal';


export function Modals ( {show, stateChanger, text} ){
    return (
        <Modal show={show} onHide={stateChanger}>
            <Modal.Header closeButton>
                <Modal.Title>{text.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>{text.body}</Modal.Body>
        </Modal>
    )
}