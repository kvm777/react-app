 import React from 'react'
 import UsersData from './usersData';
import { Link } from 'react-router-dom';

 const Users = () => {
   return (
     <div>
        <h1>Users</h1>

        <div className='user-container'>
        {UsersData.map(eachUser => {
            const {name,id,email} = eachUser;
            return <Link to={`/users/${id}`} key={id}>
                <article className='card'>
                    <h4>{name}</h4>
                    <h5>{email}</h5>
                </article>
                
            </Link>
        })  }
        </div>

     </div>
   )
 }
 
 export default Users