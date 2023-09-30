import React, { createContext, useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import PostList from "./pages/PostList";
import Success from "./pages/Success";
import SignUp from "./pages/SignUp";
import PostItem from "./pages/PostList/PostItem";
import MyPost from "./pages/MyPost";

import BurgerMenu from "./components/BurgerMenu";
import SearchPost from "./components/Post/SearchPost";
import Post from "./components/Post";
import PostOnlyImage from "./components/Post/PostOnlyImage";
import PopupPost from "./components/PopupPost";

import { FETCH_MY_POSTS, FETCH_POSTS, SIGN_IN_USER } from "./actions/actions";

import { StyledWrapper } from "./styled";
import "./App.css";
import ActivateUser from "./components/ActivateUser/ActivateUser";
import SignIn from "./pages/SingIn/SignIn";
import { decodeJwt, expToMinutes, updateAccessToken } from "./helpers";
import AddPosts from "./pages/AddPosts";

interface IThemeContext {
  popupId: number | null;
}

export const ThemeContext = createContext<IThemeContext>({ popupId: null });

const App = () => {
  
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const navigate = useNavigate();
  const user = useSelector(({ user }) => user);
  const userName = useSelector(({ user }) => user.username);

  const token = localStorage.getItem("access");

  let expTimestampInSeconds = 0;

  if (token) {
    const decodedToken = decodeJwt(token);
    expTimestampInSeconds = decodedToken.payload.exp;
  }

  let remainingMinutes = expToMinutes(expTimestampInSeconds);
  // console.log(remainingMinutes);

  const startTokenRefreshTimer = () => {
    if (!token) {
      return null;
    }
    const expirationTimestamp = decodeJwt(token).payload.exp;
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTimestamp * 1000 - currentTime;

    if ((timeUntilExpiration) > 20000) {
      setInterval(updateAccessToken, timeUntilExpiration - 20000);
    } else {
      localStorage.removeItem('access');
    }
  };

  useEffect(() => {
    startTokenRefreshTimer();
    dispatch(FETCH_POSTS());
    if (token) {
      dispatch(SIGN_IN_USER(token));
      dispatch(FETCH_MY_POSTS(token));
    }
    window.addEventListener("storage", (event) => {
      console.log(event);

      if (event.key === "access" && event.newValue === null) {
        navigate("/signIn");
      }
    });
  }, [token]);

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
          <BurgerMenu userName={userName} onSubmit={handleInputSubmit} />
        </header>
        <Routes>
          {!token && (
            <>
              <Route
                path="/activate/:uid/:token"
                element={<ActivateUser />}
              ></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/success" element={<Success />}></Route>
            </>
          )}
          <Route path="/" element={<PostList />}></Route>
          <Route path="/blog" element={<PostList />}></Route>
          <Route path="/blog/:id" element={<PostItem />}></Route>
          <Route path={`/blog/posts/&limit=100&search=${inputData}`} element={<SearchPost inputData={inputData} />}></Route>
          <Route path="/my-post" element={<MyPost />}></Route>
          <Route path="/add-posts" element={<AddPosts />}></Route>
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
