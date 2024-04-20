import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import NavbarChats from "../../ui/NavbarChats";


const socket = io("http://localhost:4000/");

function Chats() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setUnreadMessages(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("message", message);
      const newMessage = {
        body: message,
        from: "Me",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      setUnreadMessages((prevUnreadMessages) => prevUnreadMessages + 1);
    };
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // useEffect(() => {
  //   // Obtener mensajes almacenados al cargar la página
  //   fetch("http://localhost:4000/messages")
  //     .then((response) => response.json())
  //     .then((data) => setMessages(data));
  // }, []);

  return (
    <>
      <div className="fixed w-full lg:pr-[556px] z-50">
        <NavbarChats/>
      </div>
      <div className="h-screen flex flex-col pb-11 pt-14">
        <div className="flex-1 overflow-y-scroll px-6 py-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-5 flex relative flex-col bg-gray-100 leading-1.5 p-3 sm:w-auto max-w-[250px] md:max-w-[320px] ${
                message.from === "Me"
                  ? "rounded-ee-3xl rounded-s-3xl bg-[#EEEEF8] ml-auto"
                  : "rounded-e-3xl rounded-es-3xl bg-[#EEEEF8]"
              }`}
            >
              <span className="text-sm font-semibold text-[#7678ED] ">
                {message.from}
              </span>
              <p className="text-sm font-normal py-2.5 text-gray-900 ">
                {message.body}
              </p>
              <span className="text-sm absolute bottom-1 right-6 justify-end font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
          {unreadMessages > 0 && (
            <div className="text-center text-sm text-gray-500 mt-2">
              {unreadMessages} new messages
            </div>
          )}
        </div>

        <form
          className="bg-gray-100 fixed w-full lg:pr-[586px] bottom-0 px-4 py-2"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center w-full">
            <input
              className="w-full outline-none border rounded-full py-2 px-4 mr-2"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chats;
