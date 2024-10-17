import React from "react";
import FillUp from "./FillUp";
import Image from "./Image";
import img2 from "../assets/img2.jpg";
import pupLogo from "../assets/pup logo.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CEDV2/menu");
  };

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
      <div className="h-[calc(100vh-96px)] flex flex-col gap-8 items-center justify-center">
        <Image src={pupLogo} alt="PUP Logo" variant={"pupLogo"} />
        <span className="text-3xl font-sans italic font-bold text-pup-red stroke-white	">
          Centralized Enrollment Database
        </span>
        <FillUp text="Username:" variant={"login"} />
        <FillUp text="Password:" variant={"login"} isPassword />
        <Button onClick={handleClick} variant={"login"}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
