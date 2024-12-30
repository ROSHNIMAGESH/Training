import React, { useState } from 'react'

const Contact = () => {
  var [counter,setcount]=useState(0);
  function decrement(){
    if(counter>0){
      setcount(counter-1);
    }
  }
  return (
    <div>
        <h1>This is Contact page</h1>
        <h1>Add no.of items : {counter}</h1>
        <button onMouseOver={()=>setcount(counter+1)}>increase</button>
        <button onDoubleClick={decrement}>decrease</button>
        <button onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

export default Contact
//useState