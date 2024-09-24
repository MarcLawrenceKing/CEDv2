import "./App.css";
import Header from "./components/Header";

import React from "react";
import LoginPage from "./components/LoginPage";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <>
      <Header variant={"mainmenu"} isLogin={false} />
      <MainMenu />
    </>
  );
}

export default App;
