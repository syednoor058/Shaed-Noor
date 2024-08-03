// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiMenu3Line } from "react-icons/ri";
// import logo from "../../assets/images/title_logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="">
      <div className="w-full flex z-[10] px-7 sml:px-9 md:px-12 lg:px-20 py-4 justify-end fixed">
        <div
          className="p-2 bg-darkBG text-gray-200 rounded text-xl cursor-pointer"
          onClick={handleToggle}
        >
          <RiMenu3Line />
        </div>
      </div>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: "-100%", transition: { duration: 0.5 } }}
            className="w-[30%] h-screen flex z-[1000] px-20 py-4 fixed bg-darkBG text-gray-200"
          >
            <div>Menubar</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
