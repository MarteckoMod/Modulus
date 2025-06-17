import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white shadow-md flex flex-col p-4 lg:p-0 transition-all duration-300 relative`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-md border border-gray-200 hidden lg:block"
      >
        <svg 
          className={`w-4 h-4 transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="p-4 border-b flex items-center justify-between lg:justify-start">
        <h1 className={`text-2xl font-bold text-gray-800 tracking-wider ${isCollapsed ? 'hidden' : 'block'}`}>
          MARTECKO <span className="text-purple-600">°</span>
        </h1>
        <button className="lg:hidden text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2 hidden lg:block">
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>My Dashboard</span>
        </a>
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>
            My Workspaces 
            <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">NEW</span>
          </span>
        </a>
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5H21L11 3v7.5H3L13 21v-7.5z" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>Boost</span>
        </a>
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>P&L Tracker</span>
        </a>
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.515-1.162 1.832-1.162 2.347 0l.523 1.173a1 1 0 00.999.563l1.235-.342c1.174-.325 2.21 1.054 1.636 2.118l-.636 1.137a1 1 0 00.317 1.241l1.247.781c1.178.738 1.178 2.302 0 3.04l-1.247.781a1 1 0 00-.317 1.24l.636 1.137c.574 1.064-.462 2.443-1.636 2.118l-1.235-.342a1 1 0 00-.999.563l-.523 1.173c-.515 1.162-1.832 1.162-2.347 0l-.523-1.173a1 1 0 00-.999-.563l-1.235.342c-1.174.325-2.21-1.054-1.636-2.118l.636-1.137a1 1 0 00-.317-1.241l-1.247-.781c-1.178-.738-1.178-2.302 0-3.04l1.247-.781a1 1 0 00.317-1.24l-.636-1.137c-.574-1.064.462-2.443 1.636-2.118l1.235.342a1 1 0 00.999-.563l.523-1.173z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>Control Panel</span>
        </a>
        <div className={`mt-auto pt-4 ${isCollapsed ? 'hidden' : 'block'}`}>
          <button className="w-full py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition duration-300">Connect</button>
        </div>
      </nav>

      <div className={`p-4 border-t flex flex-col space-y-2 hidden lg:block ${isCollapsed ? 'hidden' : 'block'}`}>
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0A9.953 9.953 0 0112 21c-3.142 0-6.072-1.243-8.243-3.414L.586 14.586m3.414-3.414L.586 10.414m2.828-2.828l3.536 3.536m0 0A9.953 9.953 0 0012 3c3.142 0 6.072 1.243 8.243 3.414l3.536 3.536m-2.828 2.828L23.414 9.586m-3.414 3.414l-3.536-3.536" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>Support</span>
        </a>
        <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9.202a6 6 0 01.97-.249M8 6h3m-3 6h6m-3 6h.01M16 12a6 6 0 01-9.763 3.472M12 3c-1.572 0-3 1-3 3s1.572 3 3 3 3-1 3-3-1.428-3-3-3z" />
          </svg>
          <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>Help</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar; 