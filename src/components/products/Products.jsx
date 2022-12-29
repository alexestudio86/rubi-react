import { Link } from 'react-router-dom';
import { usePostContext, useToggleLoadingContext } from '../../store/modules/GetAllProducts';
import { NavSecondary } from '../NavSecondary';

// General function for get to unique label
const filterLabels = (e) => {
  if(e.length === 0){
    return 'Varios'
  }else if (e.length === 1) {
    return e[0]
  } else {
    return e[1]
  }
};

// General function fot get to unique image
const filterPostImages = ( evt, body ) => {
  if(evt){
    if(evt.length === 0){
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
    }else if (evt.length === 1) {
      return evt[0].url.replace("s1024","s320")
    } else {
      return evt[0].url.replace("s1024","s320")
    }
  }else{
    const getUrlsFromText = body.match(/(http|ftp|https):\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
    if( getUrlsFromText === 0 ){
    return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
    }else if( getUrlsFromText === 1 ){
      return getUrlsFromText[0].replace('s1024', 's320')
    }else{
      return getUrlsFromText[0].replace('s1024', 's320')
    }
  }
};


const Products = ( ) => {

  const posts = usePostContext();
  const loading = useToggleLoadingContext();

  // List of elements to find
  const latest = ['8564846302675793158', '56465538453532244', '3316106626624603393']

  // List of images for categories
  const imgs = [
    {
      title:  'Crema para peinar',
      url: require('../../assets/category-01.jpg')
    },
    {
      title: 'Multivitamínico',
      url: require('../../assets/category-02.jpg')
    },
    {
      title: 'Mascarillas',
      url:  require('../../assets/category-03.jpg')
    },
    {
      title: 'Shampoo',
      url:  require('../../assets/category-04.jpg')
    }
  ]

  return (
    <main className='row'>
      <div className='bg-secondary py-3'>
        <div className='container bg-white py-4'>
          <h1 className='text-center'>Lo más nuevo</h1>
          <div className='row'>
            { posts.map( ( post, index ) => (
              <>
                { latest.indexOf(post.id) !== -1 ?
                  <Link className='col-md-4' to={`#`} style={ { textDecoration: 'none' } } >
                    <div className='card w3-hover-grayscale'>
                      <div style={{ background: 'linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)' }}>
                        <img src={ filterPostImages(post.images, post.content) } alt={ post.title } className='card-img-top' style={ {height: '150px', objectFit: 'contain'} } />
                      </div>
                      <div className='card-body'>
                        <h5 className='card-title text-end'>{post.title}</h5>
                      </div>
                    </div>
                  </Link>
                : '' }
              </>
            ) ) }
          </div>
        </div>
        <div className='container bg-white py-4'>
          <h1 className='text-center'>Categorías</h1>
          <NavSecondary />
          <div className='row'>
            { imgs.map( img => (
              <Link className='col-md-3' to={`#`}>
                <div className='py-4'>
                  <div className='card w3-display-container w3-hover-black'>
                    <img className='w3-opacity' src={img.url} alt={img.title} />
                    <div className='w3-display-middle w-100 py-2'>
                      <h5 className='text-center fw-bold' >{ img.title }</h5>
                    </div>
                  </div>
                </div>
              </Link>
            ) ) }
          </div>
        </div>
        <div className='container bg-white py-4'>
          <h1 className='text-center'>Archivo</h1>
          <div className='row'>
            { posts.map( ( post, index ) => (
              <article key={index} className='col-md-6 p-2' >
                <Link to={ `./product/${post.id}` } style={ {textDecoration: 'none'} } >
                  <div className='card p-2 w3-hover-shadow'>
                    <div className='row'>
                      <header className='col-md-9 d-none d-sm-block'>
                          <h1 className='fs-4 text-uppercase text-primary card-title'>{ post.title }</h1> 
                          <span className='fs-5 badge bg-secondary'>{ filterLabels( post.labels ) }</span>
                      </header>
                      <div className='col-md-3'>
                        <div style={{ background: 'linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)' }}>
                          <img className='w-100 rounded-circle' style={{ height: '150px', objectFit: 'cover'}} alt={post.title} src={ filterPostImages(post.images, post.content) } />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='bg-light d-block d-sm-non d-flex justify-content-between align-items-center' >
                          <h1 className='m-0 text-secondary fs-6 fw-bold'>{ post.title }</h1>
                          <i className='far fa-caret-square-down text-primary fa-2x'></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Products;