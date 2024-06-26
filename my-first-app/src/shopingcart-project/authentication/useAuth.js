import React, { useState } from 'react'
import Shop from '../pages/shop/shop'
import SignIn from './signin'

const useAuth = () => {

    const [currentUser, setCurrentUSer] = useState(null)

  return (
    <>
    {
        currentUser? <SignIn /> : <Shop />
    }
    </>
  )
}

export default useAuth