import React, { useState } from 'react'

//custom hooks are used for multiple reusablity of code of standard hooks..

const useCounter = (initialValue = 0) => {
  const [count,setCount] = useState(initialValue);

  const Increment = () => {
    setCount(count + 1)
  }
  const Decrement = () => {
    setCount(count - 1)
  }
  const Reset = () => {
    setCount(initialValue)
  }
  return [count, Increment, Decrement, Reset]
}

//here we are return the array from the function to the counter by customHook
export default useCounter