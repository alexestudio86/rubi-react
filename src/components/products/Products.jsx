import Axios from 'axios';
import { GetAllProducts } from '../../store/modules/GetAllProducts';
import { blogID, apiKey } from '../../config';
import { useState, useEffect } from 'react';

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&fetchImages=true`;


export const Products = () => {

    // Make async request with axios fetching response
    const [ posts, setPosts ] = useState([]);

    useEffect( () => {
      const fetchData = async() => {
        const res = await Axios.get( baseURL );
          setPosts(res.data.items);
      };
      fetchData();
    }, [])

    return (
        <GetAllProducts posts={posts} />
    )
}