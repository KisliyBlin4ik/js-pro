import React from "react";
import { useSelector } from "react-redux";

import { IPost, PostMid } from "../Post";

const PopularPost = () => {
  const posts: IPost[] = useSelector(({ posts }) => posts);

  return (
    <>
      <div className="posts__items">
        <div className="posts__mid">
          {posts.map(({ title, text, date, image, id, likes, isFavorite }) =>
            likes !== undefined && likes > 4 ? (
              <PostMid
                key={id}
                title={title}
                date={date}
                image={image}
                id={id}
                likes={likes}
                isFavorite={isFavorite}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PopularPost;
