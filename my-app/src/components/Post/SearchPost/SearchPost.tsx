import React from "react";
import { useSelector } from "react-redux";

import { IPost, PostMid } from "../Post";
import PageTemplate from "src/components/PageTemlate/PageTemplate";

const SearchPost = ({ inputData }: any) => {
  const posts: IPost[] = useSelector(({ posts }) => posts);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(inputData.toLowerCase());
  });

  return (
    <PageTemplate>
      <h1>Search results '{inputData}'</h1>
      <div className="serchResults">
        {inputData.length >= 2
          ? filteredPosts.map((post) => (
              <PostMid
                title={post.title}
                id={post.id}
                image={post.image}
                key={post.id}
              />
            ))
          : null}
      </div>
    </PageTemplate>
  );
};

export default SearchPost;
