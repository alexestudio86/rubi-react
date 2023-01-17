import { ResultProduct } from '../../layout/ResultProduct';
import { SearchForm } from '../../layout/SearchForm';
import { LabelProduct } from '../../layout/LabelProduct';
import { CategoryProduct } from '../../layout/CategoryProduct';


export function StorePages ( ) {
    return (
        <div className='w3-light-gray p-4'>
            <div className="w3-row">
                <div className="w3-threequarter w3-padding ">
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
        </div>
    )
}