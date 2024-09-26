import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <>
      <Header variant={"login"} isLogin={true} />
      <Login />
    </>
  );
};

export default LoginPage;
