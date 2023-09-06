import React, { useState, useEffect, useContext ,FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeContext } from 'src/App'
import './style.css'
import { useDispatch } from 'react-redux';
import { TOGGLE_POPUP } from 'src/actions/actions';
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
    const {popupId} = useContext(ThemeContext);
    const dispatch = useDispatch();

    console.log(popupId);
    let selectedPost = +[id]
    console.log(selectedPost);
    if (popupId) {
        selectedPost = +popupId
    }
    

    return (
        <>
            {posts.map(({title, text, date, image, id}) => (
                (selectedPost === +id ) ? <PostBig key={id} title={title} text={text} image={image} id={selectedPost}/> : 
                ''
            ))}
            
        </>
    )
}

export const PostBig:FC<IPost> = ({title, text, id, date, image}) => {
    const dispatch = useDispatch();

    return (
        <div className='post'>
            <div className='post__content post__single__gap'>
                <h1 className='post__title'>{title}</h1>
                <div className='post__image' onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id, image: image}))}>
                    <img src={image} alt="image" />
                </div>
                {text ? <p className='post__text'>{text}</p> : null}
                <div className='post__footer'>
                    <button onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id - 1}))}>left</button>
                    <button onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id + 1}))}>right</button>
                </div>
            </div>

        </div> 
    )
}

export const PostMid:FC<IPost> = ({title, date, id, image}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(id);
    
    

    return (
        <div className='post__mid ' >
            <div className='post__content ' onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id}))}>
                <img src={image} alt="image" />
                <p className='post__date'>{date}</p>
                <p className='post__title'>{title}</p>
            </div>
            <div className='post__footer'>
                <div className='post__likeDislike'>
                    <span className='post__like material-symbols-outlined'>thumb_up</span>
                    <span>0</span>
                    <span className='post__dislike material-symbols-outlined'>thumb_down</span>
                </div>
                <div className='post__btn'>
                    <span className='btn__blabla material-symbols-outlined'>bookmark</span>
                    <span className='btn__popup material-symbols-outlined' onClick={() => navigate(`/blog/${id}`)}>more_horiz</span>
                </div>
            </div>
        </div> 
    )
}

export const PostSmall:FC<IPost> = ({title, date, id,image}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className='post__small'>
            <div className='post__content' onClick={() => dispatch(TOGGLE_POPUP({isOpen: 'open', id: id}))} >
                <div className="post__text">
                <p className='post__date'>{date}</p>
                <p className='post__title'>{title}</p>
                </div>
            <div className='post__image'>
                <img src={image} alt="image" />
            </div>
            </div>
            <div className='post__footer'>
                <div className='post__likeDislike'>
                    <span className='post__like material-symbols-outlined'>thumb_up</span>
                    <span>0</span>
                    <span className='post__dislike material-symbols-outlined'>thumb_down</span>
                </div>
                <div className='post__btn'>
                    <span className='btn__blabla material-symbols-outlined'>bookmark</span>
                    <span className='btn__popup material-symbols-outlined' onClick={() => navigate(`/blog/${id}`)}>more_horiz</span>
                </div>
            </div>
        </div> 
    )
}

export default Post