import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import { ThemeContext } from 'src/App'
import { StyledContainer } from 'src/styled'
import { useSelector } from 'react-redux'

const Success = () => {
  const theme = useSelector(({theme}) => theme);
  const navigate = useNavigate();

  return (
    <PageTemplate title='Success'>
        <StyledContainer theme={theme}>
            <div className='Success__text'>
                <p>Email confirmed <br /> Your registration in move completed</p>
            </div>
            <a className='Success__btn' onClick={() => navigate('/blog')}>Go to home</a>
        </StyledContainer>
    </PageTemplate>
  )
}

export default Success