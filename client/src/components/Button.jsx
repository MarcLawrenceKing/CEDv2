// Button.jsx
import React from "react";

const Button = ({
  onClick,
  children,
  variant,
  type = "button",
  disabled = false,
}) => {
  const variantClasses = {
    login:
      "h-14 w-72 rounded-2xl bg-pup-red text-lg text-pup-white rounded-2xl hover:bg-pup-red-light mt-5",
    mainmenu:
      "h-20 w-3/5 rounded-2xl bg-pup-red text-lg text-pup-white rounded-2xl hover:bg-pup-red-light m-10",
  };
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
