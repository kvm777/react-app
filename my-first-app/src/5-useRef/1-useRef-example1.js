import React, { useEffect, useRef, useState } from 'react'

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);
  //useRef is used to count that how many times the items are rendered... 
  //if we use  useState for the renderCount... the useState is also renders that causes the infinite loop runs...
  //instead of these we are using useRef..
  //useRef is also used for the DOM elements...
  useEffect(() => {
    renderCount.current = renderCount.current+1;
  })

  return (
    <div>
      <input type='text' 
      name='name' 
      id='name'
      onChange={(e) =>{
        setFirstName(e.target.value)
      }} />

      <h3>typing: {firstName}</h3>
      <h3>renderCount: {renderCount.current} times</h3>
    </div> 
  )
}

export default Index