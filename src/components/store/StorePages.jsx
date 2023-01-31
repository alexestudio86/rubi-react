import { ResultProduct } from '../../layout/ResultProduct';
import { SearchForm } from '../../layout/SearchForm';
import { LabelProduct } from '../../layout/LabelProduct';
import { CategoryProduct } from '../../layout/CategoryProduct';
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react';


export function StorePages ( ) {

    //Set and recover params
    const [searchParams, setSearchParams] = useSearchParams()

    const handleOrder = ( ) => {
        setSearchParams(
            {
                order:  'a-z'
            }
        )
    }

    return (
        <div className="w3-row">
            <div className="w3-threequarter w3-padding ">
                <div className='w3-light-gray w3-padding-small d-flex justify-content-around'>
                    <button className='w3-button w3-white' onClick={handleOrder}>Ordenar A-Z</button>
                    <button className='w3-button w3-white'>Filtrar Categorías</button>
                </div>
                <div className="w3-padding-small">
                    <div className='bg-white w3-padding-small'>
                        <ResultProduct />
                    </div>
                </div>
            </div>
            <div className="w3-rest w3-padding">
                <div className="w3-padding-small">
                    <div className='bg-white w3-padding-small'>
                        <h1 className='text-center'>Buscar</h1>
                        <SearchForm />
                    </div>
                </div>
                <div className="w3-padding-small">
                    <div className="bg-white w3-padding-small">
                        <h1 className='text-center'>Etiquetas</h1>
                        <LabelProduct />
                    </div>
                </div>
                <div className='w3-padding-small'>
                    <div className='bg-white w3-padding-small'>
                        <h1 className='text-center'>Categorías</h1>
                        <CategoryProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}