import React from "react";
import LogoText from "./LogoText";
import { IoLockClosedOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="h-24 items-center flex justify-center bg-pup-red">
      <LogoText Icon={IoLockClosedOutline} text="LOGIN" iconSize="35px" />
    </div>
  );
};

export default Header;
