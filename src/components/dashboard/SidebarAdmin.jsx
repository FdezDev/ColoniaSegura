import React, { useState } from "react";
import { Link } from "react-router-dom";

function SidebarAdmin() {
  const [selectedItem, setSelectedItem] = useState("Usuarios");

  const getLinkClassName = (item) => {
    return `flex items-center p-2 rounded-lg hover:bg-[#B1B2E4] 0 group ${
      selectedItem === item ? "bg-[#B1B2E4] text-[#5558ea]" : "text-white"
    }`;
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#7678ED]">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/users"
              onClick={() => setSelectedItem("Usuarios")}
              className={getLinkClassName("Usuarios")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                {/* Icono de usuarios */}
              </svg>
              <span className="ms-3">Usuarios</span>
            </Link>
          </li>
          <li>
            <Link
              to="/grupo"
              onClick={() => setSelectedItem("Grupos")}
              className={getLinkClassName("Grupos")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                {/* Icono de grupos */}
              </svg>
              <span className="ms-3">Grupos</span>
            </Link>
          </li>
          <li>
            <Link
              to="/alarma"
              onClick={() => setSelectedItem("Alarma")}
              className={getLinkClassName("Alarma")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                {/* Icono de alarma */}
              </svg>
              <span className="ms-3">Alarma</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SidebarAdmin;
