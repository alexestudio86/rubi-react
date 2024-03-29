import { Fragment } from 'react';
import { Link, useNavigate, useLocation, useLoaderData, useSearchParams } from 'react-router-dom';
import { getAllLabels, getAllCategories, getAllCollections } from "../../context/jsonCalls";


const labels      = getAllLabels();
const categories  = getAllCategories();
const collections = getAllCollections();


// General function for get to unique label
const filterLabels = (e) => {
  if(e.length === 0){
    return 'Varios'
  }else if (e.length === 1) {
    return e[0]
  } else {
    return e[1]
  }
}

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
  }else if(body) {
    const tmp = document.createElement('div');
    tmp.innerHTML = body;
    const getImages = tmp.querySelectorAll('img');
    const allImages = Array.from(getImages).map( img => img.getAttribute('src') )
    if( allImages.length === 0 ){
    return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
    }else if( allImages.length === 1 ){
      return allImages[0].replace('s1024', 's320')
    }else{
      return allImages[0].replace('s1024', 's320')
    }
  }else{
    console.log('No hay imágenes')
  }
}

export function FeaturedProducts ( ) {

  //List of featured items
  const featuredItems = ['3316106626624603393','3125816805209103922', '56465538453532244'];
  const { posts }     = useLoaderData();
  const items         = posts.items

  return (
    <div className='row'>
      { items ? items.map( (item, idx) => (
        <Fragment key={idx}>
          { featuredItems.indexOf(item.id) != -1 &&
            <Link className='col-6 col-md-4 p-0' to={ `./products/${item.id}` } style={ { textDecoration: 'none' } } >
              <div className='card w3-hover-grayscale p-1'>
                <div style={{ background: 'linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)' }}>
                  <img src={ filterPostImages(item.images, item.content) } alt={ item.title } className='card-img-top' style={ {height: '150px', objectFit: 'contain'} } />
                </div>
                <div className='card-body'>
                  <h5 className='card-title text-end'>{item.title}</h5>
                </div>
              </div>
            </Link>
          }
        </Fragment>
      )) : <p>Sin productos</p> }
    </div>
  )
}

export function ResultProducts ( ) {

  // Detect patname
  const location = useLocation();

  const { posts } = useLoaderData();
  const items = posts.items


  const navigate = useNavigate();
  const [params, setParams] = useSearchParams()

  const handleNext = () => {
    navigate(
      {
        pathname: 'search',
        search:   '?some=search-string'
      }
    )
  }

  return (
    <div className='row'>
      { items ? items.map( ( item, index ) => (
        <article key={index} className='col-6 col-md-4 p-0' >
          <Link to={ `/products/${item.id}` } style={ {textDecoration: 'none'} } >
            <div className='card w3-hover-shadow p-1'>
              <div className='w3-light-gray' >
                <img className='w-100 rounded-circle' style={{ height: '150px', objectFit: 'contain'}} alt={item.title} src={ filterPostImages(item.images, item.content) } />
              </div>
              <div className='p-2'>
                <h1 className='py-2 fs-6 text-uppercase text-black'>{ item.title }</h1> 
                <small className='badge bg-secondary'>{ filterLabels( item.labels ) }</small>
                <p>{ item.labels[0] }</p>
              </div>
            </div>
          </Link>
        </article>
      )) :
      <p className='py-2'>No se encontraron productos</p>
      }
      { location.pathname !== '/' &&
        (
          <div className='d-flex justify-content-between'>
            { params.get('some') && <button className='w3-button w3-light-gray' >Anterior</button> }
            { posts.nextPageToken &&  <button className='w3-button w3-light-gray' onClick={handleNext} >Siguiente</button> }
          </div>
        )
      }
    </div>
  )
}

export function LabelProductsHome ( ) {
  return (
    <ul className="w3-cell-row w3-cell-middle w3-light-gray">
      { labels ? labels.map( (label, index) => (
          <li key={index} className="w3-cell w3-center w3-padding-small">
            <Link to={`search?labels=${label.label}`} key={index} className='w3-button w3-white text-uppercase' style={ {textDecoration: 'none'} }>{ label.name }</Link>
          </li>
        )) : <span>No hay etiquetas</span>
      }
    </ul>
  )
}

export function CategoryProductsHome ( ){
  return (
    <div className='row'>
      { categories ? categories.map( (category, idx) => (
          <div key={idx} className='col-6 col-md-3'>
            <div className="py-1">
              <Link className='btn btn-outline-primary' to={'.'} style={ {textDecoration: 'none'} }>{ category.name }</Link>
            </div>
          </div>
        )) : <span>Sin categorías</span>
      }
    </div>
  )
}

export function CollectionProductsHome ( ){
  return (
    <div className='row'>
      { categories ? categories.map( (category, idx) => (
          <div key={idx} className='col-6 col-md-3'>
            <div className="py-1">
              <Link className='btn btn-outline-primary' to={'.'} style={ {textDecoration: 'none'} }>{ category.name }</Link>
            </div>
          </div>
        )) : <span>Sin categorías</span>
      }
    </div>
  )
}

export function LabelProductsPages ( ) {
  return (
    <div className='breadcrumb'>
      <ol className='breadcrumb'>
        { labels ? labels.map( (label, index) => (
            <li key={index} className='breadcrumb-item' >
              <Link to={`/products/search?labels=${label.url}`} >{ label.name }</Link>
            </li>
          ) ) : <span>No hay etiquetas</span>
        }
      </ol>
    </div>
  )
}

export function CategoryProductsPages ( ){
  return (
    <>
      <div>
        <Link to={'/categories'} >Categorías</Link>
      </div>
      { categories ? categories.map( (category, idx) => (
          <Link to={`/categories/${category.url}`} key={idx} >
            <span className='badge bg-secondary'>
              { category.name }
            </span>
          </Link>
        )) : <span>Sin categorías</span>
      }
    </>
  )
}

export function CollectionProductsPages ( ){
  return (
    <>
      <div>
        <Link to={'/collections'} >Colecciones</Link>
      </div>
      { collections ? collections.map( (collection, idx) => (
          <Link key={idx} to={`/collections/${collection.url}`} className='btn btn-outline-primary btn-sm m-1' style={ {textDecoration: 'none'} }>{ collection.name }</Link>
        )) : <span>Sin colecciones</span>
      }
    </>
  )
}