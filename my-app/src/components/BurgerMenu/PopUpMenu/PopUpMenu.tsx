import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ToggleThemeBtn from "src/components/PageTemlate/ToggleThemeBtn";

import { StyledPopUpMenu, StyledPopUpMenuItem } from "./styled";
import "./style.css";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import {IBurgerMenu} from '../BurgerMenu'

interface IPopupMenu {
  userName: string;
}

const PopUpMenu: FC<IBurgerMenu> = ({userName}) => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const navigate = useNavigate();
  const theme = useSelector(({ theme }) => theme);
  const open = useSelector(({ open }) => open);

  const exit = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    // dispatch({ type: "SET_SIGN_IN", payload:  });
    navigate("/sign-in");
  };

  return (
    <StyledPopUpMenu theme={theme} className="popUpMenu" open={open}>
      <div className="popUpMenu__item">
        <div>{userName ? userName : 'user'}</div>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/blog")}>
          Home
        </StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/add-posts")}>Add posts</StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/my-post")}>My post</StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/sign-up")}>
          Sign Up
        </StyledPopUpMenuItem>
      </div>
      <div className="popUpMenu__footer">
        <ToggleThemeBtn />
        <div onClick={() => exit()}>Log out</div>
      </div>
    </StyledPopUpMenu>
  );
};

export default PopUpMenu;
