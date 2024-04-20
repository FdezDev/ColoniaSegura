import React from "react";
import glass from "../../assets/icons/glass.svg";
import vertical from "../../assets/icons/verticalPlus.svg";
import left from "../../assets/icons/left.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function NavbarChats() {
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };
  return (
    <>
      <nav className="p-3 w-full bg-[#EEEEF8] flex z-10 duration-300 transition-all ease-in-out  items-center justify-between px-5 shadow-sm">
        <div className={`flex flex-row gap-3 items-center ${isSearching ? "hidden lg:flex" : ""}`}>
          <Link to="/" className="flex lg:hidden">
            <img className="h-6" src={left} alt="" />
          </Link>
          <div className="flex flex-col">
            <h1 className="text-xl text-[#7678ED] font-semibold">
              Seguidad Chats
            </h1>
            <p className="text-xs text-[#A9ABED] font-medium">
              10 en linea, 23 mienbros
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 relative">
          <motion.button
            className={`w-10 h-10 rounded-full flex z-30 items-center duration-300 transition-all ease-in-out justify-center hover:bg-[#8284f068] absolute `}
            onClick={toggleSearch}
          >
            <img className="h-7 z-10" src={glass} alt="" />
          </motion.button>
          <motion.input
            type="text"
            className={`h-10 px-11 outline-none rounded-full ${
              isSearching ? "-350px px-11" : " opacity-0 px-4"
            }`}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            initial={{ width: "0px" }}
            animate={{ width: isSearching ? "350px" : "0px" }}
            placeholder="Search..."
          />
          <button>
            <img className="h-7" src={vertical} alt="" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavbarChats;
