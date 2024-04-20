import React from "react";
import menus from "../../assets/icons/menus.svg";
import close from "../../assets/icons/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const [icon, setIcon ] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <>
      <nav className="p-3 px-5 bg-[#7678ED] flex flex-row items-center justify-between lg:hidden">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold">FdezAlert</h1>
        </div>

        <div className="flex items-center">
          <button onClick={handleClick}>
            <img
              className="h-8 duration-300 transition-all ease-in-out"
              src={open ? close : menus}
              alt=""
            />
          </button>
        </div>
      </nav>



      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur z-40"
          onClick={handleClick}
        ></div>
      )}

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 shadow-lg w-64 h-screen z-50 block ts:hidden transition-transform ${
          open ? "" : "-translate-x-full"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#7678ED] ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setSelectedItem("Alarma")}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selectedItem === "Alarma" ? "bg-blue-200" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M16.881 4.345A23.112 23.112 0 0 1 8.25 6H7.5a5.25 5.25 0 0 0-.88 10.427 21.593 21.593 0 0 0 1.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.593.772-2.468a17.116 17.116 0 0 1-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0 0 18 11.25c0-2.414-.393-4.735-1.119-6.905ZM18.26 3.74a23.22 23.22 0 0 1 1.24 7.51 23.22 23.22 0 0 1-1.41 7.992.75.75 0 1 0 1.409.516 24.555 24.555 0 0 0 1.415-6.43 2.992 2.992 0 0 0 .836-2.078c0-.807-.319-1.54-.836-2.078a24.65 24.65 0 0 0-1.415-6.43.75.75 0 1 0-1.409.516c.059.16.116.321.17.483Z" />
                </svg>

                <span className="ms-3">Alarma</span>
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                onClick={() => setSelectedItem("chats")}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selectedItem === "chats" ? "bg-blue-200" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>

                <span className="ms-3">Chats</span>
              </Link>
            </li>
            <li>
              <Link
              to="/notificacion"
                onClick={() => setSelectedItem("Notificación")}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selectedItem === "Notificación" ? "bg-blue-200" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="ms-3">Notificación</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelectedItem("Ubicacion")}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selectedItem === "Ubicacion" ? "bg-blue-200" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="ms-3">Ubicación</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelectedItem("Ayuda")}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selectedItem === "Ayuda" ? "bg-blue-200" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
                </svg>

                <span className="ms-3">Ayuda</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
