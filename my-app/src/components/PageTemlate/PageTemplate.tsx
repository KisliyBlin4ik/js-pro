import React, {FC, ReactNode, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from 'src/App'
import { StyledPageTemplate } from 'src/styled';
import ToggleThemeBtn from './ToggleThemeBtn';
import './style.css'
import { useSelector } from 'react-redux';

interface IPageTemplate {
    title?: string;
    children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {
  const theme = useSelector(({theme}) => theme);
  const navigate = useNavigate();

  return (
    <StyledPageTemplate className='PageTemplate' theme={theme}>
      <>
        <a className='BackToHome' onClick={() => navigate('/blog')}>Back to home</a>
        <div className='titleWrapper'>
            <h1>{title}</h1>
        </div>
        <div className='content'>{children}</div>
      </>
      <footer>
        <span>2022</span>
        <span>All right reserved</span>
      </footer>
    </StyledPageTemplate>
  )
}

export default PageTemplate