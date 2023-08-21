import React, { useState, FC } from 'react'
import image from 'src/assets/image.jpg'
import { IPost, PostMid, PostSmall } from '../Post'
import 'src/components/Post/style.css'



const AllPost = () => {
    const [posts, setArrPost] = useState<IPost[]>([]);

    const fetchPost = async () => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=12');
        const data = await response.json();
        const results = data.results;
        setArrPost(results);
    };

    return (
        <>
        <button onClick={fetchPost} className='post__btn'>Load Posts</button>
        <div className='post__items'>
            <div className='post__item__left'>
                <div className='post__mid'>
                    {posts.map(({title, text, date, img, id}) => (
                        id < 7 ? <PostMid key={id} title={title} date={date} img={img} id={id}/> : ''
                    ))}
                </div>
            </div>
            <div className='post__small'>
                {posts.map(({title, text, date, img, id}) => (
                    id > 6 ? <PostSmall key={id} title={title} date={date} img={img} id={id}/> : ''
                ))}
            </div>
        </div>
        </>
    )
}

export default AllPost