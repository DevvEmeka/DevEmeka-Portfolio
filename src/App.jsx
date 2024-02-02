import React from "react"
import { Route, Routes } from "react-router-dom";
import LeftStyledComponent from "./components/LeftStyledComponent";
// import NavBar from "./components/NavBar"
import RightStyledComponent from "./components/RightStyledComponent";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";   
import Project from "./pages/Project";

//root component
function App() {
  return (
    <>      
    <LeftStyledComponent /> 
    {/* <NavBar /> */}
    <RightStyledComponent />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </>
  );
}

export default App;