import React, { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import BurgerMenu from './components/BurgerMenu';
import TabMenu from './components/TabMenu';
import PostList from './pages/PostList';
import PageTemplate from './components/PageTemlate';
import Success from './pages/Success';
import SignIn from './pages/SignIn/SignIn';
import PostItem from './pages/PostList/PostItem';
import SearchPost from './components/Post/SearchPost';
import MyComponent from './components/Post/Post';
import AllPost from './components/Post/AllPost/AllPost';
import { StyledWrapper } from './styled';
import Counter from './components/Counter';
import { initialState } from './store/store';
import { IPost } from './components/Post/Post';
import './App.css';

interface IThemeContext {
  state: "light_mode" | "dark_mode";
  posts: IPost[] | [];
}

export const ThemeContext = createContext<IThemeContext>({state: 'light_mode', posts: []});

function App() {
  const [posts, setArrPost] = useState<IPost[]>([]);

  const fetchPost = async () => {
      const response = await fetch('https://64f101948a8b66ecf77a538e.mockapi.io/postsForReact/posts');
      const data = await response.json();
      setArrPost(data);
  };
  useEffect(() => {
      fetchPost()
  }, [])

  const [inputData, setInputData] = useState('');

  const handleInputSubmit = (inputValue: string) => {
    setInputData(inputValue);
  };

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  // console.log(theme);
  const state = useSelector(({theme}) => theme)
  console.log(state);

  return (
    <ThemeContext.Provider value={{state, posts}}>
    <StyledWrapper className='wrapper' theme={state}>
      <header>
        <BurgerMenu onSubmit={handleInputSubmit}/>
        {/* <Link to="/blog">blog</Link> */}
      </header>
      <Routes>
        <Route path='/blog' element={<PostList />}></Route>
        <Route path='/blog/:id' element={<PostItem />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/search' element={<SearchPost inputData={inputData}/>}></Route>
      </Routes>
      {location.pathname === '/' && <Navigate to='blog'/>}
    </StyledWrapper>
  </ThemeContext.Provider>
  )
}

export default App;
