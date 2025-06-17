import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4 sm:mb-6 lg:mb-8 bg-white shadow-md z-50 p-4 sm:p-6 lg:p-8">
      <div className="flex items-center space-x-4">
        <p className="text-sm font-medium text-gray-700">Shubham Singh</p>
        <p className="text-xs text-gray-500">Shubham Singh's Dashboard</p>
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold text-base sm:text-lg">S</div>
    </header>
  );
};

export default Header; 