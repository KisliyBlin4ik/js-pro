import React, { useState, useEffect } from 'react'
import { IPost } from '../Post/Post';
import "./style.css"

const BurgerMenu = ({ onSubmit }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  } 

  onSubmit(inputValue)

  return (
    <div className='header__container'>
        <div className="burgerMenu">
            <div className='burger'>
                <span className='burgerLine'></span>
            </div>
        </div>
        <div className='search'>
          <input type="text" className='search' size={100} value={inputValue} onChange={handleChange}/>
          <span className="material-symbols-outlined">
            search
          </span>
        </div>
        <div className='userName'>
            <span>artem malkin</span>
        </div>
    </div>
  )
}

export default BurgerMenu