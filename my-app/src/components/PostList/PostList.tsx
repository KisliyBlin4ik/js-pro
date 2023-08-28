import React from 'react'
import AllPost from '../Post/AllPost/AllPost'
import TabMenu from '../TabMenu/TabMenu'
import PageTemplate from '../PageTemlate'
    
const PostList = () => {
    return (
        <PageTemplate title='Blog'>
            <div className='post__container'>
                <TabMenu />
                <AllPost />
            </div>
        </PageTemplate>

    )
}


export default PostList