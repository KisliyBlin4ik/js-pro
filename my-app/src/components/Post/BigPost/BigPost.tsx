import React, { useState, FC } from 'react'
import image from 'src/assets/catImage.jpg'
import { IPost } from '../Post'
import './style.css'

const BigPost = () => {
    const [posts, setArrPost] = useState<IPost[]>([]);

    const fetchPost = async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=0');
        const data = await response.json();
        const results = data.results;
        setArrPost(results);
    };

    return (
        <div className='bigPost__container'>
            <button onClick={fetchPost} className='bigPost__btn'>Load Posts</button>
            <div className='bigPost__content'>
                {posts.map(({title, text, date, img, id}) => (
                    id < 2 ? <PostBig key={id} title={title} text={text} img={img} id={id}/> : ''
                ))}
            </div>
        </div>
    )
}

export const PostBig:FC<IPost> = ({title, text, date}) => {
    return (
        <div className='post'>
                <h1 className='post__title'>{title}</h1>
            <div className='post__image'>
                <img src={image} alt="image" />
            </div>
                {text ? <p className='post__text'>{text}</p> : null}
        </div> 
    )
}

export default BigPost