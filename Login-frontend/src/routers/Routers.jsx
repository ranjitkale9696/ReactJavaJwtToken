import React from 'react';


import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/contact-us" element={<Login />} />
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
