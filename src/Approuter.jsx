import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./New";
import Homepage from "./Homepage";
import axios from "axios";
import About from "./About";
import Addstudent from "./Addstudent"
import Editstudent from "./Editstudent";
import Viewstudent from "./Viewstudent";
import Addroom from "./Addroom";
import Viewroom from "./Viewroom";
import Editroom from "./Editroom";
// import LoginComponent from "./LoginComponent";
// import RegisterComponent from "./RegisterComponent";
// import AuthService from "./AuthService";

function Approuter() {
  return (
    
        <Router>
          <Homepage/>
            <Routes>
            <Route path="/" element={<New/>} />

             <Route path="/home" element={<About/>} />
            <Route path="/add" element={<Addstudent/>} />
            <Route path="/edit/:id" element={<Editstudent/>} />
            <Route path="/view" element={<Viewstudent/>} />
            <Route path="/addroom" element={<Addroom/>} />
            <Route path="/viewroom" element={<Viewroom/>} />
            <Route path="/editroom/:id" element={<Editroom/>} /> 

           
             {/* <Route path="/login" element={<LoginComponent/>} />
            <Route path="/register" element={<RegisterComponent/>} />
            <Route path="/authservice" element={<AuthService/>} />   */}



            </Routes>
        </Router>
      
   
      
  )
}

export default Approuter
