import React from "react";
import LogoText from "./LogoText";
import Image from "./Image";
import {
  LuLock,
  LuDatabase,
  LuLogOut,
  LuArrowLeft,
  LuBookOpen,
  LuCalendar,
  LuAward,
  LuDollarSign,
  LuUsers,
  LuFolder,
  LuPenSquare,
} from "react-icons/lu";
import pupLogo from "../assets/pup logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ variant, isLogin = false, isMainMenu = false }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //go back to previous route
  };

  const location = useLocation();
  const { tableName } = location.state || {};

  const variantClassesText = {
    login: "LOGIN",
    mainmenu: "CENTRALIZED ENROLLMENT DATABASE",
    table: `${tableName}`,
    generate: "GENERATE COR",
  };

  const variantClassesLogo = {
    login: LuLock,
    mainmenu: LuDatabase,
    SUBJECTS: LuBookOpen,
    SCHEDULES: LuCalendar,
    PROGRAMS: LuAward,
    TUITIONS: LuDollarSign,
    STUDENTS: LuUsers,
    ENROLLMENTS: LuFolder,
    generate: LuPenSquare,
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
        Icon={variantClassesLogo[variant] || variantClassesLogo[tableName]}
        text={`${variantClassesText[variant]}`}
        iconSize="35px"
      />
      {!isLogin && isMainMenu && (
        <button onClick={goBack}>
          <LuLogOut size={"50px"} className="text-pup-white" />
        </button>
      )}

      {!isLogin && !isMainMenu && (
        <button onClick={goBack}>
          <LuArrowLeft size={"50px"} className="text-pup-white" />
        </button>
      )}
    </div>
  );
};

export default Header;
