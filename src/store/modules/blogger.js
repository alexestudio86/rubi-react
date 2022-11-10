import { blogID, apiKey } from '../../config.js';
import axios from 'axios';
import React from 'react';

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${apiKey}&fetchImages=true`;

export const GetAllProducts = () => {

    // Make async request with axios fetching response
    const [ posts, setPosts ] = React.useState(null);
    React.useEffect( () => {
        axios.get( baseURL ).then( (res) => {
            setPosts(res.data.items)
        })
    }, [])

    // Check if results are diferents to 0
    if(!posts) return null

    // General function for get to unique label
    const filterLabels = (e) => {
        if(e.length == 0){
          return 'Varios'
        }else if (e.length == 1) {
          return e[0]
        } else {
          return e[1]
        }
    };
    // General function fot get to unique image
    const filterPostImages = ( evt, body ) => {
        if(evt){
          if(evt.length == 0){
            return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
          }else if (evt.length == 1) {
            return evt[0].url.replace("s1024","s320")
          } else {
            return evt[0].url.replace("s1024","s320")
          }
        }else{
           const getUrlsFromText = body.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
           if( getUrlsFromText == 0 ){
            return 'https://blogger.googleusercontent.com/img/a/AVvXsEh7Jx5rNMA2KDw2pXf65nS5ybDjI4Hd8VhHil6KU6oiOZY9KxWzcQK7K49JzIY1OwuT8lIXHHD8-wC-EZb88ceQSt8XHwkeJl-ogDxHtwY9zt7s0OVDlm8MXDanI7h2rl_vl-dCK-kaTy2hG1x6BbfxoEJdGECG1VK8BjBCIqjjAOdzmlKcBGl9ZK1tfg=s640'
           }else if( getUrlsFromText == 1 ){
             return getUrlsFromText[0].replace('s1024', 's320')
           }else{
             return getUrlsFromText[0].replace('s1024', 's320')
           }
        }
    };

    return (
        <>
            <main className="row">
            {
            posts.map( (post, index) => (
                <article key={index} className="col-md-6 p-2" >
                    <div className='card p-2'>
                        <div className='row'>
                            <header className="col-md-9 d-none d-sm-block">
                                <h1 className='fs-4 text-uppercase text-primary card-title'>{ post.title }</h1> 
                                <span className='fs-5 badge bg-secondary'>{ filterLabels( post.labels ) }</span>
                            </header>
                            <div className="col-md-3" style={{ background: "linear-gradient(0deg, rgba(231,236,216,1) 0%, rgba(255,255,255,1) 27%)" }}>
                                <img className='w-100 rounded-circle' style={{ width: "100%", height: "100%", objectFit: "contain"}} alt={post.title} src={ filterPostImages(post.images, post.content) } />
                            </div>
                            <div className="col-md-9 bg-light d-block d-sm-none d-flex justify-content-between align-items-center">
                                <h1 className='m-0 text-secondary fs-6 fw-bold'>{ post.title }</h1>
                                <a className="btn" >
                                    <i className="far fa-caret-square-down text-primary fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            ) )
            }
            </main>
        </>
    )
}