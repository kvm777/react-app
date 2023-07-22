import React, { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/users";


const Index = () => {
  const [userData, setUserData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [isError, setISError] = useState({ status:false, msg:""})

  const fetchUSerData = async (apiURL) => {
    setLoading(true)
    setISError({ status:false, msg:""})
    try {
      const resonce = await fetch(apiURL);
      const data = await resonce.json();
      setUserData(data)
      setLoading(false)
      setISError({ status:false, msg:""})
      if(resonce.status === 404){
        throw new Error("Data Not Found")
      }
    } catch (error) {
      setLoading(false)
      setISError({status:true, msg: error.message || "somthing went wrong, pls try again"})
    }
    
  }
  
  useEffect(() => {
    fetchUSerData(URL)
  },[])

  //optional shining.... format 
  if(isError?.status){
    return <h1 style={{color:"red"}}>{isError?.msg}</h1>
  }

  if(loading){
    return <h3>Loading....</h3>
  }

  return (
    
    <div>
      <h1>useEffect Example-1</h1>
      <ul>
        {
          userData.map(eachUser => {
            const {id, name,email} =eachUser;
            return <li key={id}>
              <div>{name}</div>
              <div>{email}</div>

            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Index