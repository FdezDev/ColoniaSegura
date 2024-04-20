import React, { useState } from "react";
import { motion } from "framer-motion";
import ViewUsers from "../Tablas/ViewUsers";
import close from '../../assets/icons/close.svg'

function AddUser({ isVisible1, toggleVisibility1, onClick }) {


  return (
    <>
      {isVisible1 && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-[#000005be]"
          onClick={toggleVisibility1}
        >
          <motion.div
            key="createInvoice-sidebar"
            initial={{ x: -500, opacity: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 40,
                duration: 0.4,
              },
            }}
            exit={{ x: -700, transition: { duration: 0.2 } }}
            className="scroll-hidden flex flex-col bg-white px-3  md:pl-[50px] md:pr-[50px] py-6 h-screen md:w-[700px] md:rounded-r-3xl z-50 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClick}
              className=" absolute block md:hidden top-5 right-4"
            >
              <img className="h-8" src={close} alt="" />
            </button>
            <h1 className="font-semibold text-3xl">Crear Grupo</h1>

            <div className="overflow-y-scroll my-14">
     

              <div>
                <hr className="mt-2" />
              </div>

              <ViewUsers />
            </div>
            <div className="flex justify-end">
              <button className="text-white hover:opacity-80 py-4 items-center bg-blue-500 justify-center px-8 rounded-full">
                Crear
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default AddUser;
