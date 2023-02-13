import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pin from '../pin/Pin';
import '../styles/styles.scss';

const Users = () => {
    let [users, setUsers] = useState(null);
    let [toggle, setToggle] = useState(false);
    let [pin, setPin] = useState(false);
    let redirecting = useNavigate();
    let [verifiedPin, setVerifiedpin] = useState(false);
    let [todb, setTodb] = useState({});
    useEffect(() => {
        
        axios.get('http://localhost:4000/api/protected/allUsers')
            .then(res => {
                // console.log(res.data);
                setUsers(res.data);
                setVerifiedpin(false);
            })
            .catch(err => {
                console.log(err.message);
            })
        
        
    }, [verifiedPin]);

    


    function handleSubmit(e,index) {
        e.preventDefault(e);
        // console.log({ email:e.target.email.value, level:e.target.level.value });
        setTodb({
            email: e.target.email.value,
            level: e.target.level.value,
            remove: e.target.remove.value });        
        
    }

    function handleClick(e) {
        handleSubmit(e);
        setPin(true);
    }



  return (
          <div className="user-form">
              <h2>All Registared users </h2>
          {
             !pin && users && users.map((user,index) => {
                  return (
                      <div id='aUser' key={index}> 
                          <form onSubmit={(e,index) => handleClick(e)} >
                              <input
                                  type="text"
                                  name="email"
                                  value={user.email}
                                  className="email"
                                  onChange={(e)=> {}}
                              ></input>
                              <span>Current Level: {user.userLevel} </span>
                              <div className="delete">
                                  <label htmlFor="delete">Delete User?</label>
                                  <select
                                      name="remove"
                                      className='remove'
                                  >
                                      <option value="no">NO</option>
                                      <option value="suspend">Suspend</option>
                                      <option value="yes">Yes</option>
                                  </select>
                              </div>
                              <select
                                  name="level"
                                  className="level"
                                  
                              >
                                        <option value="normal">
                                            Normal
                                        </option>
                                        <option value="sub-admin">Sub-Admin
                                        </option>
                                        <option value="admin" disabled>
                                            Admin
                                        </option>
                              </select>
                              {<button  onClick={(e) => {}}>Verify Pin</button>}
                          </form>
                          
                      </div>
                  )
              })
          }
          {
              pin && <Pin setPin={setPin} setVerifiedpin={setVerifiedpin} trig={todb} />
          }

    </div>
  )
}

export default Users