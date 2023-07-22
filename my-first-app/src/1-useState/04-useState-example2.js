import React, { useState } from 'react'

const Index = () => {
    const [name, setName] = useState("");
    const [email,setemail] = useState("");
    const [password, setPassword] = useState("");

    // const NameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const EmailChange = (e) => {
    //     setemail(e.target.value)
    // }
    // const passwordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    // const handleInputChange = (e, thing) => {
    //     if (thing === "name"){
    //         setName(e.target.value)
    //     }
    //     else if (thing === "email"){
    //         setemail(e.target.value)
    //     }
    //     else if (thing === "password"){
    //         setPassword(e.target.value)
    //     }
    // }
    
    //adding of data to array..
    let arr = [];
    const HandleSubmit =(e)=>{
        // e.preventDefault();
        let userObj = {
            name: name,
            email: email,
            password: password
        }
        arr.push(userObj)
        console.log(userObj)
        console.log(arr)
    }
    
  return (
    <div>
         <form onSubmit={HandleSubmit}>
            <input type='text' placeholder='Enter Name' name='firstname' value={name} 
            onChange={(e)=> setName(e.target.value)} ></input>
            <br />
            <input type='email' placeholder='Enter mailId' name='email' value={email}
            onChange={(e)=> setemail(e.target.value)} ></input>
            <br />
            <input type='password' placeholder='Enter password' name='password' value={password} 
            onChange={(e)=> setPassword(e.target.value)} ></input>
            <br />
            
            <button type='submit'>submit</button>
         </form>
    </div>
  )
}

export default Index