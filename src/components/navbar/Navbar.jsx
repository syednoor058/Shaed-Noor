// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";
// import logo from "../../assets/images/title_logo.png";
import { AiFillProject } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import {
  MdHomeRepairService,
  MdPermContactCalendar,
  MdRateReview,
} from "react-icons/md";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="">
      <div className="w-full flex z-[999] justify-end items-center fixed">
        <div className="flex p-3 md:p-5 rounded">
          <div
            className="p-2 bg-darkBG text-lightBG rounded text-xl md:text-2xl lg:text-3xl cursor-pointer shadow-black shadow-md"
            onClick={handleToggle}
          >
            <RiMenu3Line />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: "-100%", transition: { duration: 0.5 } }}
            className="w-[60%] md:w-[50%] lg:w-[30%] h-screen flex flex-col z-[1000] px-7 sml:px-9 md:px-12 lg:px-20 py-5 fixed bg-darkBG bg-opacity-[0.95] backdrop-blur-sm text-gray-200"
          >
            <div className="text-2xl cursor-pointer" onClick={handleToggle}>
              <CgClose />
            </div>
            <div className="h-full flex flex-col justify-center gap-7 lg:gap-10 uppercase text-xl text-gray-200">
              <Link
                to="home"
                activeClass="active"
                className="cursor-pointer flex flex-row items-center gap-2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleToggle}
              >
                <span className="text-2xl">
                  <FaHome />
                </span>
                Home
              </Link>
              <Link
                to="about"
                activeClass="active"
                className="cursor-pointer flex flex-row items-center gap-2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleToggle}
              >
                <span className="text-2xl">
                  <MdPermContactCalendar />
                </span>
                About
              </Link>
              <Link
                to="services"
                activeClass="active"
                className="cursor-pointer flex flex-row gap-2 items-center"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleToggle}
              >
                <span className="text-2xl">
                  <MdHomeRepairService />
                </span>
                Expertise
              </Link>
              <Link
                to="projects"
                activeClass="active"
                className="cursor-pointer flex flex-row items-center gap-2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleToggle}
              >
                <span className="text-2xl">
                  <AiFillProject />
                </span>
                Portfolio
              </Link>
              <Link
                to="testimonial"
                activeClass="active"
                className="cursor-pointer flex flex-row items-center gap-2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleToggle}
              >
                <span className="text-2xl">
                  <MdRateReview />
                </span>
                Testimonial
              </Link>
              <Link
                to="contact"
                activeClass="active"
                className="cursor-pointer flex flex-row items-center gap-2"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleToggle}
              >
                <span className="text-2xl">
                  <IoMdContact />
                </span>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
