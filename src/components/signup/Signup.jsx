import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { level, user } from '../global/user';

const Signup = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [loggedIn, setLoggedin] = useRecoilState(user);
  let [tier, setTier] = useRecoilState(level);
  let redirecting = useNavigate();
  function handleSubmit(e) {
    e.preventDefault(e);
    axios.post('http://localhost:4000/api/protected/signup', {email,password})
      .then(res => {
        setLoggedin(res.data.user);
        setTier(res.data.user.userLevel);
        console.log(res.data);
        redirecting('/api/protected/blogs');
      
      })
      .catch(err => {
        console.log(err.message);
    })

  }
  return (
    <div className='signin'>
      <form onSubmit={(e)=> handleSubmit(e) }>
        <h1> Sign Up </h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder='example@gmail.com'
          autoComplete='current-password'
          onChange={(e)=> setEmail(e.target.value)}
        />
        <div className='email error'></div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder='Use a very strong password you can always remember'
          autoComplete='current-password'
          onChange={(e)=> setPassword(e.target.value)}
        />
        <div className="error password"></div>
        <div className="btn">
          <button>Create Account</button>
        </div>
       </form>
    </div>
  )
}

export default Signup