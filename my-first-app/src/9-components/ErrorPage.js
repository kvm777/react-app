import React from 'react'
import {useNavigate} from "react-router-dom";

const Error = () => {
    const navigator = useNavigate();
  return (
    <div>
        <h1>404 NOT FOUND</h1>
        <button onClick={() => navigator("/")} >Back to Home</button>
    </div>
  )
}

export default Error