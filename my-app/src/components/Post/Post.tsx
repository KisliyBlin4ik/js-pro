import React, { useState, useEffect, useContext ,FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeContext } from 'src/App'
import './style.css'
export interface IPost {
    id: number;
    text?: string;
    date?: string;
    title: string;
    image?: string;
}

const Post = () => {
    const {posts} = useContext(ThemeContext);
    const {id} = useParams();
    let selectedPost = +[id]

    return (
        <>
            {posts.map(({title, text, date, image, id}) => (
                selectedPost === +id ? <PostBig key={id} title={title} text={text} image={image} id={selectedPost}/> : ''
            ))}
        </>
    )
}

export const PostBig:FC<IPost> = ({title, text, date, image}) => {
    return (
        <div className='post'>
            <div className='post__content post__single__gap'>
            <h1 className='post__title'>{title}</h1>
            <div className='post__image'>
                <img src={image} alt="image" />
            </div>
                {text ? <p className='post__text'>{text}</p> : null}
            </div>

        </div> 
    )
}

export const PostMid:FC<IPost> = ({title, date, id, image}) => {
    const navigate = useNavigate();

    return (
        <div className='post' onClick={() => navigate(`/blog/${id}`)}>
            <div className='post__content'>
                <img src={image} alt="image" />
            <p className='post__date'>{date}</p>
            <p className='post__title'>{title}</p>

            </div>
        </div> 
    )
}

export const PostSmall:FC<IPost> = ({title, date, id,image}) => {
    const navigate = useNavigate();

    return (
        <div className='post' onClick={() => navigate(`/blog/${id}`)}>
            <div className='post__content'>
                <p className='post__date'>{date}</p>
                <p className='post__title'>{title}</p>
            </div>
            <div className='post__image'>
                <img src={image} alt="image" />
            </div>
        </div> 
    )
}

export default Post