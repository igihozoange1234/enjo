import React from 'react';
import { Route,Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-xl font-medium mb-6">My Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-medium mb-4">Active Users</h2>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 mr-2"></div>
            <p className="text-gray-700">John Doe</p>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 mr-2"></div>
            <p className="text-gray-700">Jane Doe</p>
          </div>
        </div>
      
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-medium mb-4">Revenue</h2>
          <p className="text-2xl font-bold">$5,000</p>
        </div>
      </div>
      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg">Create Post</button>
    </div>
  );
}

export default Dashboard;