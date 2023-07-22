import React from 'react'
import { useFetcher } from './apiOne';

const URL = "https://jsonplaceholder.typicode.com/posts";

const Index2 = () => {
    const [postsData, loading, isError] = useFetcher(URL);

    if(isError){
        return <h3>Something Went Wrong...</h3>
    }

    if(loading){
        return <h2>Loading...</h2>
    }
    
  return (
    <div>
        <h2>POSTS</h2>
        <ul>{postsData.map(eachUser => {
            return <li key={eachUser.id}>
                <h4>{eachUser.title}</h4>
            </li>
        })}</ul>
    </div>
  )
}

export default Index2