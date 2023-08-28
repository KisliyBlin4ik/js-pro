import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
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

  return (
    <ThemeContext.Provider value={{icon, theme, toggleTheme}}>
      <StyledWrapper className='wrapper' theme={theme}>
        <header>
          <BurgerMenu onSubmit={handleInputSubmit}/>
        </header>
        {/* <Success /> */}
        {/* <SignIn /> */}
        {/* <PostList /> */}
        {/* <PostItem /> */}
        <SearchPost inputData={inputData}/>
      </StyledWrapper>
    </ThemeContext.Provider>

  )
}

export default App;
