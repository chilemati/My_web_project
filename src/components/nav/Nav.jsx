import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { level, user } from '../global/user';
import '../styles/styles.scss';

const Nav = () => {
  let [loggedIn, setLoggedin] = useRecoilState(user);
    let  [subAdmin, setSubadmin ] = useRecoilState(level);
    let redirecting = useNavigate();

    useEffect(() => {
        
        if (!loggedIn) {
            redirecting('/api/protected');
        }
        
        
    }, [loggedIn, subAdmin]);
    
    function handleSignout() {
        axios.get('http://localhost:4000/api/protected/signout')
            .then(res => {
                setLoggedin(res.data.user);
                setSubadmin('');
                // console.log('Your signed out!');
                redirecting('/api/protected');

            })
            .catch(err => {
                console.log(err.message);
        })
      }

    function getUsers() {

    }
    

    return (
        <div className='nav'>
            <div className="logo"><Link to={'/api/protected'}>Logo</Link></div>
            <div className="about"><Link to={'/api/protected/blogs'}>Blogs</Link></div>
            <div className="about"><Link to={'/api/protected/about'}>About</Link></div>
            {loggedIn && (loggedIn.userLevel !== 'suspended') &&(subAdmin === 'sub-admin' || subAdmin === 'admin') && <div>
                <div className="create"><Link to={'/api/protected/create'}>Create-Blog</Link></div>
                <div className="view-blogs"><Link to={'/api/protected/view-blogs'}>View-Blogs</Link></div>
                {subAdmin === 'admin' && <div className="all-users"><Link to={'/api/protected/users'} onClick={() => getUsers()} >All-Users</Link></div>}
            </div>}
            {loggedIn && (loggedIn.userLevel !== 'suspended') && <div>
                <div className="id"><h6>Welcome, {loggedIn.email} </h6></div>
                <div className="level">Level: {loggedIn.userLevel} </div>
                <div className="dashboard"><Link to={'/api/protected/dashboard'}>Dashboard</Link></div>
                <div className="sign-out"><Link to={'#'} onClick={()=> handleSignout()}>Sign-Out</Link></div>
            </div>}
            {loggedIn && (loggedIn.userLevel == 'suspended') && <div>
                <span>Sorry, Your Account has been suspended by Adim!</span>
                <div className="sign-out"><Link to={'#'} onClick={()=> handleSignout()}>Sign-Out</Link></div>
                </div>
                }
            {!loggedIn && <div> 
                <div className="sign-in"> <Link to={'/api/protected/login'}>Sign-In</Link> </div>
                <div className="sign-up"> <Link to={'/api/protected/signup'}>Sign-Up</Link> </div>

            </div>
            }
          
    </div>
  )
}

export default Nav