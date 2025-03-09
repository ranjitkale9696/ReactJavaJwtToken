import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';


const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getAllUsers(token);
      setUsers(response.ourUsersList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      const token = localStorage.getItem('token');
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center  py-6">
      <div className="w-full max-w-4xl bg-white text-black shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Users Management Page</h2>
        <div className="mb-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            <Link to="/register">Add User</Link>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">ID</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">Name</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">Email</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                  <td className="py-2 px-4 border-b border-gray-200 space-x-2">
                    <button 
                      className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300" 
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    <button className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 transition duration-300">
                      <Link to={`/update-user/${user.id}`}>Update</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
