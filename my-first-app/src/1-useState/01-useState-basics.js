import React, {useState} from "react";

const Index = () => {
    let [count,setCount] = useState(0);
    // console.log(setCount)
    
    const Decrement = () => {
        setCount(count-1);
    }
    const Increment = () => {
        setCount(count+1);
    }
    //this is for increment for instant double or triple...
    // const Increment = () => {
    //     setCount((pCount) =>{
    //         return pCount+1;
    //     });
    //     setCount((pCount) => pCount+1);
    // };
    
    const SetToZero = () => {
        setCount(count = 0)
    }
    
    return <div className="container">
        <button onClick={Decrement} >-</button>
        <span>{count}</span>
        <button onClick={Increment}>+</button> <br />
        <button onClick={SetToZero}>Reset</button>
        
    </div>
}

export default Index;