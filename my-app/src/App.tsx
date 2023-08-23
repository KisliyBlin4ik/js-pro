import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import Title from './components/Title';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import TabMenu from './components/TabMenu';
import PostList from './components/PostList';
import PageTemplate from './components/PageTemlate/PageTemplate';
import Success from './components/Success';
import SignIn from './components/SignIn/SignIn';
import PostItem from './components/PostList/PostItem';

interface IThemeContext {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({theme: 'light', toggleTheme: () => {}});

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>("light");
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); 
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='wrapper'>
      <header>
        <BurgerMenu />
      </header>
        <Success />
        {/* <SignIn /> */}
        {/* <PostList /> */}
        {/* <PostItem /> */}

    </div>
    </ThemeContext.Provider>

  )
}

export default App;
