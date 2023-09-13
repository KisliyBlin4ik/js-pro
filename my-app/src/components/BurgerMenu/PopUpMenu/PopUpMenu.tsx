import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ToggleThemeBtn from "src/components/PageTemlate/ToggleThemeBtn";

import { StyledPopUpMenu, StyledPopUpMenuItem } from "./styled";
import "./style.css";

const PopUpMenu = ({ openmenu, userName }: any) => {
  const navigate = useNavigate();
  const theme = useSelector(({ theme }) => theme);
  const exit = () => {
    localStorage.removeItem("access");
    navigate("/signIn");
  };

  return (
    <StyledPopUpMenu theme={theme} className="popUpMenu" openmenu={openmenu}>
      <div className="popUpMenu__item">
        <div>{userName}</div>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/blog")}>
          Home
        </StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme}>Add post</StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/signUp")}>
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
