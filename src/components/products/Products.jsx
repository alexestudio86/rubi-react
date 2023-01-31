import { Fragment } from 'react';
import { Link, useNavigate, useLocation, useLoaderData, useSearchParams } from 'react-router-dom';


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
    const getUrlsFromText = body.match(/(http|ftp|https):\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
    if( getUrlsFromText === 0 ){
    return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
    }else if( getUrlsFromText === 1 ){
      return getUrlsFromText[0].replace('s1024', 's320')
    }else{
      return getUrlsFromText[0].replace('s1024', 's320')
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
    <>
      <div className='row'>
        { items ? items.map( (item, idx) => (
            <Fragment key={idx}>
              { featuredItems.indexOf(item.id) != -1 &&
                <Link className='col-4' to={ `./products/${item.id}` } style={ { textDecoration: 'none' } } >
                  <div className='card w3-hover-grayscale'>
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
          ) ) :
        'No hay post' }
      </div>
    </>
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
    console.log(location)
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
          <article key={index} className='col-6 col-md-4 p-2' >
            <Link to={ `/products/${item.id}` } style={ {textDecoration: 'none'} } >
              <div className='card p-2 w3-hover-shadow'>
                <div className='row'>
                  <header className='col-md-9 d-none d-sm-block'>
                    <h1 className='fs-4 text-uppercase text-primary card-title'>{ item.title }</h1> 
                    <span className='fs-5 badge bg-secondary'>{ filterLabels( item.labels ) }</span>
                  </header>
                  <div className='col-md-3'>
                    <div style={{ background: 'linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)' }}>
                      <img className='w-100 rounded-circle' style={{ height: '150px', objectFit: 'cover'}} alt={item.title} src={ filterPostImages(item.images, item.content) } />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='bg-light d-block d-sm-none d-flex justify-content-between align-items-center' >
                      <h1 className='m-0 text-secondary fs-6 fw-bold'>{ item.title }</h1>
                      <i className='far fa-caret-square-down text-primary fa-2x'></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
          )) :
          console.log('no hay post')
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


export function LabelProductsHome ( {labels} ) {
  return (
    <>
        <ul className="w3-cell-row w3-cell-middle w3-light-gray">
            { labels ? labels.map( (label, index) => (
                <li key={index} className="w3-cell w3-center w3-padding-small">
                    <a href={`search?labels=${label.label}`} key={index} className='w3-button w3-white text-uppercase' style={ {textDecoration: 'none'} }>{ label.name }</a>
                </li>
                ) ) : <span>No hay etiquetas</span>
            }
        </ul>
    </>
  )
}


export function LabelProductsPages ( {labels} ) {
  return (
    <>
      { labels ? labels.map( (label, index) => (
          <a href={label.label} key={index} className='w3-padding-small' style={ {textDecoration: 'none'} }>
            <span className='w3-light-gray w3-padding-small w3-text-blue'>{ label.name }</span>
          </a>
        ) ) : <span>No hay etiquetas</span>
      }
    </>
  )
}


export function CategoryProductsHome ( {categories} ){
  return (
    <>
      <div className='row'>
        { categories ? categories.map( (category, idx) => (
            <div key={idx} className='col-6 col-md-3'>
              <div className="py-1">
                <Link className='btn btn-outline-primary' to={`#`} style={ {textDecoration: 'none'} }>{ category.name }</Link>
              </div>
            </div>
          ) ) : <span>Sin categorías</span>
        }
      </div>
    </>
  )

}


export function CategoryProductsPages ( {categories} ){
  return (
    <>
      <ul className='w3-ul w3-hoverable'>
        { categories ? categories.map( (category, idx) => (
            <li key={idx} className='w3-padding'>
              <Link to={`#`} className='w3-row' style={ {textDecoration: 'none'} }>
                <div className='w3-col s2'>
                  <img className='w-100' src={category.image} alt={category.name} />
                </div>
                <div className="w3-rest w3-padding">
                  <h2 className='w3-medium' >{ category.name }</h2>
                </div>
              </Link>
            </li>
          ) ) : <span>Sin categorías</span>
        }
      </ul>
    </>
  )

}