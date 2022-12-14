import { usePostContext } from '../../store/modules/GetProduct';


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

function Product ( ) {

    const post = usePostContext();


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
                <select aria-label='Default select example' className='form-select' id='quantity' >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                    <option value='32'>32</option>
                    <option value='33'>33</option>
                    <option value='34'>34</option>
                    <option value='35'>35</option>
                    <option value='36'>36</option>
                    <option value='37'>37</option>
                    <option value='38'>38</option>
                    <option value='39'>39</option>
                    <option value='40'>40</option>
                    <option value='41'>41</option>
                    <option value='42'>42</option>
                    <option value='43'>43</option>
                    <option value='44'>44</option>
                    <option value='45'>45</option>
                    <option value='46'>46</option>
                    <option value='47'>47</option>
                    <option value='48'>48</option>
                    <option value='49'>49</option>
                    <option value='50'>50</option>
                </select>
                <hr className='w3-border' />
                <div className='py-1'>
                    <button className='btn bg-warning w-100' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='Producto actualizado' >
                    <i className='fas fa-cart-plus'/> A??adir al carrito
                    </button>
                </div>
                <div className='py-1'>
                    <a className='btn btn-warning w-100' href='#' >Realizar pedido</a>
                </div>
            </div>
        </>
    )
}


export default Product