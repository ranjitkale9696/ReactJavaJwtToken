// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import UserService from '../service/UserService';

// function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(UserService.isAuthenticated());
//   const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Update the state whenever the component mounts or user state changes
//     const updateAuthStatus = () => {
//       setIsAuthenticated(UserService.isAuthenticated());
//       setIsAdmin(UserService.isAdmin());
//     };

//     updateAuthStatus();

//     // Listen for changes in localStorage to update authentication status
//     const handleStorageChange = () => {
//       updateAuthStatus();
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     const confirmDelete = window.confirm('Are you sure you want to logout this user?');
//     if (confirmDelete) {
//       UserService.logout();
//       setIsAuthenticated(false);
//       setIsAdmin(false);
//       navigate('/login');
//     }
//   };

//   return (
//     <nav>
//       <ul>
//         {!isAuthenticated && <li><Link to="/">Phegon Dev</Link></li>}
//         {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
//         {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
//         {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import UserService from '../service/UserService';

function Navbar() {
    // const isAuthenticated = UserService.isAuthenticated();
    // const isAdmin = UserService.isAdmin();

    const [isAuthenticated, setIsAuthenticated] = useState(UserService.isAuthenticated());
    const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());

    const navigate = useNavigate();
    useEffect(() => {
        // Update the state whenever the component mounts or user state changes
        setIsAuthenticated(UserService.isAuthenticated());
        setIsAdmin(UserService.isAdmin());
       
    }, [isAuthenticated, isAdmin]);

    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            UserService.logout();
            setIsAuthenticated(false);
            setIsAdmin(false);
            
            navigate('/login')
            window.location.reload(); // This will refresh the page
        }
    };


    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Phegon Dev</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    );
}

export default Navbar;
