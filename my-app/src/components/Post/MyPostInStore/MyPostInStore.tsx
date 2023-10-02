import React from 'react'

import { useSelector } from "react-redux";

import { IPost, PostMid, PostSmall } from "../Post";
import { StyledSortItem } from 'src/components/TabMenu/styled';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { SET_MY_POSTS } from 'src/actions/actions';

const MyPostInStore = () => {
  const myPosts: IPost[] = useSelector(({ myPosts }) => myPosts);
  const myPosts2: IPost[] = useSelector(({ myPosts2 }) => myPosts2);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const token = localStorage.getItem("access");

  const theme = useSelector(({ theme }) => theme);

  console.log(myPosts);
  console.log(myPosts2);

  return (
    <>
    <StyledSortItem
          theme={theme}
          className="sortItem"
          name=""
          id=""
          onClick={(e) => {
            dispatch(SET_MY_POSTS(e.currentTarget.value, token ? token : ''));
          }}
        >
          <option value="">Sort by</option>
          <option>text</option>
          <option>title</option>
          <option>lesson_num</option>
          <option>date</option>
        </StyledSortItem>
      <div className="posts__items">
        <div className="posts__mid">
          {myPosts2 && myPosts.map(({ title, text, date, image, id, likes, isFavorite }) =>
            myPosts ? (
              <PostMid
                key={id}
                text={text}
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
