import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'
import { StyledPopUpMenu } from 'src/styled'
import ToggleThemeBtn from 'src/components/PageTemlate/ToggleThemeBtn/ToggleThemeBtn'

const PopUpMenu = ({openMenu}:any) => {
  const navigate = useNavigate();


  return (
    <StyledPopUpMenu className='popUpMenu' openMenu={openMenu}>
        <div>User</div>
        <div onClick={() => navigate('/blog')}>Home</div>
        <div>Add post</div>
        <ToggleThemeBtn />
        <div onClick={() => navigate('/signIn')}>Log out</div>
    </StyledPopUpMenu>
  )
}

export default PopUpMenu