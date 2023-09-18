import React from 'react'

import { useSelector } from "react-redux";

import { IPost, PostMid, PostSmall } from "../Post";

const MyPostInStore = () => {
  const myPosts: IPost[] = useSelector(({ myPosts }) => myPosts);
  console.log(myPosts);

  return (
    <>
      <div className="posts__items">
        <div className="posts__mid">
          {myPosts.map(({ title, text, date, image, id, likes, isFavorite }) =>
            myPosts ? (
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

export default MyPostInStore
