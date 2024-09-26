import React from "react";
import LogoText from "./LogoText";
import Image from "./Image";
import { LuLock, LuDatabase, LuLogOut } from "react-icons/lu";
import pupLogo from "../assets/pup logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ variant, isLogin = false }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //go back to previous route
  };

  const variantClassesText = {
    login: "LOGIN",
    mainmenu: "CENTRALIZED ENROLLMENT DATABASE",
    subjects: "",
    schedule: "",
    programs: "",
    tuition: "",
    students: "",
    enrollment: "",
  };

  const variantClassesLogo = {
    login: LuLock,
    mainmenu: LuDatabase,
    subjects: null,
    schedule: null,
    programs: null,
    tuition: null,
    students: null,
    enrollment: null,
  };
  return (
    <div
      className={`h-24 items-center flex bg-pup-red px-8 ${
        isLogin ? "justify-center" : "justify-between"
      }`}
    >
      {!isLogin && (
        <Image src={pupLogo} variant={"pupLogoHeader"} alt="PUP Logo"></Image>
      )}
      <LogoText
        variant={"header"}
        Icon={variantClassesLogo[variant]}
        text={`${variantClassesText[variant]}`}
        iconSize="35px"
      />
      {!isLogin && (
        <button onClick={goBack}>
          <LuLogOut size={"50px"} className="text-pup-white" />
        </button>
      )}
    </div>
  );
};

export default Header;
