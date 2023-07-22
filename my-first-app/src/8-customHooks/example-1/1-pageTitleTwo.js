import React, { useState } from 'react'
import usePageTitle from './1-pageTitle'

const Index2 = () => {
    const [count, setCount] = useState(0)

    usePageTitle(count) 
  return (
    <div>
        <button onClick={() => setCount(count+1)}>count - {count}</button>
    </div>
  )
}

export default Index2;