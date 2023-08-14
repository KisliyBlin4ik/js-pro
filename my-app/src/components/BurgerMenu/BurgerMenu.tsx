import React from 'react'
import "./style.css"

const BurgerMenu = () => {
  return (
    <div className='header__container'>
        <div className="burgerMenu">
            <div className='burger'>
                <span className='burgerLine'></span>
            </div>
        </div>
        <div className='search'></div>
        <div className='userName'>
            <span>artem malkin</span>
        </div>
    </div>
  )
}

export default BurgerMenu