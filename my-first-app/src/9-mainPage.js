import React from "react";
import Home from "./9-components/home";
import About from "./9-components/about";
import Careers from "./9-components/careers";
import SubmitPage from "./9-components/submitPage";
import Projects from "./9-components/projects";
import FeaturedProjects from "./9-components/featuredProjects";
import NewProjects from "./9-components/newProjects";
import {Routes, Route} from "react-router-dom"
import NavBar from "./9-components/navBar";
import Error from "./9-components/ErrorPage";
import Users from "./9-components/users";
import UserDetails from "./9-components/userDetails";
// import { AuthProvider } from "./9-components/Auth";
import './9-mainPage.css';

// import Index from "./3-useContext/1-useContext-basic";

function App(){ 
  return <>
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
  </>
}
 

export default App;
