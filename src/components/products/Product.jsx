import Axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { blogID, apiKey } from '../../config';
import { NavCompact } from "../NavCompact";
import { GetProduct } from '../../store/modules/GetProduct';



export function Product () {
    const params = useParams();
    const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${params.postID}?key=${apiKey}&fetchImages=true`;
    const [ post, setPost ] = useState([]);
    useEffect( () => {
        const fetchData = async() => {
            const response = await Axios.get( baseURL );
            setPost( response.data );
        };
        fetchData();
    }, []);

    return (
        <>
            <NavCompact />
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='bg-white p-3'>
                        <h2 className='text-center'>Producto Encontrado</h2>
                        <h1>{ params.postID }</h1>
                        <GetProduct post={post}/>
                    </div>
                </div>
            </div>
        </>
    )
}