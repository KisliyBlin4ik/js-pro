import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'src/App'
import { IPost, PostMid, PostSmall } from '../Post'
import 'src/components/Post/style.css'

const AllPost = () => {
    const {posts} = useContext(ThemeContext);

    return (
        <>
        <div className='post__items'>
            <div className='post__item__left'>
                <div className='post__mid'>
                    {posts.map(({title, text, date, image, id}) => (
                        id < 7 ? <PostMid key={id} title={title} date={date} image={image} id={id}/> : ''
                    ))}
                </div>
            </div>
            <div className='post__small'>
                {posts.map(({title, text, date, image, id}) => (
                    id > 6 ? <PostSmall key={id} title={title} date={date} image={image} id={id}/> : ''
                ))}
            </div>
        </div>
        </>
    )
}

export default AllPost