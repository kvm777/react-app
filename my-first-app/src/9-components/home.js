import React from 'react'
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigator = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigator("/submit")}>Submit Form</button>
    </div>
  )
}

export default Home