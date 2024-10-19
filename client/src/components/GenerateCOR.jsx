import React from "react";
import Image from "./Image";
import img1 from "../assets/img1.jpg";
import FillUp from "./FillUp";
import Button from "./Button";

const GenerateCOR = () => {
  const handleClick = () => {
    alert("COR Generated!");
  };
  return (
    <div className="bg-background grid grid-cols-[25%_75%]">
      <div className="h-[calc(100vh-96px)] flex flex-col gap-8 items-center justify-center">
        <FillUp
          text="Enter Student Number:"
          variant={"login"}
          placeholder="Ex: 230001"
        />
        <Button onClick={handleClick} variant={"generate"}>
          Generate
        </Button>
      </div>
      <div className="relative h-[calc(100vh-96px)]">
        <Image
          src={img1}
          alt="Some Image"
          variant={"backgroundImage"}
          extraClass="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <p className="text-3xl text-pup-white bg-pup-blue rounded p-2 bg-opacity-70">
            Enter a student number
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateCOR;
