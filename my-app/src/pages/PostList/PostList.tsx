import React from 'react'
import TabMenu from '../../components/TabMenu/TabMenu'
import PageTemplate from '../../components/PageTemlate'
    
const PostList = () => {
    
    return (
        <PageTemplate title='Blog'>
            <div className='posts__container'>
                <TabMenu />
            </div>
        </PageTemplate>

    )
}


export default PostList