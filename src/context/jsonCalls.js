import { blogID, apiKey } from "../blogger-credentials";


export async function getHomeProducts ( ) {
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&maxResults=6&fetchImages=true&fields=items(id,url,title,labels,images)`);
  const posts = await res.json();
  return { posts: posts }
}

export async function getAllProducts ( ) {
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?&key=${apiKey}&fetchImages=true&fields=nextPageToken,items(id,url,title,labels,images)&maxResults=200`);
  const posts = await res.json();
  return { posts: posts }
}

export async function getProductsBySearch ( {request} ) {
  const url = new URL(request.url);
  const searchLabel = url.searchParams.get('labels');
  const searchTerm  = url.searchParams.get('q');
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts${ searchLabel ? '?labels='+searchLabel : '/search?q='+searchTerm }&key=${apiKey}&fetchImages=true`);
  const posts = await res.json();
  const orderElements = url.searchParams.get('order');
  if ( orderElements === 'ascendant' ){
    const orderedItems = {
      ...posts,
      items: posts.items.sort( function(a, b){ return a.title - b.title } )
    }
    return { posts: orderedItems }
  }else if( orderElements === 'descendant' ){
    const orderedItems = {
      ...posts,
      items: posts.items.sort( function(a, b){ return b.title - a.title } )
    }
    return { posts: posts }
  }else{
    return { posts: posts }
  }
}

export async function getProductsByLabel ( { params } ) {
  // Para varias consultas multiple label: const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?q=label%Multifuncional%Mascarillas&key=${apiKey}pageToken=CgkIChjgz8WE0i8Qoba7_uqq_oxo&fetchImages=true`);
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?q=label%${params.collectionId}&key=${apiKey}&fetchImages=true`);
  const posts = await res.json();
  return { posts: posts }
}

export async function getProductsByCategory ( { params, request } ) {

  //Get order params
  const url = new URL(request.url);
  const orderElements = url.searchParams.get('order');

  // Para varias consultas multiple label: const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?labels=Multifuncional+Mascarillas&key=${apiKey}pageToken=CgkIChjgz8WE0i8Qoba7_uqq_oxo&fetchImages=true`);
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?labels=${params.categoryId}&key=${apiKey}&fetchImages=true`);
  const posts = await res.json();
  if ( orderElements === 'ascendant' ){
    const orderedItems = {
      ...posts,
      items: posts.items.sort( function(a, b){ return a.title - b.title } )
    }
    return { posts: orderedItems }
  }else if( orderElements === 'descendant' ){
    const orderedItems = {
      ...posts,
      items: posts.items.sort( function(a, b){ return b.title - a.title } )
    }
    return { posts: posts }
  }else{
    return { posts: posts }
  }
}

export async function getProductsByCollection ( { params } ) {
  //Add params
  //const [searchParams, setSearchParams] = useSearchParams()
  const featuredItemsId = ['3316106626624603393','3125816805209103922', '56465538453532244'];
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?&key=${apiKey}&fetchImages=true&fields=nextPageToken,items(id,url,title,labels,images)&maxResults=200`);
  const posts = await res.json();
  if( params.collectionId === 'Últimos productos' ){
    const newPost = {
      ...posts,
      items: posts.items.filter( (post, index) => index < 9 )
    }
    return { posts: newPost }
  }else if( params.collectionId === 'Productos destacados' ){
    const newPost = {
      ...posts,
      items:  posts.items.filter( post => featuredItemsId.some(featuredItemId => featuredItemId === post.id) )
    }
    return { posts: newPost }
  }else{
    return { posts: [] }
  }
}

export async function getProduct ( { params } ) {
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${params.itemID}?&key=${apiKey}&fetchImages=true`);
  const post  = await res.json();
  return { post: post }
}

export function getAllLabels ( ) {
  return [
      {
        name:  'Línea Capilar',
        url:    `${encodeURIComponent('0 Línea capilar')}`
      }
    ]
}

export function getAllCategories ( ) {
  // List of images for categories
  return [
    {
      name:   'Crema para peinar',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Crema para peinar')}`
    },{
      name:   'Línea cosmética',
      image:  require('../assets/categoryProducts/category-04.jpg'),
      url:    `${encodeURIComponent('Línea cosmética')}`
    },{
      name:   'Liquidos',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Liquidos')}`
    },{
      name:   'Permanentes',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Permanentes')}`
    },{
      name:   'Jabones',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Jabones')}`
    },{
      name:   'Mascarillas',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Mascarillas')}`
    },{
      name:   'Kids',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Kids')}`
    }
  ]
}

export function getAllCollections ( ) {
  // List of images for categories
  return [
    {
      name:   'Productos destacados',
      image:  require('../assets/collectionProducts/collection-01.jpg'),
      url:    `${encodeURIComponent('Productos destacados')}`
    },{
      name:   'Últimos productos',
      image:  require('../assets/collectionProducts/collection-02.jpg'),
      url:    `${encodeURIComponent('Últimos productos')}`
    }
  ]
}