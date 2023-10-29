import React from 'react';
 
interface Props {
  name: string,
  userId: string,
  contentString: string
}

const TwitterPost = (props: Props) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-md mx-auto my-4">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/50"
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="font-bold">{props.name}</h3>
          <p className="text-gray-600">@{props.userId}</p>
        </div>
      </div>
      <p className="mt-4">{props.contentString}</p>
      <div className="mt-4">
        <img
          className="w-full rounded-lg"
          src="https://via.placeholder.com/400"
          alt="Post"
        />
      </div>
      <div className="flex items-center mt-4">
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
        <svg
          className="w-6 h-6 text-gray-500"
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
      </div>
    </div>
  );
};

export default TwitterPost;