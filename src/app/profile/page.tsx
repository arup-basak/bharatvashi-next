'use client'

import React, { useEffect, useState } from "react";
import profileImage from "/public/image.jpg";
import Image from "next/image";
import Post from "@/components/Post";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post("http://170.187.248.196:3000/posts/");
      const jsonData= response.data;
      setData(jsonData);
    }
    fetchData()

  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen">
        <Image
          src={profileImage}
          alt="profileImage"
          height={200}
          width={200}
          className="rounded-full"
        />
        <div className="text-3xl">Adolf Hitler</div>
        {data && (
          <>
            {data.map((item: any, index: number) => (
              <Post
                name="Arup Basak"
                key={index}
                contentString={item.contentString}
                userId={item.authorId}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
