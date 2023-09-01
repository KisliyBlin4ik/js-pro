import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { TOGGLE_THEME_DARK, TOGGLE_THEME_LIHGT } from 'src/actions/actions';


const ToggleThemeBtn = () => {
  const dispatch = useDispatch();

  return (
    <>
        <button onClick={() => dispatch(TOGGLE_THEME_LIHGT('light_mode'))}>
        <span className="material-symbols-outlined">
          light_mode
        </span>
        </button>
        <button onClick={() => dispatch(TOGGLE_THEME_DARK('dark_mode'))}>
        <span className="material-symbols-outlined">
          dark_mode
        </span>
        </button>
    </>
  )
}
export default ToggleThemeBtn