import React, { useCallback, useState } from 'react'
import Title from "./0-Title"
import Count from "./0-Count"
import Button from "./0-Button"


// const Title = () => {
//     console.log("title rendered");
//     return <h2>useCallback and React.memo</h2>
// }

// const Count = ({text, number}) => {
//     console.log(`${text} Rendered`);
//     return <h3>{text} : {number}</h3>
// }

// const Button = ({children, clickHandler}) => {
//     console.log(`${children} Rendered`);
//     return <button onClick={clickHandler}>{children}</button>
// }

const Index = () => {
    const [age, setAge] = useState(1);
    const [salary, setSalary] = useState(1000);

    //useCallback is used to control and run the function when the depem=ndecies are rendered
    const ageIncrement = useCallback(() =>{
      setAge(age+1)
  }, [age]) 

    const salaryIncrement = useCallback(() =>{
      setSalary(salary+1000)
  }, [salary]) 

  return (
    <>
    <Title />
    <Count text={"age"} number={age} />
    <Button children={"increment Age"} clickHandler={ageIncrement} />
    <Count text={"salary"} number={salary} />
    <Button children={"increment salary"} clickHandler={salaryIncrement} />
    </>
  )
}

export default Index