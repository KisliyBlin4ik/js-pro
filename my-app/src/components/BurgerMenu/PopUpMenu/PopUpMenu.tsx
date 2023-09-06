import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ToggleThemeBtn from "src/components/PageTemlate/ToggleThemeBtn";

import { StyledPopUpMenu, StyledPopUpMenuItem } from "./styled";
import "./style.css";

const PopUpMenu = ({ openmenu }: any) => {
  const navigate = useNavigate();
  const theme = useSelector(({ theme }) => theme);

  return (
    <StyledPopUpMenu theme={theme} className="popUpMenu" openmenu={openmenu}>
      <div className="popUpMenu__item">
        <div>User</div>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate("/blog")}>
          Home
        </StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme}>Add post</StyledPopUpMenuItem>
      </div>
      <div className="popUpMenu__footer">
        <ToggleThemeBtn />
        <div onClick={() => navigate("/signUp")}>Log out</div>
      </div>
    </StyledPopUpMenu>
  );
};

export default PopUpMenu;
