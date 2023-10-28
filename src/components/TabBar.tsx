import React from "react";
import Link from "next/link";

const TabBar = () => {
  const data = [
    { text: "Home", url: "/" },
    { text: "Local", url: "/local" },
    { text: "National", url: "/national" },
    { text: "State", url: "/state" },
  ];
  return (
    <div className="flex flex-row justify-between bg-red-50 h-full">
      {data.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          className="flex justify-center items-center"
        >
          <div className="hover:bg-red-300">{item.text}</div>
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
