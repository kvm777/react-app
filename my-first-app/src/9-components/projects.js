import React from 'react'
import { NavLink } from 'react-router-dom'
import {Outlet} from "react-router-dom"
//importing Outlet component for displaying nested Route

const Projects = () => {
  return (
    <div>
        <h1>Projects Page</h1>
        <nav>
            <NavLink to={"/projects/featuredProjects"}>Featuered Projects</NavLink>
            <NavLink to={"/projects/newProjects"} >New Projects</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default Projects