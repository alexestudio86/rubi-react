import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react'


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

    const { post } = useLoaderData();

    
    const [ optionsForm, setOptionsForm ] = useState([]);

    //For this example, does not work setOptionsForm
    for (let index = 1; index > 0 && index <= 50; index++) {
        optionsForm.push(index)
    }



    return(
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
            <select aria-label='Default select example' className='form-select' id='quantity' >

                { optionsForm.map( optionForm => <option key={optionForm} value={optionForm}>{optionForm}</option>) }

            </select>

            <hr className='w3-border' />
            <div className='py-1'>
                <button className='btn bg-warning w-100' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Producto actualizado' >
                    <i className='fas fa-cart-plus'/> Añadir al carrito
                </button>
            </div>
            <div className='py-1'>
                <a className='btn btn-warning w-100' href='#' >Realizar pedido</a>
            </div>
        </div>
    )
}