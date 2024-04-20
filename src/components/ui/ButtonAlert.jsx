import React from "react";

function ButtonAlert({ img, className, text, onClick, alertType, handleClick2 }) {
  const handleClick = () => {
    onClick(alertType);
  };
  return (
    <button
      onClick={handleClick2}

      className={`w-full p-3 px-4 text-xl flex items-center gap-3 text-white font-normal rounded-lg  ${className}`}
    >
      <img src={img} alt="" />
      {text}
    </button>
  );
}

export default ButtonAlert;
