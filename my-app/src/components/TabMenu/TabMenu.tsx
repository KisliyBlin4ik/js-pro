import React, { useState } from 'react'
import "./style.css"
import AllPost from '../Post/AllPost/AllPost';
import FavoritePost from '../Post/FavoritePost/FavoritePost';
import PopularPost from '../Post/PopularPost/PopularPost';

const TabMenu = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  }

  return (
    <>
      <div className='tabs__container'>
        <button type='button' className={toggleState === 1 ? 'tabsItem active-tab' : 'tabsItem'} onClick={() => toggleTab(1)}>all</button>
        <button type='button' className={toggleState === 2 ? 'tabsItem active-tab' : 'tabsItem'} onClick={() => toggleTab(2)}>my favorites</button>
        <button type='button' className={toggleState === 3 ? 'tabsItem active-tab' : 'tabsItem'} onClick={() => toggleTab(3)}>popular</button>
      </div>

      <div className="tabs__content">
        <div className='allPosts'>{toggleState === 1 ? <AllPost/> : ''}</div>
        <div className='favoritesPosts'>{toggleState === 2 ? <FavoritePost/> : ''}</div>
        <div className='popularPosts'>{toggleState === 3 ? <PopularPost/> : ''}</div>
      </div>
    </>

  )
}

export default TabMenu