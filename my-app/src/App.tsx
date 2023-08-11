import React from 'react';
import Title from './components/Title';
import './App.css';
import BurgerMenu from './components/BurgerMenu';
import TabMenu from './components/TabMenu/TabMenu';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <BurgerMenu />
      </header>
      <main>
      <>
        <Title />
      </>
      <>
        <TabMenu />
      </>
      </main>
    </div>
  )
}

export default App;
