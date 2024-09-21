import React from "react";

const LogoText = ({ Icon, text, iconSize = "1px" }) => {
  return (
    <div className="flex items-center">
      {/* Icon */}
      <Icon size={iconSize} className={`text-pup-white mr-2.5`} />

      {/* Text */}
      <span className={`text-3xl text-pup-white`}>{text}</span>
    </div>
  );
};

export default LogoText;
