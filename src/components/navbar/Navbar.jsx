// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiMenu3Line } from "react-icons/ri";
// import logo from "../../assets/images/title_logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-scroll";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="">
      <div className="w-full h-12 flex z-[999] px-7 sml:px-9 md:px-12 lg:px-20 justify-end items-center fixed bg-lightBG">
        <div
          className="p-2 bg-darkBG text-lightBG rounded text-xl cursor-pointer"
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
            className="w-[60%] md:w-[50%] lg:w-[30%] h-screen flex flex-col z-[1000] px-20 py-5 fixed bg-darkBG bg-opacity-[0.95] backdrop-blur-sm text-gray-200"
          >
            <div className="text-2xl cursor-pointer" onClick={handleToggle}>
              <CgClose />
            </div>
            <div className="h-full flex flex-col justify-center gap-7 lg:gap-10 uppercase text-xl text-gray-200">
              <Link
                to="home"
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={handleToggle}
              >
                Home
              </Link>
              <Link
                to="about"
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={handleToggle}
              >
                About
              </Link>
              <Link
                to="services"
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={handleToggle}
              >
                Expertise
              </Link>
              <Link
                to="projects"
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={handleToggle}
              >
                Projects
              </Link>
              <Link
                to="testimonial"
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={handleToggle}
              >
                Testimonial
              </Link>
              <Link
                to="contact"
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={handleToggle}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
