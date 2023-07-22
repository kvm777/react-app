import React, {useState} from 'react'

//higherOrder components are used to implement the same components with same code...
//here we are passing props to original component..we have to give the props by spread operator..

const EnhancedCounter = (OriginalComponent) => {
    const NewComponent = (props) => {
        const [count, setCount] = useState(0);

        const Increment = () => {
        setCount(count+1)
        }
    return (
        <OriginalComponent count={count} increment={Increment} {...props}/>
    );
    }
    return NewComponent;
}

export default EnhancedCounter;