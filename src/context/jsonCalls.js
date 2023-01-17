import { blogID, apiKey } from '../config/config';


export async function getHomeProducts ( ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?maxResults=6&key=${apiKey}&fetchImages=true`);
  const posts  = await res.json();
  return { posts: posts }
  
}

export async function getAllProducts ( ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?&key=${apiKey}&fetchImages=true`);
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


export async function getProduct ( ) {
  
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/2625516280607808464?&key=${apiKey}&fetchImages=true`);
  const post  = await res.json();
  return { post: post }

}