import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Title from './components/Title';
import BurgerMenu from './components/BurgerMenu';
import TabMenu from './components/TabMenu';
import PostList from './components/PostList';
import PageTemplate from './components/PageTemlate';
import Success from './components/Success';
import SignIn from './components/SignIn/SignIn';
import PostItem from './components/PostList/PostItem';
import SearchPost from './components/Post/SearchPost';
import { StyledWrapper } from './styled';
import './App.css';
import BigPost from './components/Post/BigPost';
import MyComponent from './components/Post/Post';
import AllPost from './components/Post/AllPost/AllPost';

interface IThemeContext {
  icon: 'light_mode' | 'dark_mode';
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({icon: 'light_mode', theme: 'light', toggleTheme: () => {}});

function App() {
  const [inputData, setInputData] = useState('');
  const [icon, setIcon] = useState<'light_mode' | 'dark_mode'>("dark_mode");
  const [theme, setTheme] = useState<'light' | 'dark'>("light");

  const toggleTheme = () => {
    setIcon(icon === 'dark_mode' ? 'light_mode' : 'dark_mode');
    setTheme(theme === 'dark' ? 'light' : 'dark'); 
  }

  const handleInputSubmit = (inputValue: string) => {
    setInputData(inputValue);
  };

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  

  return (
    <ThemeContext.Provider value={{icon, theme, toggleTheme}}>
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
      {location.pathname === '/' && <Navigate to='blog'/>}
    </StyledWrapper>
  </ThemeContext.Provider>
  )
}

export default App;
