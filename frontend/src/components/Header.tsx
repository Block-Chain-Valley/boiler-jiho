import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="bg-gray-800 flex items-center">
      <img
        src="https://i.imgur.com/1Q1Z1Zy.png"
        className="w-16 h-16"
        alt="logo"
      />
      <div className="m-auto">This is Template</div>
      <NavBar />
    </div>
  );
}

export default Header;
