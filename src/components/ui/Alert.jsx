import React from "react";

function Alert({className, text}) {
  return (
    <>
      <div
        className={`flex items-center p-4 mb-3 text-sm  border 0 rounded-lg bg-gray-800 ${className} `}
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
            <p className="text-base text-white font-bold"><span className="text-white">Notificado por:</span> Angel Tagua</p>
          <span className="font-medium">Info alert {text}!</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit quia voluptatibus consectetur, consequatur ullam perspiciatis sapiente, est error dolore dolorum consequuntur, modi sint? Iusto nostrum placeat non aliquam ipsum.
        </div>
      </div>
    </>
  );
}

export default Alert;
