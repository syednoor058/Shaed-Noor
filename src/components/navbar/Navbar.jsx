// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/images/title_logo.png";

export default function Navbar() {
  return (
    <div className="w-full h-12 md:h-16  font-titleFont px-7 sml:px-9  md:px-12 lg:px-20 absolute z-[300] bg-darkBG flex items-center overflow-hidden">
      <img className="h-9 md:h-12 w-auto object-contain" src={logo} alt="" />
    </div>
  );
}
