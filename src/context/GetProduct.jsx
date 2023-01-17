import { blogID, apiKey } from '../config/config';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";


const postContext = React.createContext();
const toggleLoadingContext = React.createContext();

export function usePostContext (){
  return useContext( postContext )
}

export function useToggleLoadingContext (){
  return useContext( toggleLoadingContext )
}

export function GetProduct ( props ) {

  const params = useParams();
  const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${params.postID}?key=${apiKey}&fetchImages=true`;

  const [ post, setPost ] = useState([]);
  const [ loading, setMessage ] = useState(true);

  useEffect( () => {
    const fetchData = async() => {
      const res = await Axios.get( baseURL );
        setPost(res.data);
        setMessage(false)
    };
    fetchData();
  }, []);


  return (
    <postContext.Provider value={post}>
      <toggleLoadingContext.Provider value={loading}>
            {props.children}
        </toggleLoadingContext.Provider>
    </postContext.Provider>
  )
}