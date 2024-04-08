import React from "react";
import logo from "./assets/GTN-Logo.png";
const Success = () => {
  return (
    <div className="flex flex-col items-center text-white justify-center h-screen">
      <img className="w-100 sm:w-[50%]" src={logo} alt="logo" />
      <div className="h-[100%] my-auto bg-[--primaryColor] flex flex-col items-center text-white justify-center py-10 px-2">
        <h1 className="text-5xl leading-[3rem] p-5">
          <b>THANK YOU!!</b>
        </h1>
        <h1 className="text-xl p-5">
          Your contribution means a lot to people in need.
        </h1>
        <div className="mt-5 text-center">
          <h1>
            “No one has ever become poor from giving".
            <br />
            ~Anne Frank~
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Success;
