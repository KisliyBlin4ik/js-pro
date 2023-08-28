import React, { useState, useContext } from 'react'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import Input from '../Input'
import { ThemeContext } from 'src/App'
import { StyledForm } from 'src/styled'


const SignIn = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageTemplate title='Sign In'>
      <StyledForm className='form' theme={theme}>
        <Input type='text' placeholder='Your email' value={email} label='Email' onChange={setEmail}/>
        <Input type='text' placeholder='Your password' value={password} label='Password' onChange={setPassword}/>
        <button className='signInBtn'>Sign In</button>
      </StyledForm>
    </PageTemplate>
  )
}

export default SignIn