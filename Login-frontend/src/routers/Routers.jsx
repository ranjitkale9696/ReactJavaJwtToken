import React from 'react';


import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Home from '../components/Home';
import Contactus from '../components/Contactus';
import RegistrationPage from '../components/RegistrationPage';
import UserService from '../service/UserService';
import Profile from '../components/Profile';
import UpdateUser from '../components/UpdateUser ';
import UserManagement from '../components/UserManagement';
const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact-us" element={<Contactus/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<RegistrationPage/>} />
    <Route path="/profile" element={<Profile />} />

    //  {/* Check if user is authenticated and admin before rendering admin-only routes */}
     {UserService.adminOnly() && (
              <>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/admin/user-management" element={<UserManagement />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>
            )}
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
