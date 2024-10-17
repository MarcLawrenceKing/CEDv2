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
  LuPenSquare,
} from "react-icons/lu";

const MainMenu = () => {
  const navigate = useNavigate();

  const handleClickTable = (tableName) => {
    navigate("/CEDV2/table", { state: { tableName } });
  };
  const handleClickGenerate = () => {
    navigate("/CEDV2/generate");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${img2})`,
      }}
      className="h-[calc(100vh-96px)] text-3xl bg-cover bg-center"
    >
      <div className="grid grid-cols-2 justify-items-center	items-center">
        <Button
          onClick={() => handleClickTable("SUBJECTS")}
          variant={"mainmenu"}
        >
          <LogoText
            variant={"mainmenu"}
            Icon={LuBookOpen}
            text="SUBJECTS"
            iconSize="35px"
          />
        </Button>
        <Button
          onClick={() => handleClickTable("SCHEDULES")}
          variant={"mainmenu"}
        >
          <LogoText
            variant={"mainmenu"}
            Icon={LuCalendar}
            text="SCHEDULES"
            iconSize="35px"
          />
        </Button>
        <Button
          onClick={() => handleClickTable("PROGRAMS")}
          variant={"mainmenu"}
        >
          <LogoText
            variant={"mainmenu"}
            Icon={LuAward}
            text="PROGRAMS"
            iconSize="35px"
          />
        </Button>
        <Button
          onClick={() => handleClickTable("TUITIONS")}
          variant={"mainmenu"}
        >
          <LogoText
            variant={"mainmenu"}
            Icon={LuDollarSign}
            text="TUITIONS"
            iconSize="35px"
          />
        </Button>
        <Button
          onClick={() => handleClickTable("STUDENTS")}
          variant={"mainmenu"}
        >
          <LogoText
            variant={"mainmenu"}
            Icon={LuUsers}
            text="STUDENTS"
            iconSize="35px"
          />
        </Button>
        <Button
          onClick={() => handleClickTable("ENROLLMENTS")}
          variant={"mainmenu"}
        >
          <LogoText
            variant={"mainmenu"}
            Icon={LuFolder}
            text="ENROLLMENTS"
            iconSize="35px"
          />
        </Button>
      </div>
      <div className="grid justify-items-center ">
        <Button onClick={() => handleClickGenerate()} variant={"mainmenu_gc"}>
          <LogoText
            variant={"mainmenu"}
            Icon={LuPenSquare}
            text="GENERATE COR"
            iconSize="35px"
          />
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
