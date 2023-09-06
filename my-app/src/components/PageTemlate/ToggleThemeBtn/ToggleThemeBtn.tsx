import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux';
// import { TOGGLE_THEME_DARK, TOGGLE_THEME_LIHGT } from 'src/actions/actions';
import { TOGGLE_THEME } from 'src/actions/actions';
import './style.css'
import { StyledtoggleThemeBtnLight, StyledtoggleThemeBtnDark } from './styled';
import { useSelector } from 'react-redux';


const ToggleThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector(({theme}) => theme);

  return (
    <div className='toggleTheme'>
        <StyledtoggleThemeBtnLight theme={theme} onClick={() => dispatch(TOGGLE_THEME('light_mode'))}>
        <span className="material-symbols-outlined">
          light_mode
        </span>
        </StyledtoggleThemeBtnLight>
        <StyledtoggleThemeBtnDark theme={theme} onClick={() => dispatch(TOGGLE_THEME('dark_mode'))}>
        <span className="material-symbols-outlined">
          dark_mode
        </span>
        </StyledtoggleThemeBtnDark>
    </div>
  )
}
export default ToggleThemeBtn