import storeImage from '../assets/store.jpeg';
import { Link } from 'react-router-dom';

export function Store ( ) {
    return (
        <div className='w3-display-container'>
            <img className='w-100 w3-opacity-max' src={storeImage} alt='Store' width='1024' height='auto' />
            <div className='w3-display-middle'>
                <Link className='w3-jumbo text-uppercase btn btn-secondary' to='store'>Tienda</Link>
            </div>
        </div>
    )
}