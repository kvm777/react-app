import React, { useEffect, useRef, useState } from 'react'

//useRef is used to operate the DOM eleaments
const Index = () => {
  const [firstName, setFirstName] = useState("");
  const inputDom = useRef("")

  useEffect(() => {
    console.log(inputDom)
    //don't involve the dom elements to the state elements
    // inputDom.current.value = "Data";
  })
  
  //this would gives the the focus on input tag refered below 
  const focus = () => {
    inputDom.current.focus()
  }

  

  return (
    <div>
      <input 
      ref={inputDom}
      type='text' 
      name='name' 
      id='name'
      onChange={(e) =>{
        setFirstName(e.target.value)}
      } />

      <h3>typing: {firstName}</h3>
      <button onClick={focus}>Focus</button>
      
    </div> 
  )
}

export default Index