import React, { useState, useEffect, FC } from 'react'
import { IPost, PostBig, PostMid, PostSmall } from '../Post';
import PageTemplate from 'src/components/PageTemlate/PageTemplate'

const SearchPost = ({ inputData }: any) => {
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

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(inputData.toLowerCase())
  })

  return (
    <PageTemplate>
        <h1>Search results '{inputData}'</h1>
      <>
        {inputData.length >= 2 ? filteredPosts.map((post, index) => <PostMid title={post.title} id={index} key={index}/>) : null}
      </>
    </PageTemplate>
  )
}

export default SearchPost