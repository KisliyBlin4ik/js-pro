import React from 'react'
import "./style.css"

const TabMenu = () => {
  return (
    <div className='tabs__container'>
        <span className='tabItem'>all</span>
        <span className='tabItem'>my favorites</span>
        <span className='tabItem'>popular</span>
        <span className='tabItemNone'></span>
    </div>
  )
}

export default TabMenu