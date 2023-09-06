import React, { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import PostList from './pages/PostList';
import Success from './pages/Success';
import SignIn from './pages/SignIn/SignIn';
import PostItem from './pages/PostList/PostItem';
import BurgerMenu from './components/BurgerMenu';
import SearchPost from './components/Post/SearchPost';
import Post from './components/Post/Post';
import { IPost } from './components/Post/Post';
import PostOnlyImage from './components/Post/PostOnlyImage/PostOnlyImage';
import PopupPost from './components/PopupPost/PopupPost';
import { StyledWrapper } from './styled';
import './App.css';

interface IThemeContext {
  popupIsOpen: 'open' | 'close';
  popupId: number | null;
  posts: IPost[] | [];
}

export const ThemeContext = createContext<IThemeContext>({ popupIsOpen: 'close', posts: [], popupId: null});

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

  const location = useLocation();

  const theme = useSelector(({theme}) => theme)
  let popupId = useSelector(({popupInfo}) => popupInfo.id)
  let popupIsOpen = useSelector(({popupInfo}) => popupInfo.isOpen)
  let popupImage = useSelector(({popupInfo}) => popupInfo.image)

  return (
    <ThemeContext.Provider value={{ popupIsOpen, posts, popupId}}>
    <StyledWrapper className='wrapper' theme={theme}>
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
      {
      (popupIsOpen === 'open' && popupId && !popupImage) ? <PopupPost>{<Post/>}</PopupPost> :
      (popupIsOpen === 'open' && popupId && popupImage) ? <PopupPost>{<PostOnlyImage/>}</PopupPost> : 
      ''
      }
      
      {location.pathname === '/' && <Navigate to='blog'/>}
    </StyledWrapper>
  </ThemeContext.Provider>
  )
}

export default App;
