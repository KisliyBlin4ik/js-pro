import React, { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux';
import { IPost, PostMid, PostSmall } from '../Post'
import 'src/components/Post/style.css'

const AllPost = () => {
    const posts: IPost[] = useSelector(({ posts }) => posts);


    return (
        <>
            <div className='posts__items'>
                <div className='posts__mid'>
                    {posts.map(({ title, text, date, image, id, likes, isFavorite }) => (
                        id < 7 ? <PostMid key={id} title={title} date={date} image={image} id={id} likes={likes} isFavorite={isFavorite} /> : ''
                    ))}
                </div>
                <div className='posts__small'>
                    {posts.map(({ title, text, date, image, id, likes, isFavorite }) => (
                        id > 6 ? <PostSmall key={id} title={title} date={date} image={image} id={id} likes={likes} isFavorite={isFavorite} /> : ''
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllPost