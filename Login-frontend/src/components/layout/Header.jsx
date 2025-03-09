import React, { useEffect, useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleHeader = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(UserService.isAuthenticated());
    setIsAdmin(UserService.isAdmin());
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleLogout = () => {
    const confirmDelete = window.confirm('Are you sure you want to logout this user?');
    if (confirmDelete) {
      UserService.logout();
      setIsAuthenticated(false);
      setIsAdmin(false);
      navigate('/');
      window.location.reload(); // This will refresh the page
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">Learning Management System</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/'}>Home</NavLink></li>}
            {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink></li>}
            {isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/profile'}>Profile</NavLink></li>}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/login'}>Sign In</NavLink>}
            {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/register'}>Create an account</NavLink>}
            {isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/'} onClick={handleLogout}>Logout</NavLink>}
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
              {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/'}>Home</NavLink></li>}
              {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink></li>}
              {isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/profile'}>Profile</NavLink></li>}
            </ul>
            <div className="flex space-x-6">
              {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/login'}>Sign In</NavLink>}
              {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/register'}>Create an account</NavLink>}
              {isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/'} onClick={handleLogout}>Logout</NavLink>}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;


// import React, { useEffect } from 'react'
// import {  Menu, X } from "lucide-react";
// import { useState } from "react";
// // import Logo from"../assets/Logo.png";

// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import UserService from '../../service/UserService';


// const Header = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleHeader = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };


//   const [isAuthenticated, setIsAuthenticated] = useState(UserService.isAuthenticated());
//     const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());

//     const navigate = useNavigate();
//     useEffect(() => {
//         // Update the state whenever the component mounts or user state changes
//         setIsAuthenticated(UserService.isAuthenticated());
//         setIsAdmin(UserService.isAdmin());
       
//     }, [isAuthenticated, isAdmin]);


//     const handleLogout = () => {
//       const confirmDelete = window.confirm('Are you sure you want to logout this user?');
//       if (confirmDelete) {
//           UserService.logout();
//           setIsAuthenticated(false);
//           setIsAdmin(false);
          
//           navigate('/')
//           window.location.reload(); // This will refresh the page
//       }
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//         {/* <nav className="sticky top-0 z-50 py-3  border-b bg-gradient-to-r from-blue-500 to-blue-800 border-neutral-700/80"> */}
 

//       <div className="container px-4 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0">
//             {/* <img className="h-10 w-10 mr-2" src={Logo} alt="Logo" /> */}
//             <span className="text-xl tracking-tight">Learning Managment System</span>
//           </div>
//           <ul className="hidden lg:flex ml-14 space-x-12">
//                 {/* {!isAuthenticated && <li className="py-4"> <Link className="nav-link active" to={'/'}>Home</Link>  </li>} */}
//                 {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/'}>Home</NavLink></li>}
             
//                 {/* <NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink> */}
//                 {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink></li>}
                 

//                 {isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/profile'}>Profile</NavLink></li>}

//                 {/* {isAdmin && <li className="py-4"><NavLink className="nav-link active" to={'/admin/user-management'}></NavLink> */}


//                 {/* {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
//                 {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
//                 {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>} */}
                
             
//           </ul>
//           <div className="hidden lg:flex justify-center space-x-12 items-center">
           
//            {/* <NavLink className="nav-link active py-2 px-3 border rounded-md" to={'/login'}>Sign In</NavLink> */}
//            {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/login'}>Sign In</NavLink>}
//            {/* <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/register'}>Create an account</NavLink> */}
//            {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/register'}>Create an account</NavLink>}


//            {/* LOGOUT */}
//            {/* {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}  */}
//            {isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/'} onClick={handleLogout}>Logout</NavLink>}


//           </div>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleHeader} aria-label="Toggle menu">
//               {mobileDrawerOpen ? <X aria-label="Close menu" /> : <Menu aria-label="Open menu" />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//             {/* <li className="py-4">
//             <NavLink className="nav-link active" to={'/'}>Home</NavLink>
//               </li> */}
//               {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/'}>Home</NavLink></li>}
//               {/* <li className="py-4">
//                 <a href="">Course</a>
//               </li> */}
//               {/* <li className="py-4">
//               <NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink>
//               </li> */}

//                 {!isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/contact-us'}>Contact-us</NavLink></li>}
                 

//                  {isAuthenticated && <li className="py-4"><NavLink className="nav-link active" to={'/profile'}>Profile</NavLink></li>}
//               {/* <li className="py-4">
//                 <a href="">About</a>
//               </li> */}
//             </ul>
//             <div className="flex space-x-6">
             
//               {/* <NavLink className="nav-link active py-2 px-3 border rounded-md" to={'/login'}>Sign In</NavLink>
              
//               <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/register'}>Create an account</NavLink> */}
               
//            {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/login'}>Sign In</NavLink>}
           
//            {!isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/register'}>Create an account</NavLink>}


//            {/* LOGOUT */}
           
//            {isAuthenticated && <NavLink className="nav-link active py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" to={'/'} onClick={handleLogout}>Logout</NavLink>}

//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
  
//   );
// };

// export default Header;
