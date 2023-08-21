import React from 'react'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'

const Success = () => {
  return (
    <PageTemplate title='Success'>
        <div className='Success__container'>
            <div className='Success__text'>
                <p>Email confirmed <br /> Your registration in move completed</p>
            </div>
            <a className='Success__btn' href="#">Go to home</a>
        </div>
    </PageTemplate>
  )
}

export default Success