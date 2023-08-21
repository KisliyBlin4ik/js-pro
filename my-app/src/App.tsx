import React from 'react';
import Title from './components/Title';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import TabMenu from './components/TabMenu';
import PostList from './components/PostList';
import PageTemplate from './components/PageTemlate/PageTemplate';
import Success from './components/Success';
import SignIn from './components/SignIn/SignIn';
import PostItem from './components/PostList/PostItem';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <BurgerMenu />
      </header>
        <Success />
        {/* <SignIn /> */}
        {/* <PostList /> */}
        {/* <PostItem /> */}

    </div>
  )
}

export default App;
