import React from 'react'
import { IPost, PostMid, PostSmall } from '../Post';
import { useSelector } from 'react-redux';

const FavoritePost = () => {
    const posts: IPost[] = useSelector(({ posts }) => posts);

    return (
        <>
            <div className='posts__items'>
                <div className='posts__mid'>
                    {posts.map(({ title, text, date, image, id, likes, isFavorite }) => (
                        isFavorite ? <PostMid key={id} title={title} date={date} image={image} id={id} likes={likes} isFavorite={isFavorite} /> : ''
                    ))}
                </div>
            </div>
        </>
    )
}

export default FavoritePost