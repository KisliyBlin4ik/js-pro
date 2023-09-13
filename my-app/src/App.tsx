import React, { createContext, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import PostList from "./pages/PostList";
import Success from "./pages/Success";
import SignUp from "./pages/SignUp";
import PostItem from "./pages/PostList/PostItem";

import BurgerMenu from "./components/BurgerMenu";
import SearchPost from "./components/Post/SearchPost";
import Post from "./components/Post";
import PostOnlyImage from "./components/Post/PostOnlyImage";
import PopupPost from "./components/PopupPost";

import { FETCH_POSTS, SIGN_IN_USER } from "./actions/actions";

import { StyledWrapper } from "./styled";
import "./App.css";
import ActivateUser from "./components/ActivateUser/ActivateUser";
import SignIn from "./pages/SingIn/SignIn";

interface IThemeContext {
  popupId: number | null;
}

export const ThemeContext = createContext<IThemeContext>({ popupId: null });

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const token = localStorage.getItem("access");
  console.log(token);

  useEffect(() => {
    dispatch(FETCH_POSTS());
    if (token) {
      dispatch(SIGN_IN_USER(token));
    }
  }, []);

  const [inputData, setInputData] = useState("");
  const handleInputSubmit = (inputValue: string) => {
    setInputData(inputValue);
  };

  const location = useLocation();
  const theme = useSelector(({ theme }) => theme);
  const popupId = useSelector(({ popupInfo }) => popupInfo.id);
  const popupIsOpen = useSelector(({ popupInfo }) => popupInfo.isOpen);
  const popupImage = useSelector(({ popupInfo }) => popupInfo.image);

  return (
    <ThemeContext.Provider value={{ popupId }}>
      <StyledWrapper className="wrapper" theme={theme}>
        <header>
          <BurgerMenu onSubmit={handleInputSubmit} />
        </header>
        <Routes>
          {!token && (
            <>
              <Route
                path="/activate/:uid/:token"
                element={<ActivateUser />}
              ></Route>
              <Route path="/signUp" element={<SignUp />}></Route>
              <Route path="/signIn" element={<SignIn />}></Route>
              <Route path="/success" element={<Success />}></Route>
            </>
          )}
          <Route path="/blog" element={<PostList />}></Route>
          <Route path="/blog/:id" element={<PostItem />}></Route>
          <Route
            path="/search"
            element={<SearchPost inputData={inputData} />}
          ></Route>
        </Routes>
        {popupIsOpen === "open" && popupId && !popupImage ? (
          <PopupPost>{<Post />}</PopupPost>
        ) : popupIsOpen === "open" && popupId && popupImage ? (
          <PopupPost>{<PostOnlyImage />}</PopupPost>
        ) : (
          ""
        )}
        {location.pathname === "/" && <Navigate to="blog" />}
      </StyledWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
