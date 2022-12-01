import Axios from 'axios';
import { AllProducts } from '../store/modules/AllProducts';
import { blogID, apiKey } from '../config';
import { useState, useEffect } from 'react'

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&fetchImages=true`;


export const Products = () => {

    // Make async request with axios fetching response
    const [ posts, setPosts ] = useState([]);

    useEffect( () => {
        Axios.get( baseURL )
          .then( (res) => {
            setPosts(res.data.items)
          })
          .catch( error=> { console.log(error)})
    }, [setPosts])

    return (
        <AllProducts posts={posts} />
    )
}