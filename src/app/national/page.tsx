"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "@/components/Post";

interface ResponseInterface {
  response: boolean;
  data: any[];
  error?: string;
}

const National = () => {
  const baseUrl = process.env.BASE_URL as string;
  const [data, setData] = useState<ResponseInterface>({
    response: false,
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://170.187.248.196:3000/posts/`);
        const jsonData: ResponseInterface = response.data;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div>
      {data.response && data.data.length > 0 ? (
        data.data.map((item, index) => (
          <div key={index}>
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

export default National;
