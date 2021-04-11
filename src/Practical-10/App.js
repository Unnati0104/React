import React, {Component} from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App() {
    return (
      <div className = "App">
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>  
      </div>
    );
  }
  
  export default App;