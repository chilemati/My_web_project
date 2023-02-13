import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { user } from '../global/user'

const Blogs = () => {
    let loggedIn = useRecoilValue(user);
  let redirecting = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      redirecting('/api/protected/login');
  
    }
    
  }, [loggedIn]);
  return (
    <div>Blogs</div>
  )
}

export default Blogs