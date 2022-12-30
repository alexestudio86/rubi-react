import Axios from "axios";
import { blogID, apiKey } from '../../config';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";


const postContext = React.createContext();

export function usePostContext (){
  return useContext( postContext )
}


export function GetProduct ( props ) {

  const params = useParams();
  const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${params.postID}?key=${apiKey}&fetchImages=true`;

  const [ post, setPost ] = useState([]);

  useEffect( () => {
    const fetchData = async() => {
      const res = await Axios.get( baseURL );
        setPost(res.data)
    };
    fetchData();
  }, []);


  console.log('baby')


  return (
    <postContext.Provider value={post}>
        {props.children}
    </postContext.Provider>
  )
}