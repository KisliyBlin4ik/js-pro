import React, {FC, ReactNode, useContext} from 'react'
import { ThemeContext } from 'src/App'
import './style.css'

interface IPageTemplate {
    title?: string;
    children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className='PageTemplate'>
    <main>
        <a href="#">Back to home</a>
        <button onClick={toggleTheme}>qwe</button>
        <div className='titleWrapper'>
            <h1>{title}</h1>
        </div>
        <div className='content'>{children}</div>
    </main>
    <footer>
        <span>2022</span>
        <span>All right reserved</span>
    </footer>
    </div>
  )
}

export default PageTemplate