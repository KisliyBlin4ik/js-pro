import React, {FC, ReactNode} from 'react'
import './style.css'

interface IPageTemplate {
    title?: string;
    children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({title, children}) => {
  return (
    <div className='PageTemplate'>
    <main>
        <a href="#">Back to home</a>
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