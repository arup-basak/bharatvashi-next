import React from 'react';

const Dashboard = () => {
  // Hardcoded data for demonstration purposes
  const wardsData = [
    { id: 1, name: 'Ward 1', score: 80 },
    { id: 2, name: 'Ward 2', score: 65 },
    { id: 3, name: 'Ward 3', score: 90 },
    // Add more ward data as needed
  ];

  const renderWardData = () => {
    return wardsData.map((ward) => (
      <div key={ward.id} className="ward bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{ward.name}</h3>
        <p className="text-lg text-gray-700">Score: {ward.score}</p>
      </div>
    ));
  };

  return (
    <div className="dashboard bg-gray-100 min-h-screen py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Ward Performance Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {renderWardData()}
      </div>
    </div>
  );
};

export default Dashboard;
