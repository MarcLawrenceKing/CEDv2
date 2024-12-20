// Button.jsx
import React from "react";

const Button = ({
  isActive,
  onClick,
  children,
  variant = "",
  disabled = false,
}) => {
  const variantClasses = {
    login:
      "h-16 w-80 rounded-2xl text-2xl text-pup-white rounded-2xl hover:bg-pup-red-light mt-5",
    mainmenu: "h-20 w-3/5 rounded-2xl hover:bg-pup-red-light mt-20",
    mainmenu_gc: "h-20 w-2/5 rounded-2xl hover:bg-pup-red-light mt-20",
    table: "h-20 w-96 rounded-2xl rounded-2xl mt-7",
    generate:
      "h-16 w-72 rounded-2xl text-2xl text-pup-white rounded-2xl hover:bg-pup-red-light mt-5",
  };
  return (
    <button
      onClick={onClick}
      className={` ${variantClasses[variant]} ${
        isActive
          ? "bg-pup-blue hover:bg-pup-blue-light"
          : "bg-pup-red hover:bg-pup-red-light"
      } ${disabled ? "opacity-50 hover:opacity-80 cursor-not-allowed" : ""} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
