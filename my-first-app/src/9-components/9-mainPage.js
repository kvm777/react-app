import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Careers from "./pages/careers";
import SubmitPage from "./submitPage";
import Projects from "./pages/projects";
import FeaturedProjects from "./pages/featuredProjects";
import NewProjects from "./pages/newProjects";
import {Routes, Route} from "react-router-dom"
import NavBar from "./navBar";
import Error from "./ErrorPage";
import Users from "./users";
import UserDetails from "./userDetails";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./9-components/Auth";
import './9-mainpage.css';

// import Index from "./3-useContext/1-useContext-basic";

function BasicPage(){ 
  return <Router>
    <div className="container"> 
    <NavBar />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}  />
      <Route path="/careers" element={<Careers />} />
      <Route path="/submit" element={<SubmitPage />} />

      {/* ------ Nested Routes ----- */}
      <Route path="/projects" element={<Projects />}>
        {/* ---the index route is used for showing default page--- */}
        <Route index element={<FeaturedProjects />}  />
        <Route path="featuredProjects" element={<FeaturedProjects />} />
        <Route path="newProjects" element={<NewProjects />} />
      </Route>

      <Route path="/users" element={<Users />} />

      {/* ---route Defaining for Dynamic Routes--
          path defaining is important... */}
      <Route path="/users/:userId" element={<UserDetails />} />

      <Route path="*" element={<Error />} />
    </Routes>
  </div>
  </Router>
}
 

export default BasicPage;
