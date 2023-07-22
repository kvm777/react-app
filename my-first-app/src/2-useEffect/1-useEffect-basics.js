import React, {useEffect, useState} from 'react'

const Index = () => {
    const [count, setCount ] = useState(0);
    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    // useEffect is used to may wxcicutes when there is anychange in doccument.
    
    useEffect(() =>{
        const ResizeHandler = () =>{
            setPageWidth(window.innerWidth)
        }
        window.addEventListener("resize", ResizeHandler )
        console.log("the count is increased", count)

        // the return statement is used to remove eventListener which added useEffect... it may helps to don`t create multiple simiar things.
        return () =>{
            window.removeEventListener("resize", ResizeHandler)
        }
    },[count] )

  return (
    <div>
        <h1>useEffect Basics</h1>
        <h1>{pageWidth}</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)} >+</button>
    </div>
  )
}

export default Index;