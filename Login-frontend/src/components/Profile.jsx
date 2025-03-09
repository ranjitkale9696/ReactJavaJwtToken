import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };
  return (
    <div className="flex justify-center items-center min-h-screen ">
    <div className="bg-white text-black shadow-md rounded-lg p-8 max-w-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <p className="mb-2"><span className="font-medium">Name:</span> {profileInfo.name}</p>
      <p className="mb-2"><span className="font-medium">Email:</span> {profileInfo.email}</p>
      <p className="mb-4"><span className="font-medium">City:</span> {profileInfo.city}</p>
      {profileInfo.role === "ADMIN" && (
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          <Link to={`/update-user/${profileInfo.id}`}>Update This Profile</Link>
        </button>
      )}
    </div>
  </div>
  )
}

export default Profile
