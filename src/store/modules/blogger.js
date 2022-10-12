import { useState } from 'react';
import { blogID, apiKey } from '../../config.js'

export const GetAllProducts = async( ) => {
    const [postsJson, setPost] = useState([])
    try{
        const data          = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&fetchImages=true`);
        const allData       = await data.json();
        //const postsJson   = allData.items;
        setPost( allData.items )
        return <>
            <h1>Hola mundo</h1>
        </>
    }catch(error){
        console.log(error)
    }
}