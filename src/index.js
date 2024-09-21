import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
const root= ReactDOM.createRoot(document.getElementById("root"))
function Counter(){

  //styles
  var heading={
   
    
    textAlign:"center"
    
  }
  var container={
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
    

  }


  var[number,changeName]= useState(0)
  function increment(){
      changeName(number+1)
  }
  function decrement(){
    changeName(number-1)
}

  return(<div>
    <div style={container} className='Container'><h1 style={heading} >{number} </h1>
  <button onClick={increment} className='increment'>Increment</button>
  <button onClick={decrement} className='decrement'>Decrement</button></div></div>)
}
root.render(<Counter></Counter>)

