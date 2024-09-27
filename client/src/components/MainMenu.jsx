import React from "react";
import img2 from "../assets/img2.jpg";
import Button from "./Button";
import LogoText from "./LogoText";
import { useNavigate } from "react-router-dom";

import {
  LuBookOpen,
  LuCalendar,
  LuAward,
  LuDollarSign,
  LuUsers,
  LuFolder,
} from "react-icons/lu";

const MainMenu = () => {
  const navigate = useNavigate();

  const handleClick = (tableName) => {
    navigate("/table", { state: { tableName } });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${img2})`,
      }}
      className="h-[calc(100vh-96px)] text-3xl bg-cover bg-center"
    >
      <div className="grid grid-cols-2 justify-items-center	items-center pt-20">
        <Button onClick={() => handleClick("SUBJECTS")} variant={"mainmenu"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuBookOpen}
            text="SUBJECTS"
            iconSize="35px"
          />
        </Button>
        <Button onClick={() => handleClick("SCHEDULES")} variant={"mainmenu"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuCalendar}
            text="SCHEDULES"
            iconSize="35px"
          />
        </Button>
        <Button onClick={() => handleClick("PROGRAMS")} variant={"mainmenu"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuAward}
            text="PROGRAMS"
            iconSize="35px"
          />
        </Button>
        <Button onClick={() => handleClick("TUITIONS")} variant={"mainmenu"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuDollarSign}
            text="TUITIONS"
            iconSize="35px"
          />
        </Button>
        <Button onClick={() => handleClick("STUDENTS")} variant={"mainmenu"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuUsers}
            text="STUDENTS"
            iconSize="35px"
          />
        </Button>
        <Button onClick={() => handleClick("ENROLLMENTS")} variant={"mainmenu"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuFolder}
            text="ENROLLMENTS"
            iconSize="35px"
          />
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
