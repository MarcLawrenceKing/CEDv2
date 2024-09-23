import React from "react";

const FillUp = ({ text, variant, isPassword = false }) => {
  const variantClassesText = {
    login: "text-2xl",
  };
  const variantClassesInput = {
    login: "h-10 w-80 rounded-2xl p-4 focus:border-pup-red focus:border-2 ",
  };
  const variantClassesDiv = {
    login: "flex flex-col gap-2 items-center",
  };
  return (
    <div className={`${variantClassesDiv[variant]}`}>
      <span className={`${variantClassesText[variant]}`}>
        {text} <br></br>
      </span>
      <input
        type={`${isPassword ? "password" : "text"}`}
        className={`focus:outline-none ${variantClassesInput[variant]} `}
      ></input>
    </div>
  );
};

export default FillUp;
