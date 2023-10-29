import React from 'react';
import Link from 'next/link';

const TopAppBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
            <Link href={'/'}>भारतVasi</Link> </div>
        <div className="flex items-center">
          <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center">
            {/* You can replace the content with your profile icon */}
            <Link href="/profile/arupb">
            <img
              src="https://via.placeholder.com/50" // Replace with your profile icon URL
              alt="Profile"
              className="rounded-full h-8 w-8"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAppBar;
