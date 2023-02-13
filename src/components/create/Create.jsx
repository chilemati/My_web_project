import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dragdrop from '../dnd/Dragdrop';
import './create.scss';

const Create = () => {
  let [tagCount, setTagcount] = useState(<h2>your title here</h2>);
  function tag(a) {
    setTagcount(a);
  }
  useEffect(() => {
    (() => {
      let elem = document.querySelector('.elem');
      let h1 = document.createElement('h1');
      h1.textContent = 'Inserted using js';
      elem.innerHTML = `
      <p> a paragraph </p>
      <h2> a heading 2 </h2>
      <div> 
       <h1> blog title </h1>
       <p> blog content </p>
       <h6> blog footer </h6>
      </div>
      <div> 
       <h1> news title </h1>
       <p> news content </p>
       <h6> news footer </h6>
      </div>
      `
      // console.log(elem);
      
    })();
    
  }, []);
  return (
    <div className='crate-blog'>
      <h1>Create A New Blog</h1>
      <div> {tagCount} </div>
      <button onClick={()=> tag(<h2>a new title</h2>)}>Create tag</button>
      <button onClick={() => tag('')}>clear tag</button>
      <div className="elem"></div>
      <Dragdrop />
       
    </div>
  )
}

export default Create