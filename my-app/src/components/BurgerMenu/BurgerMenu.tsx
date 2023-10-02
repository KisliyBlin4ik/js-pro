import React, { useState, useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { SET_SEARCH_POSTS, TOGGLE_OPEN } from "src/actions/actions";

import instance from "src/axiosConfig.js";

import PopUpMenu from "./PopUpMenu";

import "./style.css";

export interface IBurgerMenu {
  userName: any;
  onSubmit?: any;
}

const BurgerMenu: FC<IBurgerMenu> = ({userName, onSubmit}) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();

  const open = useSelector(({ open }) => open);

  const token = localStorage.getItem("access");

  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState('')

  const handleChange = (event: any) => {
    setInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    setName(userName);
    // https://studapi.teachmeskills.by/blog/posts/?search=Hel
    instance.get(`blog/posts/?limit=10&search=${inputValue}`)
    .then((data) => {
      dispatch(SET_SEARCH_POSTS(data.data.results))
    })
    onSubmit(inputValue);
    if (inputValue !== '') {
      navigate(`/blog/posts/&limit=100&search=${inputValue}`)
    } else if (inputValue === '' && token) {
      navigate('/')
    }
  }, [inputValue, userName]);


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
          <PopUpMenu userName={token ? name : 'user'} />
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
        <a onClick={() => navigate(`/blog/posts/limit=10&search=${inputValue}`)}>
          <div className="material-symbols-outlined">search</div>
        </a>
      </div>
      <div className="userName">
        <span>{token && name ? name : 'user'}</span>
      </div>
    </div>
  );
};

export default BurgerMenu;
