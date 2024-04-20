import React from "react";

function ChatBubble({text, cleinte}) {
  return (
    <>
      <div className="flex items-start px-3">

        <div className="flex relative top-5 flex-col w-auto max-w-[250px] md:max-w-[320px] leading-1.5 p-3 border-gray-200 bg-gray-100 rounded-e-3xl rounded-es-3xl dark:bg-gray-700">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
           Angel
          </span>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            .
          </p>
          <span className="text-sm flex bottom-1 right-6 justify-end font-normal text-gray-500 dark:text-gray-400">
            11:46
          </span>
          <h1 className=" ">jola</h1>
        </div>
      </div>
    </>
  );
}

export default ChatBubble;
