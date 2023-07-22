import React from 'react'
import {useNavigate} from "react-router-dom";

const SubmitPage = () => {
    const navigator = useNavigate();
  return (
    <div>
        <h2>Submitted Sucessfully</h2>
        <button onClick={() => navigator("/")} >Back to Home</button>
    </div>
  )
}

export default SubmitPage