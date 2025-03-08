import React from 'react';


import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Home from '../components/Home';
import Contactus from '../components/Contactus';
import RegistrationPage from '../components/RegistrationPage';
const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact-us" element={<Contactus/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<RegistrationPage/>} />
    </Routes>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contactus />} />
        </Routes>
    </Router> */}
    </>
  )
}

export default Routers
