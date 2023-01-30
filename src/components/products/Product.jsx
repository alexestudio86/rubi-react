import { useLoaderData, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCarChangesTypesContext, useUpdateCarContext } from '../../context/CarProvider';
import { Modals } from '../modal/Modals';
import { Toasts } from '../toast/Toasts';


const dummyImage = 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640';

const getImage = ( img, content ) => {
    if( img ){
        if( img.length === 0){
            return dummyImage
        }else if (img.length === 1) {
            return img[0].url.replace("s1024","s320")
        } else {
            return img[0].url.replace("s1024","s320")
        }
    }else{
        if( content ){
            const getUrlsFromText = content.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
            if( getUrlsFromText == 0 ){
             return dummyImage
            }else if( getUrlsFromText == 1 ){
              return getUrlsFromText[0].replace('s1024', 's320')
            }else{
              return getUrlsFromText[0].replace('s1024', 's320')
            }
        }
    }
};

const getLabel = (label) => {
    if( label ){
        if( label.length > 0){
            return label[0]
        } else {
            return 'varios'
          //return label[1]
        }
    }
};

export function ResultProduct ( ) {

    //Recovery car data
    const carChangesTypes       = useCarChangesTypesContext();
    const updateCar   =   useUpdateCarContext();

    //Get post data data
    const { post } = useLoaderData();

    //Create Select options
    const [ optionsForm, setOptionsForm ] = useState([]);
    for (let index = 1; index > 0 && index <= 50; index++) {
        optionsForm.push(index)
    };

    //Get QUANTITY
    const [ quantity, setQuantity ] = useState(1);

    //Get VARIANTS and set events to variants buttons
    const [ variantDetails, setVariantDetails ] = useState({});
    useEffect( ( ) => {
        const allVariants = document.querySelectorAll('form.form-switch input')
        Array.from(allVariants).map( (variant, index) => variant.addEventListener('click', ( ) => {
            variant.setAttribute('key', index);
            setVariantDetails(
                {
                    variantName:    variant.id || 911,
                    variantPrice:   variant.value
                }
            );
        }) )
    },[] );

    //Toggle modal variants
    const [show, setShow] = useState(false);
    //Validate variants and SetParams
    const [params, setParams] = useSearchParams();
    const validateVariant = ( ) => {
        if( Object.entries(variantDetails).length == 0 ){
            setParams(
                {
                  variantSelected:   false
                }
            );
            setShow(true);
        }
    };



    return(
        <>
            <div className='p-3'>
                <h1 className='fs-5 fw p-2'>{ post.title }</h1>
                <img className='w-100' alt={ post.title } src={ getImage(post.images, post.content) } />
                <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb m-0 py-1'>
                        <li aria-current='page' className='breadcrumb-item active'>Home</li>
                        <li className='breadcrumb-item category text-primary'><a>{ getLabel(post.labels) }</a></li>
                    </ol>
                </nav>
                <hr className='w3-border' />
                <div className='row m-0 p-0' dangerouslySetInnerHTML={{__html: post.content}}></div>
                <hr className='w3-border' />
                <select aria-label='Default select example' className='form-select' id='quantity' name='cantidad' defaultValue={quantity} onChange={ e => setQuantity( parseInt(e.target.value) )} >

                    { optionsForm.map( (optionForm, index) => <option key={index} label={optionForm} value={optionForm}>{optionForm}</option> ) }

                </select>

                <hr className='w3-border' />
                <div className='py-1'>
                    <button className='btn bg-warning w-100' type='button' onClick={ () => {
                            validateVariant();
                            Object.entries(variantDetails).length != 0 && updateCar( {actionType: 'CHECK_ITEM'},
                                {
                                    id:         post.id     || 911,
                                    name:       post.title  || 'Dummy Title',
                                    picture:    post.images[0] ? post.images[0].url.replace("s1024","s90") : dummyImage,
                                    variants:   [
                                        {
                                            name:       variantDetails.variantName || 'Dummy Variant Details',
                                            price:      variantDetails.variantPrice || 300,
                                            quantity:   quantity || 1
                                        }
                                    ]
                                }
                            );
                        }} >
                        <i className='fas fa-cart-plus'/> Añadir al carrito
                    </button>
                </div>
            </div>
            { params.get('variantSelected') && <Modals show={show} stateChanger={setShow} text={{title: "Rubi Chavez dice:", body: "Seleccione una variante"}} />  }
            { carChangesTypes === 'CREATED_ITEM' && <Toasts show={true} text={ {title: 'Rubi Chavez dice:', body: 'Elemento Creado'} } bGround={'bg-primary'} />  }
            { carChangesTypes === 'UPDATED_ITEM' && <Toasts show={true} text={ {title: 'Rubi Chavez dice:', body: 'Elemento Actualizado'} } bGround={'bg-secondary'} />  }
        </>
    )
}