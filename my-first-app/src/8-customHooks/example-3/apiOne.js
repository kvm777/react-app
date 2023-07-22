import React, { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/users";


//cutom Hook of useFetcher
const useFetcher = (fetchURL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIserror] = useState(false)
    const FetchAPI = async(apiURL) => {
        setLoading(true)
        setIserror(false)
        try {
            const response = await fetch(apiURL);
            const Data = await response.json()
            console.log(Data)
            setData(Data);
            setLoading(false)
            setIserror(false)
        } catch (error) {
            setLoading(false)
            setIserror(true)
        }
        
    }

    useEffect (() => {
        FetchAPI(fetchURL);
    },[])

    return [data, loading, isError]
}

const Index = () => {
    
    const [userData, loading, isError] = useFetcher(URL);

    if(isError){
        return <h3>Something Went Wrong...</h3>
    }

    if(loading){
        return <h2>Loading...</h2>
    }
    
  return (
    <div>
        <h2>USERS</h2>
        <ul>{userData.map(eachUser => {
            return <li key={eachUser.id}>
                <h4>{eachUser.name}</h4>
            </li>
        })}</ul>
    </div>
  )
}

export  {Index, useFetcher};