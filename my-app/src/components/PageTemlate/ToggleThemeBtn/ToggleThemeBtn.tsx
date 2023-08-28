import React, { useState, useContext } from 'react'
import { ThemeContext } from 'src/App';


const ToggleThemeBtn = () => {
  const {theme, icon, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
        <span className="material-symbols-outlined">
            {icon}
        </span>
    </button>
  )
}

export default ToggleThemeBtn