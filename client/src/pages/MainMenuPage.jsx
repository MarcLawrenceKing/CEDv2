import React from "react";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";

const MainMenuPage = () => {
  return (
    <>
      <Header variant={"mainmenu"} isMainMenu={true} />
      <MainMenu />
    </>
  );
};

export default MainMenuPage;
