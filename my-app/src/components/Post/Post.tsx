import React, { useContext, FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ThemeContext } from "src/App";

import { FETCH_POST, TOGGLE_POPUP } from "src/actions/actions";

import { StyledPostBtn } from "./styled";
import "./style.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
export interface IPost {
  id: number;
  text?: string;
  date?: string;
  title: string;
  image?: string;
  likes?: number;
  isFavorite?: boolean;
}
export interface IUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Post = () => {
  const posts: IPost[] = useSelector(({ posts }) => posts);
  const postItem = useSelector(({ post }) => post);
  const { id } = useParams();
  const { popupId } = useContext(ThemeContext);
  let selectedPost = +[id];
  // console.log(id);
  // console.log(postItem[0].id);
  console.log(popupId);

  if (popupId) {
    selectedPost = +popupId;
  }

  return (
    <>
      {posts.map(({ title, text, date, image, id }) =>
        selectedPost === +id ? (
          <PostBig
            key={id}
            title={title}
            text={text}
            image={image}
            id={selectedPost}
          />
        ) : (
          ""
        )
      )}
    </>
  );
};

export const PostBig: FC<IPost> = ({ title, text, id, date, image, likes }) => {
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();
  const theme = useSelector(({ theme }) => theme);
  const navigate = useNavigate();

  return (
    <>
      <div className="post">
        <div className="post__content post__single__gap">
          <h1 className="post__title">{title}</h1>
          <div
            className="post__image"
            onClick={() =>
              dispatch(TOGGLE_POPUP({ isOpen: "open", id: id, image: image }))
            }
          >
            <img src={image} alt="image" />
          </div>
          {text ? <p className="post__text">{text}</p> : null}

          <div className="post__footer">
            <div className="post__likeDislike">
              <StyledPostBtn
                theme={theme}
                className="post__like material-symbols-outlined"
                onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}
              >
                thumb_up
              </StyledPostBtn>
              <span>{likes || 0}</span>
              <StyledPostBtn
                theme={theme}
                className="post__dislike material-symbols-outlined"
                onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}
              >
                thumb_down
              </StyledPostBtn>
            </div>
            <div className="post__btn">
              <StyledPostBtn
                theme={theme}
                className="btn__favorite material-symbols-outlined"
                onClick={() => dispatch({ type: "ADD_FAVORITE", payload: id })}
              >
                bookmark
              </StyledPostBtn>
            </div>
          </div>
        </div>
      </div>
      <div className="post__footer">
        <button
          onClick={() => dispatch(TOGGLE_POPUP({ isOpen: "open", id: id - 1 }))}
        >
          left
        </button>
        <button
          onClick={() => dispatch(TOGGLE_POPUP({ isOpen: "open", id: id + 1 }))}
        >
          right
        </button>
      </div>
    </>
  );
};

export const PostMid: FC<IPost> = ({ title, date, id, image, likes }) => {
  // console.log(id);

  const theme = useSelector(({ theme }) => theme);
  const postItem = useSelector(({ post }) => post);
  const favorite = useSelector(({ isFavorite }) => isFavorite);
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();
  const posts = useSelector(({ posts }) => posts);
  const post = posts.filter((post: IPost) => post.id === id);
  // console.log(post);

  return (
    <div className="post__mid ">
      <div
        className="post__content "
        onClick={() => dispatch(TOGGLE_POPUP({ isOpen: "open", id: id }))}
      >
        <div className="post__mid__image">
          <img src={image} alt="image" />
        </div>
        <p className="post__date">{date}</p>
        <p className="post__title">{title}</p>
      </div>
      <div className="post__footer">
        <div className="post__likeDislike">
          <StyledPostBtn
            theme={theme}
            className="post__like material-symbols-outlined"
            onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}
          >
            thumb_up
          </StyledPostBtn>
          <span>{likes || 0}</span>
          <StyledPostBtn
            theme={theme}
            className="post__dislike material-symbols-outlined"
            onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}
          >
            thumb_down
          </StyledPostBtn>
        </div>
        <div className="post__btn">
          <StyledPostBtn
            theme={theme}
            className="btn__favorite material-symbols-outlined"
            onClick={() => dispatch({ type: "ADD_FAVORITE", payload: id })}
          >
            bookmark
          </StyledPostBtn>
          <StyledPostBtn
            theme={theme}
            className="btn__popup material-symbols-outlined"
            // onClick={() => navigate(`/blog/${id}`)}
            onClick={() => dispatch(FETCH_POST(navigate, id))}
          >
            more_horiz
          </StyledPostBtn>
        </div>
      </div>
    </div>
  );
};

export const PostSmall: FC<IPost> = ({ title, date, id, image, likes }) => {
  const theme = useSelector(({ theme }) => theme);
  const navigate = useNavigate();
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();

  return (
    <div className="post__small">
      <div
        className="post__content"
        onClick={() => dispatch(TOGGLE_POPUP({ isOpen: "open", id: id }))}
      >
        <div className="post__text">
          <p className="post__date">{date}</p>
          <p className="post__title">{title}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="image" />
        </div>
      </div>
      <div className="post__footer">
        <div className="post__likeDislike">
          <StyledPostBtn
            theme={theme}
            className="post__like material-symbols-outlined"
            onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}
          >
            thumb_up
          </StyledPostBtn>
          <span>{likes || 0}</span>
          <StyledPostBtn
            theme={theme}
            className="post__dislike material-symbols-outlined"
            onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}
          >
            thumb_down
          </StyledPostBtn>
        </div>
        <div className="post__btn">
          <StyledPostBtn
            theme={theme}
            className="btn__favorite material-symbols-outlined"
            onClick={() => dispatch({ type: "ADD_FAVORITE", payload: id })}
          >
            bookmark
          </StyledPostBtn>
          <StyledPostBtn
            theme={theme}
            className="btn__popup material-symbols-outlined"
            // onClick={() => navigate(`/blog/${id}`)}
            onClick={() => dispatch(FETCH_POST(navigate, id))}
          >
            more_horiz
          </StyledPostBtn>
        </div>
      </div>
    </div>
  );
};

export default Post;
