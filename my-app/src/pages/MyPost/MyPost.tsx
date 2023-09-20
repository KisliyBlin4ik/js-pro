import React from 'react'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import MyPostInStore from 'src/components/Post/MyPostInStore'

const MyPost = () => {
  return (
    <PageTemplate title='My post'>
      <MyPostInStore/>
    </PageTemplate>
  )
}

export default MyPost