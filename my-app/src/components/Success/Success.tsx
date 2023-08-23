import React, { useContext } from 'react'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import { ThemeContext } from 'src/App'
import { StyledContainer } from './styled'

const Success = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  

  return (
    <PageTemplate title='Success'>
        <StyledContainer theme={theme}>
            <div className='Success__text'>
                <p>Email confirmed <br /> Your registration in move completed</p>
            </div>
            <a className='Success__btn' href="#">Go to home</a>
        </StyledContainer>
    </PageTemplate>
  )
}

export default Success