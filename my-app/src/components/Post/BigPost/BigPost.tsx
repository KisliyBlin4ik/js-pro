import React, { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import image from 'src/assets/catImage.jpg'
import { IPost } from '../Post'
import './style.css'

const BigPost = () => {
    
    const [posts, setArrPost] = useState<IPost[]>([]);

    const fetchPost = async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=12');
        const data = await response.json();
        const results = data.results;
        setArrPost(results);
    };
    useEffect(() => {
        fetchPost()
    }, [])

    const {id} = useParams();
    let selectedPost = +[id]

    return (
        <div className='bigPost__container'>
            <div className='bigPost__content'>
                {posts.map(({title, text, date, img, id}) => (
                    selectedPost === id  ? <PostBig key={id} title={title} text={text} img={img} id={selectedPost}/> : ''
                ))}
            </div>
        </div>
    )
}

export const PostBig:FC<IPost> = ({title, text, date}) => {
    return (
        <div className='postB'>
                <h1 className='post__title'>{title}</h1>
            <div className='post__imageB'>
                <img src={image} alt="image" />
            </div>
                {text ? <p className='post__textB'>{text}</p> : null}
        </div> 
    )
}

export default BigPost