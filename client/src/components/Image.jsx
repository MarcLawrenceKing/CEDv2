import React from "react";

const Image = ({ src, alt, variant, extraClass = "" }) => {
  const variantClasses = {
    backgroundImage: "w-full h-full object-cover",
    pupLogo: "h-32 w-32",
    pupLogoHeader: "h-16 w-16",
  };

  return (
    <div className={`${extraClass}`}>
      <img src={src} alt={alt} className={`${variantClasses[variant]}`} />
    </div>
  );
};

export default Image;
