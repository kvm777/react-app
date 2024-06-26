import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link  >Logout</Link>
        <Link className='link' to={"/"} >Shop</Link>
        <Link className='link' to={"/cart"} >cart</Link>
        
    </div>
  )
}

export default NavBar;
