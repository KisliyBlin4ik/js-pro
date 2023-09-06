import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { StyledPopUpMenu } from './styled'
import ToggleThemeBtn from 'src/components/PageTemlate/ToggleThemeBtn/ToggleThemeBtn'
import { StyledPopUpMenuItem } from './styled'
import { useSelector } from 'react-redux'

const PopUpMenu = ({openmenu}:any) => {
  const navigate = useNavigate();
  const theme = useSelector(({theme}) => theme);



  return (
    <StyledPopUpMenu theme={theme} className='popUpMenu' openmenu={openmenu}>
      <div className='popUpMenu__item'>
        <div>User</div>
        <StyledPopUpMenuItem theme={theme} onClick={() => navigate('/blog')}>Home</StyledPopUpMenuItem>
        <StyledPopUpMenuItem theme={theme}>Add post</StyledPopUpMenuItem>
      </div>
      <div className='popUpMenu__footer'>
        <ToggleThemeBtn />
        <div onClick={() => navigate('/signIn')}>Log out</div>
      </div>
    </StyledPopUpMenu>
  )
}

export default PopUpMenu