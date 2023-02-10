import { blogID, apiKey } from '../config/config';


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


export async function getProductsByPagination ( ) {
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?&key=${apiKey}pageToken=CgkIChjgz8WE0i8Qoba7_uqq_oxo&fetchImages=true`);
  const posts = await res.json();
  return { posts: posts }
}


export async function getProductsByCollection ( { params } ) {
  // Para varias consultas multiple label: const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?labels=Multifuncional+Mascarillas&key=${apiKey}pageToken=CgkIChjgz8WE0i8Qoba7_uqq_oxo&fetchImages=true`);
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?labels=${params.collectionId}&key=${apiKey}&fetchImages=true`);
  const posts = await res.json();
  return { posts: posts }
}


export async function getProductsByLabel ( { params } ) {
  // Para varias consultas multiple label: const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?q=label%Multifuncional%Mascarillas&key=${apiKey}pageToken=CgkIChjgz8WE0i8Qoba7_uqq_oxo&fetchImages=true`);
  const res   = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/search?q=label%${params.collectionId}&key=${apiKey}&fetchImages=true`);
  const posts = await res.json();
  return { posts: posts }
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
      },{
        name:  'Línea Cosmética',
        url:    `${encodeURIComponent('0 Línea cosmética')}`
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
      name:   'Jabones',
      image:  require('../assets/categoryProducts/category-02.jpg'),
      url:    `${encodeURIComponent('Jabones')}`
    },{
      name:   'Kids',
      image:  require('../assets/categoryProducts/category-03.jpg'),
      url:    `${encodeURIComponent('Kids')}`
    },{
      name:   'Línea cosmética',
      image:  require('../assets/categoryProducts/category-04.jpg'),
      url:    `${encodeURIComponent('Línea cosmética')}`
    },{
      name:   'Liquidos',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Liquidos')}`
    },{
      name:   'Mascarilla matizante',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Mascarilla matizante')}`
    },{
      name:   'Mascarillas',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Mascarillas')}`
    },{
      name:   'Multifuncional',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Multifuncional')}`
    },{
      name:   'Permanentes',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Permanentes')}`
    },{
      name:   'Piojos',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Piojos')}`
    },{
      name:   'Shampoo',
      image:  require('../assets/categoryProducts/category-01.jpg'),
      url:    `${encodeURIComponent('Shampoo')}`
    }
  ]
}