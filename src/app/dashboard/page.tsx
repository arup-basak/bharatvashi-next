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

  const topPostsData = [
    { id: 1, title: 'Street Lights not Working', author: 'Nikhil Mishra' },
    { id: 2, title: 'Garbage in the area', author: 'Atif Ali' },
    // Add more top post data as needed
  ];

  const renderTopPosts = () => {
    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
          </tr>
        </thead>
        <tbody>
          {topPostsData.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="dashboard bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Posts</h2>
            {renderTopPosts()}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ward Performance Dashboard</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {renderWardData()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
