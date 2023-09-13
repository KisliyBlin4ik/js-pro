import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PopUpMenu from "./PopUpMenu";

import "./style.css";
import { useSelector } from "react-redux";

const BurgerMenu = ({ onSubmit }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setInputValue(event.currentTarget.value);
  };
  useEffect(() => {
    onSubmit(inputValue);
  }, [inputValue]);
  // console.log(open);

  const userName = useSelector(({ user }) => user.username);

  return (
    <div className="header__container">
      <div className="burgerMenu">
        <div
          className="burger"
          onClick={() => {
            setOpen(open ? false : true);
          }}
        >
          <span className={`burgerLine ${open ? "open" : ""}`}></span>
          <PopUpMenu openmenu={open} userName={userName} />
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
        <a onClick={() => navigate("/search")}>
          <div className="material-symbols-outlined">search</div>
        </a>
      </div>
      <div className="userName">
        <span>{userName}</span>
      </div>
    </div>
  );
};

export default BurgerMenu;
