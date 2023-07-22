import React, { useContext } from 'react'
import { userContext } from './contexts/1-userContext'
import { MainDataContext } from './contexts/2-mainDataContext';

const SubChildClass = () => {
    const data = useContext(userContext);
    const mainData = useContext(MainDataContext);
    console.log(data);
    console.log(mainData)
    // const {firstName, lastName, mail} = data
  return (
    <div>
        <h3>SubChildClass</h3>
        <div>{data.firstName}</div>
        <div>{data.lastName}</div>
        <div>{data.mail}</div>

    </div>
  )
} 

export default SubChildClass