import React, { useState } from 'react'
import PageTemplate from 'src/components/PageTemlate'
import './style.css'
import Input from '../Input'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageTemplate title='Sign In'>
      <form className='form'>
        <Input type='text' placeholder='Your email' value={email} label='Email' onChange={setEmail}/>
        <Input type='text' placeholder='Your password' value={password} label='Password' onChange={setPassword}/>
        <button className='signInBtn'>Sign In</button>
      </form>
    </PageTemplate>
  )
}

export default SignIn