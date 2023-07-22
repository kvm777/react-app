import React from 'react'
import UsersData from './usersData';
import {useNavigate, useParams} from "react-router-dom"
//importing useParams to show the userDetails by dynamic routing from users page...

const UserDetails = () => {
  const navigator = useNavigate();

    const params = useParams()
    console.log(useParams())
    // console.log(params) 
    const {userId} = params;

    const userDetailsData = UsersData.find((eachUser) => 
        eachUser.id == userId);

    // console.log(userDetailsData)

  return (
    <div>
        <h1>User Details</h1>
        <h3>{userDetailsData.name}</h3>
        <h3>{userDetailsData.email}</h3>
        <h3>{userDetailsData.username}</h3>
        <p>{userDetailsData.phone}</p>

        <button onClick={() => navigator("/users")}>Back to users</button>
    </div>
  )
}

export default UserDetails