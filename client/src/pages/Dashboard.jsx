import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';

const Dashboard = () => {
//   const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow">
            <div className="px-4 py-3 flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
              <div className="flex items-center space-x-4">
                {/* <span className="text-gray-600">Welcome, {user?.name}</span> */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stats Cards */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
                <p className="text-3xl font-bold text-gray-900">$24,500</p>
                <p className="text-green-500 text-sm">+12% from last month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                <p className="text-3xl font-bold text-gray-900">156</p>
                <p className="text-green-500 text-sm">+8% from last month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-500 text-sm font-medium">Total Customers</h3>
                <p className="text-3xl font-bold text-gray-900">2,345</p>
                <p className="text-green-500 text-sm">+5% from last month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-500 text-sm font-medium">Average Order Value</h3>
                <p className="text-3xl font-bold text-gray-900">$157</p>
                <p className="text-red-500 text-sm">-2% from last month</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">New order #1234</p>
                      <p className="text-sm text-gray-500">John Doe - $250</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">New customer registered</p>
                      <p className="text-sm text-gray-500">Jane Smith</p>
                    </div>
                    <span className="text-sm text-gray-500">4 hours ago</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">Payment received</p>
                      <p className="text-sm text-gray-500">Order #1233 - $180</p>
                    </div>
                    <span className="text-sm text-gray-500">6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 