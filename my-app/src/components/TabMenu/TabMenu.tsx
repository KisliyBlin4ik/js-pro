import React, { useState } from "react";
import { useSelector } from "react-redux";

import AllPost from "../Post/AllPost";
import FavoritePost from "../Post/FavoritePost/FavoritePost";
import PopularPost from "../Post/PopularPost/PopularPost";

import { StyledTabContainer, StyledTabItem } from "./styled";
import "./style.css";

const TabMenu = () => {
  const theme = useSelector(({ theme }) => theme);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <StyledTabContainer theme={theme} className="tabs__container">
        <StyledTabItem
          theme={theme}
          type="button"
          className={toggleState === 1 ? "tabsItem active-tab" : "tabsItem"}
          onClick={() => toggleTab(1)}
        >
          all
        </StyledTabItem>
        <StyledTabItem
          theme={theme}
          type="button"
          className={toggleState === 2 ? "tabsItem active-tab" : "tabsItem"}
          onClick={() => toggleTab(2)}
        >
          my favorites
        </StyledTabItem>
        <StyledTabItem
          theme={theme}
          type="button"
          className={toggleState === 3 ? "tabsItem active-tab" : "tabsItem"}
          onClick={() => toggleTab(3)}
        >
          popular
        </StyledTabItem>
      </StyledTabContainer>

      <div className="tabs__content">
        <div className="allPosts">{toggleState === 1 ? <AllPost /> : ""}</div>
        <div className="favoritesPosts">
          {toggleState === 2 ? <FavoritePost /> : ""}
        </div>
        <div className="popularPosts">
          {toggleState === 3 ? <PopularPost /> : ""}
        </div>
      </div>
    </>
  );
};

export default TabMenu;
