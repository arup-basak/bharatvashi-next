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
    <div className="flex flex-row">
      {data.map((item, index) => (
        <Link href={item.url} key={index}>
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
