import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AllPost from "../Post/AllPost";
import FavoritePost from "../Post/FavoritePost/FavoritePost";
import PopularPost from "../Post/PopularPost/PopularPost";

import { StyledSortItem, StyledTabContainer, StyledTabItem } from "./styled";
import "./style.css";
import { SORT_POSTS } from "src/actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const TabMenu = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
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
        <StyledSortItem
          theme={theme}
          className="sortItem"
          name=""
          id=""
          onClick={(e) => {
            dispatch(SORT_POSTS(e.currentTarget.value));
          }}
        >
          <option value="">Sort by</option>
          <option>text</option>
          <option>title</option>
          <option>lesson_num</option>
          <option>date</option>
        </StyledSortItem>
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
