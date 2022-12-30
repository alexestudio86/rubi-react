import Axios from 'axios';
import { blogID, apiKey } from '../../config';
import React, { useState, useEffect, useContext } from 'react';

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&fetchImages=true`;

const postsContext = React.createContext();
const toggleLoadingContext = React.createContext();

export function usePostsContext (){
  return useContext( postsContext )
}

export function useToggleLoadingContext (){
  return useContext( toggleLoadingContext )
}

export function GetAllProducts ( props ) {

    // Make async request with axios fetching response
    const [ posts, setPosts ] = useState([]);
    const [ loading, setMessage ] = useState(true);

    useEffect( () => {
      const fetchData = async() => {
        const res = await Axios.get( baseURL );
          setPosts(res.data.items);
          setMessage(false)
      };
      fetchData();
    }, [])

    return (
      <postsContext.Provider value={posts}>
        <toggleLoadingContext.Provider value={loading}>
            {props.children}
        </toggleLoadingContext.Provider>
      </postsContext.Provider>
    )
}