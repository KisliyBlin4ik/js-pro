import React from 'react';
import Title from './components/Title';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import TabMenu from './components/TabMenu';
import PostList from './components/PostList';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <BurgerMenu />
      </header>
      <main>
        {/* <Title /> */}
        {/* <TabMenu /> */}
        <PostList />
      </main>
    </div>
  )
}

export default App;
