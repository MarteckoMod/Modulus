import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/Header';

const ConnectAccount = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [connectedAccounts, setConnectedAccounts] = useState(['shopify', 'google-ads', 'meta-ads']);

  const integrations = [
    { id: 'shopify', name: 'Shopify', icon: '🛒', color: 'bg-green-100', connected: true },
    { id: 'amazon-seller', name: 'Amazon Seller Central', icon: '📦', color: 'bg-orange-100', connected: false },
    { id: 'blinkit-b2b', name: 'Blinkit B2B', icon: '⚡', color: 'bg-gray-100', connected: false },
    { id: 'google-ads', name: 'Google Ads', icon: '🎯', color: 'bg-blue-100', connected: true, subtitle: 'Already connected' },
    { id: 'amazon-ads', name: 'Amazon Ads', icon: '📊', color: 'bg-gray-100', connected: false },
    { id: 'swiggy-instamart', name: 'Swiggy Instamart', icon: '🍕', color: 'bg-orange-100', connected: false },
    { id: 'meta-ads', name: 'Meta Ads', icon: '📘', color: 'bg-blue-100', connected: true },
    { id: 'amazon-vendor', name: 'Amazon Vendor Central', icon: '🏪', color: 'bg-cyan-100', connected: false },
    { id: 'blinkit-marketplace', name: 'Blinkit Marketplace', icon: '🛍️', color: 'bg-yellow-100', connected: false },
    { id: 'google-analytics', name: 'Google Analytics', icon: '📈', color: 'bg-orange-100', connected: false },
    { id: 'zepto', name: 'Zepto', icon: '⚡', color: 'bg-purple-100', connected: false },
    { id: 'flipkart-seller', name: 'Flipkart Seller', icon: '🛒', color: 'bg-blue-100', connected: false },
    { id: 'nykaa', name: 'Nykaa', icon: '💄', color: 'bg-pink-100', connected: false, earlyAccess: true },
    { id: 'nykaa-ads', name: 'Nykaa Ads', icon: '💅', color: 'bg-pink-100', connected: false, earlyAccess: true }
  ];

  const workspaces = [
    {
      id: 'daily-tracker',
      name: 'Daily Sales Tracker',
      description: 'Track daily sales performance across all your connected platforms',
      preview: '/api/placeholder/300/200',
      integrations: ['shopify', 'amazon-seller', 'google-ads']
    },
    {
      id: 'consolidated-hub',
      name: 'Consolidated Sales Hub',
      description: 'Get a unified view of your business metrics across platforms',
      preview: '/api/placeholder/300/200',
      integrations: ['shopify', 'amazon-seller', 'meta-ads']
    },
    {
      id: 'amazon-hub',
      name: 'Amazon Sales Hub',
      description: 'Dedicated workspace for Amazon performance tracking',
      preview: '/api/placeholder/300/200',
      integrations: ['amazon-seller', 'amazon-ads']
    },
    {
      id: 'amazon-marketing',
      name: 'Amazon Performance Marketing',
      description: 'Analyze your Amazon advertising and sales performance',
      preview: '/api/placeholder/300/200',
      integrations: ['amazon-seller', 'amazon-ads']
    },
    {
      id: 'website-marketing',
      name: 'Website Performance Marketing',
      description: 'Monitor your website traffic and marketing campaigns',
      preview: '/api/placeholder/300/200',
      integrations: ['google-analytics', 'google-ads', 'meta-ads']
    }
  ];

  const handleConnect = (integrationId) => {
    if (connectedAccounts.includes(integrationId)) {
      setConnectedAccounts(connectedAccounts.filter(id => id !== integrationId));
    } else {
      setConnectedAccounts([...connectedAccounts, integrationId]);
    }
  };

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

           <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
       <Header/>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <span className="mr-2">←</span>
              Back
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Connect Account</h1>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800">
              Connect Account
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            placeholder="Search for Workspaces"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Integrations Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Integrations</h2>
          <p className="text-gray-600">To add a Workspace, you need to connect any of these apps.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => !integration.earlyAccess && handleConnect(integration.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-xl">{integration.icon}</span>
                </div>
                {integration.connected ? (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                ) : integration.earlyAccess ? (
                  <div className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                    Early Access
                  </div>
                ) : (
                  <button className="w-6 h-6 border-2 border-gray-300 rounded-full hover:border-blue-500"></button>
                )}
              </div>
              
              <h3 className="font-medium text-gray-900 text-sm mb-1">{integration.name}</h3>
              {integration.subtitle && (
                <p className="text-xs text-gray-500">{integration.subtitle}</p>
              )}
              {integration.earlyAccess && (
                <button className="mt-2 text-xs text-purple-600 font-medium">
                  Get Early Access!
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Explore Workspaces Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Explore Workspaces</h2>
            <p className="text-gray-600">Pick this one that helps you grow</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            See all →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workspaces.map((workspace) => (
            <div key={workspace.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Preview Image Placeholder */}
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-gray-400 text-2xl">📊</span>
                  </div>
                  <p className="text-xs text-gray-500">Workspace Preview</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {workspace.integrations.slice(0, 3).map((intId, index) => {
                    const integration = integrations.find(i => i.id === intId);
                    return integration ? (
                      <div key={intId} className={`w-6 h-6 ${integration.color} rounded flex items-center justify-center mr-1 text-xs`}>
                        {integration.icon}
                      </div>
                    ) : null;
                  })}
                  {workspace.integrations.length > 3 && (
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">
                      +{workspace.integrations.length - 3}
                    </div>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{workspace.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{workspace.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center pb-8">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
       </div>
    </div>
  );
};

export default ConnectAccount;