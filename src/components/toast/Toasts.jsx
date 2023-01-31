import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';
import { useUpdateCarChangesTypesContext } from '../../context/CarProvider';


export function ToastAdd ( {show, text, bGround} ) {

    const updateCarChangesTypes = useUpdateCarChangesTypesContext();

    return (
        <div className='position-relative' style={ {minHeight: '100%'} }>
            <ToastContainer position='bottom-center'>
                <Toast className={`${bGround}`} onClose={updateCarChangesTypes} show={show} delay={3000} autohide >
                    <Toast.Header style={ {border: 'none'} } >
                        <img src={ process.env.PUBLIC_URL + '/favicon.ico'} width='15px' height='auto' className="rounded me-2" alt="Toast Header" />
                        <strong className="me-auto">{ text.title }</strong>
                    </Toast.Header>
                    <Toast.Body className='bg-white text-center'>{ text.body }</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}

export function ToastDelete ( {show, text, bGround} ) {

    const updateCarChangesTypes = useUpdateCarChangesTypesContext();

    return (
        <div className='position-relative' style={ {minHeight: '100%'} }>
            <ToastContainer position='bottom-center'>
                <Toast className={`${bGround}`} onClose={updateCarChangesTypes} show={show} delay={3000} autohide >
                    <Toast.Header style={ {border: 'none'} } >
                        <img src={ process.env.PUBLIC_URL + '/favicon.ico'} width='15px' height='auto' className="rounded me-2" alt="Toast Header" />
                        <strong className="me-auto">{ text.title }</strong>
                    </Toast.Header>
                    <Toast.Body className='bg-white text-center'>{ text.body }</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}