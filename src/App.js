import React, {Component} from "react";
import About from "./Practical-10/About";
import Contact from "./Practical-10/Contact";
import Home from "./Practical-10/Home";
import Navbar from "./Practical-10/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from "./Practical-10/NotFound";
import './App.css';

function App() {
    return (
        <Router>
            <>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component = {Home}></Route>
                <Route path = "/about" component = {About}></Route>
                <Route path = "/contact" component = {Contact}></Route> 
                <Route component = {NotFound}></Route> 
            </Switch>
            </>
        </Router>
    );
  }
  
export default App;
