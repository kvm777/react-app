import React from 'react'
import { NavLink} from "react-router-dom"

const NavBar = () => {
    const NavLinkStyle = ({isActive}) => {
        // console.log(obj);
        return{
            textDecoration : isActive ? "none" : "underline",
            fontWeight : isActive ? "bold" : "normal",
        }
    }

  return (
    <div>
        <nav className='primary'>
            <NavLink style={NavLinkStyle} to={"/"}>Home</NavLink>
            <NavLink style={NavLinkStyle} to={"/about"}>About</NavLink>
            <NavLink style={NavLinkStyle} to={"/careers"}>Careers</NavLink>
            <NavLink style={NavLinkStyle} to={"/projects"}>projects</NavLink>
            <NavLink style={NavLinkStyle} to={"/users"}>Users</NavLink>
        </nav>
    </div>
  )
}

export default NavBar