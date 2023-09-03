import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'src/App'
import { IPost, PostMid, PostSmall } from '../Post'
import 'src/components/Post/style.css'
import PopupPost from 'src/components/PopupPost/PopupPost'

const AllPost = () => {
    const {posts} = useContext(ThemeContext);
    

    return (
        <>
        <div className='posts__items'>
                <div className='posts__mid'>
                    {posts.map(({title, text, date, image, id}) => (
                        id < 7 ? <PostMid key={id} title={title} date={date} image={image} id={id}/> : ''
                    ))}
                </div>
            <div className='posts__small'>
                {posts.map(({title, text, date, image, id}) => (
                    id > 6 ? <PostSmall key={id} title={title} date={date} image={image} id={id}/> : ''
                ))}
            </div>
        </div>
        {/* <PopupPost>{'asd'}</PopupPost> */}
        </>
    )
}

export default AllPost