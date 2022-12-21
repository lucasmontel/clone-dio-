import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";


function app (){
  return(
    <Router>
      <Routes>
      <Route path="/" element = {<Home></Home> }></Route>
      <Route path="/login" element = { <Login></Login> }></Route>
      </Routes>
    </Router>
  )
}

export default app;

//oi