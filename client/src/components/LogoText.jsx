import React from "react";

const LogoText = ({ Icon, variant, text, iconSize = "" }) => {
  const variantClassesIcon = {
    header: "text-pup-white mr-2.5",
    mainmenu: "text-pup-white mr-2.5",
    table_options: "text-pup-white mr-3",
  };

  const variantClassesText = {
    header: "text-3xl text-pup-white",
    mainmenu: "text-2xl text-pup-white",
    table_options: "text-2xl text-pup-white",
  };

  return (
    <div className="flex items-center justify-center">
      {/* Icon */}
      {Icon && (
        <Icon size={iconSize} className={`${variantClassesIcon[variant]}`} />
      )}

      {/* Text */}
      <span className={`${variantClassesText[variant]}`}>{text}</span>
    </div>
  );
};

export default LogoText;
