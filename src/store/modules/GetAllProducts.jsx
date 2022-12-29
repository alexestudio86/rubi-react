import Axios from 'axios';
import { blogID, apiKey } from '../../config';
import React, { useState, useContext, useEffect } from 'react';

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&fetchImages=true`;

const postContext = React.createContext();
const toggleLoadingContext = React.createContext();

export function usePostContext (){
  return useContext( postContext )
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
      <postContext.Provider value={posts}>
        <toggleLoadingContext.Provider value={loading}>
            {props.children}
        </toggleLoadingContext.Provider>
      </postContext.Provider>
    )
}