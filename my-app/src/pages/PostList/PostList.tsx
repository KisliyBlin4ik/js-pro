import React from 'react'
import AllPost from '../../components/Post/AllPost/AllPost'
import TabMenu from '../../components/TabMenu/TabMenu'
import PageTemplate from '../../components/PageTemlate'
    
const PostList = () => {
    
    return (
        <PageTemplate title='Blog'>
            <div className='posts__container'>
                <TabMenu />
                <AllPost />
            </div>
        </PageTemplate>

    )
}


export default PostList