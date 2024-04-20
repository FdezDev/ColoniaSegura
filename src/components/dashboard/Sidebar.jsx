import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";



function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);


  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#7678ED]">
          <ul class="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setSelectedItem("Home")}
                className={`flex items-center p-2  rounded-lg  hover:bg-[#B1B2E4] 0 group ${
                  selectedItem === "Home" ? "bg-[#B1B2E4] text-[#5558ea]" : "text-white"
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
                className={`flex items-center p-2  rounded-lg  hover:bg-[#B1B2E4] 0 group ${
                  selectedItem === "Notificación" ? "bg-[#B1B2E4] text-[#5558ea]" : "text-white"
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
                className={`flex items-center p-2 rounded-lg  hover:bg-[#B1B2E4] 0 group ${
                  selectedItem === "Ubicacion" ? "bg-[#B1B2E4] text-[#5558ea]" : "text-white"
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
          </ul>
        </div>
      </aside>

    </>
  );
}

export default Sidebar;
