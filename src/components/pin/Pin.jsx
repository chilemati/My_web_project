import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import '../styles/styles.scss';

const Pin = ({setPin, setVerifiedpin, trig}) => {
    let [email, setEmail] = useState('');
    let [userPin, setUserpin] = useState('')
    function handleSubmit(e) {
        e.preventDefault(e);
        // console.log({ email, userPin });
         axios.post('http://localhost:4000/api/protected/verifyUserPin', {email,userPin})
            .then(res => {
                // console.log(res.data.status);
                if (res.data.status === true) {
                  // setVerifiedpin(res.data.status);
                  handleLevelUpd(trig);
                  setPin(false);
                } else {
                  console.log(res.data.status);
                  
                }
              })
              .catch(err => {
                console.log(err.message);
              })
            }
            
  function handleLevelUpd(det) {
    console.log(det);
        axios.post('http://localhost:4000/api/protected/usersLevel',det)
          .then(res => {
            console.log(res.data);
            setVerifiedpin(res.data.status);
          })
          .catch(err => {
            console.log(err.message);
        })
      }

  
  
  return (
      <div id='pin-diag'>
           <form onSubmit={(e)=> handleSubmit(e) }>
        <h1> Pin Verification </h1>
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
          placeholder='Your 6 digit pin?'
          autoComplete='current-password'
          onChange={(e)=> setUserpin(e.target.value)}
        />
        <div className="error password"></div>
        <div className="btn">
          <button>Verify Pin</button>
                  <button onClick={(e) => { e.preventDefault(e); setPin(false) } }>Exit</button>
        </div>
       </form>
    </div>
  )
}

export default Pin