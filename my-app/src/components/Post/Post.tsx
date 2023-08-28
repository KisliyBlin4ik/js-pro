import React, { useState, useEffect ,FC } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/catImage.jpg'
import './style.css'
export interface IPost {
    id: number;
    text?: string;
    date?: string;
    title: string;
    img?: string;
}

const MyComponent = () => {
    const [posts, setArrPost] = useState<IPost[]>([]);

    const fetchPost = async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10');
        const data = await response.json();
        const results = data.results;
        setArrPost(results);
    };
    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <>
        <div className='post__items'>
            <div className='post__item__left'>
                <div className='post__big'>
                    {posts.map(({title, text, date, img, id}) => (
                        id < 2 ? <PostBig key={id} title={title} text='' date={date} img={img} id={id}/> : ''
                    ))}
                </div>
                <div className='post__mid'>
                    {posts.map(({title, text, date, img, id}) => (
                        id > 1 && id < 6 ? <PostMid key={id} title={title} date={date} img={img} id={id}/> : ''
                    ))}
                </div>
            </div>
            <div className='post__small'>
                {posts.map(({title, text, date, img, id}) => (
                    id > 5 ? <PostSmall key={id} title={title} date={date} img={img} id={id}/> : ''
                ))}
            </div>
        </div>
        </>
    )
}

export const PostBig:FC<IPost> = ({title, text, date, id}) => {
    const navigate = useNavigate();

    return (
        <div className='post' onClick={() => navigate(`/blog/${id}`)}>
            <div className='post__content'>
                <p className='post__date'>{date}</p>
                <p className='post__title'>{title}</p>
                {text ? <p className='post__text'>{text}</p> : null}
            </div>
            <div className='post__image'>
                <img src={image} alt="image" />
            </div>
        </div> 
    )
}
export const PostMid:FC<IPost> = ({title, date, id}) => {
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
export const PostSmall:FC<IPost> = ({title, date, id}) => {
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

export default MyComponent