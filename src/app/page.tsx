"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "@/components/Post";


const Local = () => {
  // const baseUrl = process.env.BASE_URL as string;
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://170.187.248.196:3000/posts/`);
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-y-scroll">
      {data && data.length > 0 ? (
        data.map((item: any, index: number) => (
          <div key={index} className="m-2">
            <Post
              contentString={item.contentString as string}
              id={item.id}
              name={"Arup Basak"}
              userId={item.userId}
            />
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Local;
