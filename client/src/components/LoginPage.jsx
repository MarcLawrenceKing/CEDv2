import React from "react";
import FillUp from "./FillUp";
import Image from "./Image";
import img2 from "../assets/img2.jpg";
import pupLogo from "../assets/pup logo.png";

const LoginPage = () => {
  return (
    <div className="bg-background grid grid-cols-[65%_35%]">
      <div className="h-[calc(100vh-96px)]">
        <Image
          src={img2}
          alt="Some Image"
          variant={"backgroundImage"}
          extraClass="w-full h-full"
        />
      </div>
      <div className="h-[calc(100vh-96px)] flex items-center justify-center">
        <Image src={pupLogo} alt="PUP Logo" variant={"pupLogo"} />
        <FillUp text="Username:" />
      </div>
    </div>
  );
};

export default LoginPage;
