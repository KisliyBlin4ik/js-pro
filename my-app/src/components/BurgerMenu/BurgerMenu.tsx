import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PopUpMenu from "./PopUpMenu";

import { SET_SEARCH_POSTS, TOGGLE_OPEN } from "src/actions/actions";
import instance from "src/axiosConfig";


import "./style.css";
import { IPost } from "../Post/Post";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const BurgerMenu = ({ onSubmit }: any) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  const open = useSelector(({ open }) => open);
  // const searchPosts = useSelector(({ searchPosts }) => searchPosts);
  // console.log(searchPosts);
  
  const [inputValue, setInputValue] = useState("");
  // console.log(inputValue);

  let searchResults = [];
  const [search, setSearch] = useState('')
  const [search2, setSearch2] = useState<IPost[]>([])

 
  

  const handleChange = (event: any) => {
    setInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    // https://studapi.teachmeskills.by/blog/posts/?search=Hel
    instance.get(`blog/posts/?limit=100&offset=20&search=${inputValue}`)
    .then((data) => {
      // console.log(data)
      dispatch(SET_SEARCH_POSTS(data.data.results))
    })
    onSubmit(inputValue);
    setSearch(inputValue);
    if (inputValue !== '') {
      navigate(`/blog/posts/&limit=100&search=${inputValue}`)
    } else if (inputValue === '') {
      navigate('/blog')

    }
  }, [inputValue]);

  const userName = useSelector(({ user }) => user.username);

  return (
    <div className="header__container">
      <div className="burgerMenu">
        <div
          className="burger"
          onClick={() =>
            dispatch(TOGGLE_OPEN(open === "close" ? "open" : "close"))
          }
        >
          <span
            className={`burgerLine ${open === "open" ? "open" : ""}`}
          ></span>
          <PopUpMenu userName={userName} />
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          className="search"
          size={100}
          value={inputValue}
          onChange={handleChange}
        />
        <a onClick={() => navigate(`/blog/posts/&limit=100&search=${inputValue}`)}>
          <div className="material-symbols-outlined">search</div>
        </a>
      </div>
      <div className="userName">
        <span>{userName ? userName : "user"}</span>
      </div>
    </div>
  );
};

export default BurgerMenu;
