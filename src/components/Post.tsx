import axios from "axios";
import { useState } from "react";
import StLight from "public/stlight.jpg";
import Image from "next/image";
import Profile from "public/image.jpg";
import {MessageCircle} from 'lucide-react'

interface Props {
  id: any;
  name: string;
  userId: string;
  contentString: string;
}

const TwitterPost = (props: Props) => {
  const vote = async (action: "upvote" | "downvote") => {
    const response = await axios.post(
      `http://170.187.248.196:3000/posts/${props.id}/vote`,
      { action: action }
    );
    const jsonData = response.data;
    if (jsonData.response) {
      // TODO("HAVE TO IMPLEMENT HOOKS")
    }
  };
  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-md mx-auto my-4">
      <div className="flex">
        <Image
          height={50}
          width={50}
          className="w-12 h-12 rounded-full"
          src={Profile}
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="font-bold">{props.name}</h3>
          <p className="text-gray-600">@{props.userId}</p>
        </div>
      </div>
      <p className="mt-4">{props.contentString}</p>
      <div className="mt-4">
        <Image
          className="w-full rounded-lg"
          src={StLight}
          alt="Post"
          height={400}
          width={400}
        />
      </div>
      <div className="flex items-center mt-4">
        <span onClick={() => vote("upvote")}>
          <svg
            className="w-6 h-6 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {/* <span>{props.upVote}</span> */}
        </span>
        <span onClick={() => vote("downvote")}>
          <svg
            className="w-6 h-6 text-gray-500 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          {/* <span>{props.downVote}</span> */}
        </span>
        <span>
          <MessageCircle />
        </span>
      </div>
    </div>
  );
};

export default TwitterPost;
