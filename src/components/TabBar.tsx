'use client'

import React, { useState } from "react";
import Link from "next/link";

const TabBar = () => {
  const data = [
    { text: "Local", url: "/" },
    { text: "National", url: "/national" },
    { text: "State", url: "/state" },
  ];

  const [activeTab, setActiveTab] = useState(0); // Initializing the first tab as active

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-white fixed bottom-0 w-full border-t-2 border-gray-200 shadow-md">
      <div className="flex justify-between">
        {data.map((item, index) => (
          <Link href={item.url} key={index}>
            <div
              className={`w-full text-center py-3 px-5 cursor-pointer ${
                activeTab === index
                  ? "text-red-600" // Apply different styles for the active tab
                  : "text-gray-600 hover:text-red-600 transition duration-300"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
