import React from 'react';


import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Home from '../components/Home';
import Contactus from '../components/Contactus';
const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact-us" element={<Contactus/>} />
    <Route path="/login" element={<Login/>} />
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
