import axios from "axios";
import { useState, useEffect } from 'react';
import { GetProduct } from '../../store/modules/GetProduct';
import { useParams } from "react-router-dom";
import { blogID, apiKey } from '../../config';
import { NavCompact } from "../NavCompact";



export function Product () {
    const params = useParams();
    const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts/${params.postID}?key=${apiKey}&fetchImages=true`;
    const [ post, setPost ] = useState([]);

    const getImage = ( imgs ) => {

        if(imgs.length === 0){
            return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
        }else if (imgs.length === 1) {
            return imgs[0].url.replace("s1024","s320")
        } else {
            return imgs[0].url.replace("s1024","s320")
        }
        //}
    };

    const getLabel = (label) => {
        if( label.length === 0){
          return 'Varios'
        }else if ( label.length === 1) {
          return label[0]
        } else {
          return label[1]
        }
    };

    useEffect( () => {
        ( async () => {
            const getPost = await axios.get( baseURL );
            setPost( {
                title:      getPost.data.title,
                image:      getImage( getPost.data.images ),
                content:    getPost.data.content,
                label:      getLabel( getPost.data.labels )
            } );
        })();
    }, []);
    console.log( post )

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