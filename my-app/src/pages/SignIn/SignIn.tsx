import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import Input from '../../components/Input'
import { ThemeContext } from 'src/App'
import { StyledForm } from 'src/styled'


const SignIn = () => {
  const {state} = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <PageTemplate title='Sign In'>
      <StyledForm className='form' theme={state}>
        <Input type='text' placeholder='Your email' value={email} label='Email' onChange={setEmail}/>
        <Input type='text' placeholder='Your password' value={password} label='Password' onChange={setPassword}/>
        <button className='signInBtn' onClick={() => navigate('/success')}>Sign In</button>
      </StyledForm>
    </PageTemplate>
  )
}

export default SignIn