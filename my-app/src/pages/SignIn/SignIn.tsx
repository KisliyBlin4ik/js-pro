import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import Input from '../../components/Input'
import { ThemeContext } from 'src/App'
import { StyledForm } from 'src/styled'
import { CREATE_USER } from 'src/actions/actions';


const SignIn = () => {
  const dispatch = useDispatch();

  const theme = useSelector(({ theme }) => theme);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  console.log(name);


  return (
    <PageTemplate title='Sign In'>
      <StyledForm className='form' theme={theme}>
        <Input type='text' placeholder='Your name' value={name} label='Name' onChange={setName} />
        <Input type='text' placeholder='Your email' value={email} label='Email' onChange={setEmail} />
        <Input type='password' placeholder='Your password' value={password} label='Password' onChange={setPassword} />
        <Input type='password' placeholder='Confirm Your Password' value={confirmPassword} label='ConfirmPassword' onChange={setConfirmPassword} />
        {/* @ts-expect-error */}
        <button className='signInBtn' onClick={() => dispatch(CREATE_USER({name, email, password, confirmPassword}))}>Sign In</button>
      </StyledForm>
    </PageTemplate>
  )
}

export default SignIn