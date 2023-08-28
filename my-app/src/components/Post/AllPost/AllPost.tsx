import React, { useState, useEffect } from 'react'
import image from 'src/assets/catImage.jpg'
import { IPost, PostMid, PostSmall } from '../Post'
import 'src/components/Post/style.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'





const AllPost = () => {
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

    // const params = useParams<{id: string}>();
    // console.log(params);

    return (
        <>
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