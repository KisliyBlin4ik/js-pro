import React, {FC, ReactNode, useContext} from 'react'
import { ThemeContext } from 'src/App'
import { StyledPageTemplate } from 'src/styled';
import ToggleThemeBtn from './ToggleThemeBtn';
import './style.css'

interface IPageTemplate {
    title?: string;
    children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <StyledPageTemplate className='PageTemplate' theme={theme}>
      <main>
        <a className='BackToHome' href="#">Back to home</a>
        <ToggleThemeBtn></ToggleThemeBtn>
        <div className='titleWrapper'>
            <h1>{title}</h1>
        </div>
        <div className='content'>{children}</div>
      </main>
      <footer>
        <span>2022</span>
        <span>All right reserved</span>
      </footer>
    </StyledPageTemplate>
  )
}

export default PageTemplate