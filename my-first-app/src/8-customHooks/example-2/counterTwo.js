import React from 'react'
import useCounter from './useCounter'

const Index2 = () => {
    // console.log(useCounter())
    const [count, Increment, Decrement, Reset] = useCounter()
  return (
    <div>
        <h1>Count = {count}</h1>
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    </div>
  )
}

export default Index2