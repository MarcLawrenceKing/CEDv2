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
      "h-16 w-80 rounded-2xl bg-pup-red text-2xl text-pup-white rounded-2xl hover:bg-pup-red-light mt-5",
    mainmenu:
      "h-20 w-3/5 rounded-2xl bg-pup-red rounded-2xl hover:bg-pup-red-light m-10",
    table: "h-20 w-96 rounded-2xl rounded-2xl mt-7",
  };
  return (
    <button
      onClick={onClick}
      className={` ${variantClasses[variant]} ${
        isActive
          ? "bg-pup-blue hover:bg-pup-blue-light"
          : "bg-pup-red hover:bg-pup-red-light"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
