import React from 'react'
import {  Menu, X } from "lucide-react";
import { useState } from "react";
// import Logo from "../logo.png";
import { NavLink } from 'react-router-dom'


const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleHeader = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        {/* <nav className="sticky top-0 z-50 py-3  border-b bg-gradient-to-r from-blue-500 to-blue-800 border-neutral-700/80"> */}
 

      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={Logo} alt="Logo" /> */}
            <span className="text-xl tracking-tight">Learning Managment System</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
          <li className="py-4">
                {/* <a href="">Home</a> */}
                <NavLink className="nav-link active" to={'/'}>Home</NavLink>
              </li>
              <li className="py-4">
                {/* <a href="">Course</a> */}
              </li>
              <li className="py-4">
                <NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink>
                {/* <a href="">Contact us</a> */}
              </li>
              <li className="py-4">
                <a href="">About</a>
              </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleHeader} aria-label="Toggle menu">
              {mobileDrawerOpen ? <X aria-label="Close menu" /> : <Menu aria-label="Open menu" />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
            <li className="py-4">
            <NavLink className="nav-link active" to={'/'}>Home</NavLink>
              </li>
              <li className="py-4">
                <a href="">Course</a>
              </li>
              <li className="py-4">
              <NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink>
              </li>
              <li className="py-4">
                <a href="">About</a>
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  
  );
};

export default Header;
