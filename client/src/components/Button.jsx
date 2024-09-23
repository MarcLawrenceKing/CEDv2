// Button.jsx
import React from "react";

const Button = ({
  onClick,
  text,
  variant,
  type = "button",
  disabled = false,
}) => {
  const variantClasses = {
    login:
      "h-14 w-72 rounded-2xl bg-pup-red text-lg text-pup-white rounded-lg hover:bg-pup-red-light mt-5",
  };
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]}`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
