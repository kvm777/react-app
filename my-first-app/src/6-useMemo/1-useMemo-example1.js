import React, { useMemo, useState } from 'react'

const Index = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //useMemo function uses to run the specified functions to increase the performance
  //slope useMemo runs with dependecies rendering
  const doubleNumber = useMemo(() => {
    return SlowFunction(number)
  }, [number]);

  const themeChange = {
    color: dark? "white":"black",
    backgroundColor: dark? "black" : "white"
  }
  
  return (
    <div>
      <input 
      type='number'
      name='number'
      id='number'
      value={number}
      onChange={(e) => {setNumber(Number(e.target.value))}}/>
      <br /> <br />
      <button onClick={() => setDark(!dark)}>Change Theme</button>

      <h3 style={themeChange}>The Value is ${doubleNumber}</h3>
    </div>
  )
}

//the function to double the number 
const SlowFunction = (number) =>{
  for (let index = 0; index < 100000000; index++) {}
  console.log("slow function is running...")
  return number*2
}

export default Index