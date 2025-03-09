import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../service/UserService';


const UpdateUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
    city: ''
  });

  useEffect(() => {
    fetchUserDataById(userId);
  }, [userId]);

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token);
      const { name, email, role, city } = response.ourUsers;
      setUserData({ name, email, role, city });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmDelete = window.confirm('Are you sure you want to update this user?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res);
        navigate("/admin/user-management");
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={userData.name} 
              onChange={handleInputChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={userData.email} 
              onChange={handleInputChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
            <input 
              type="text" 
              name="role" 
              value={userData.role} 
              onChange={handleInputChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
            <input 
              type="text" 
              name="city" 
              value={userData.city} 
              onChange={handleInputChange} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
