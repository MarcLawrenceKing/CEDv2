import React, { useState } from "react";
import Image from "./Image";
import img1 from "../assets/img1.jpg";
import Button from "./Button";
import { LuPlus, LuMonitor, LuPenSquare, LuTrash2 } from "react-icons/lu";
import LogoText from "./LogoText";
import { useLocation } from "react-router-dom";

const Table = () => {
  const [activeBtn, setActiveBtn] = useState(null); // to color the buttons blue when clicked

  const handleClick = (buttonId) => {
    setActiveBtn(buttonId);
  };

  const location = useLocation();
  const { tableName } = location.state || {};

  return (
    <div className="bg-background grid grid-cols-[30%_70%]">
      <div className="h-[calc(100vh-96px)] flex flex-col gap-8 items-center justify-center">
        <Button
          isActive={activeBtn === 1}
          onClick={() => handleClick(1)}
          variant={"table"}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuPlus}
            text={`ADD ${tableName}`}
            iconSize="32px"
          />
        </Button>
        <Button
          isActive={activeBtn === 2}
          onClick={() => handleClick(2)}
          variant={"table"}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuMonitor}
            text={`DISPLAY ${tableName}`}
            iconSize="32px"
          />
        </Button>
        <Button
          isActive={activeBtn === 3}
          onClick={() => handleClick(3)}
          variant={"table"}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuPenSquare}
            text={`EDIT ${tableName}`}
            iconSize="32px"
          />
        </Button>
        <Button
          isActive={activeBtn === 4}
          onClick={() => handleClick(4)}
          variant={"table"}
        >
          <LogoText
            variant={"table_options"}
            Icon={LuTrash2}
            text={`DELETE ${tableName}`}
            iconSize="32px"
          />
        </Button>
      </div>
      <div className="h-[calc(100vh-96px)]">
        <Image
          src={img1}
          alt="Some Image"
          variant={"backgroundImage"}
          extraClass="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Table;
