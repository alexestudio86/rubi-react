import { blogID, apiKey } from '../config/config';


export async function getHomeProducts ( ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&maxResults=6&fetchImages=true&fields=items(id,url,title,labels,images)`);
  const posts  = await res.json();
  return { posts: posts }
  
}


export async function getAllProducts ( ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?&key=${apiKey}&fetchImages=true&fields=nextPageToken,items(id,url,title,labels,images)`);
  const posts  = await res.json();
  return { posts: posts }
  
}


export function getAllLabels ( ) {

  return [
      {
        name:  'Línea Capilar',
        label:    'linea-capilar'
      },{
        name:  'Línea Cosmética',
        label:    'linea-cosmetica'
      }
    ]

}


export function getAllCategories ( ) {
  
  // List of images for categories
  return [
    {
      name:  'Crema para peinar',
      image: require('../assets/categoryProducts/category-01.jpg')
    },
    {
      name: 'Multivitamínico',
      image: require('../assets/categoryProducts/category-02.jpg')
    },
    {
      name: 'Mascarillas',
      image:  require('../assets/categoryProducts/category-03.jpg')
    },
    {
      name: 'Shampoo',
      image:  require('../assets/categoryProducts/category-04.jpg')
    }
  ]

}


export async function getProduct ( { params } ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${params.itemID}?&key=${apiKey}&fetchImages=true`);
  const post  = await res.json();
  return { post: post }

}


export async function getPagination ( ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?&key=${apiKey}pageToken=CgkIChjgz8WE0i8Qoba7_uqq_oxo&fetchImages=true`);
  const post  = await res.json();
  return { post: post }

}