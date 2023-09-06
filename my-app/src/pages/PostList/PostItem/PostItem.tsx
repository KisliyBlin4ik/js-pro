import React from 'react'
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

import PageTemplate from 'src/components/PageTemlate/PageTemplate'
import PopupPost from 'src/components/PopupPost/PopupPost'
import Post from 'src/components/Post'

const PostItem = () => {
  // const {state} = useLocation();
  // console.log(state);
  
  return (
    <PageTemplate>
        <Post />
        {/* <Link to={`/blog/${state}`}></Link> */}
    </PageTemplate>
  )
}

export default PostItem