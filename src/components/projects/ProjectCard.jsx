import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard(props) {
  return (
    <div className="w-full flex relative justify-center items-center rounded overflow-hidden group cursor-pointer shadow-xl">
      <div className="w-full h-auto">
        <img
          src={props.coverImg}
          alt=""
          className="w-full group-hover:blur-[3px] duration-[600ms] object-cover"
        />
      </div>
      <div className="w-full h-full absolute bg-gradient-to-br from-primaryColor1/90 to-accentColor1/90 p-6 z-[2] translate-y-[100%] group-hover:translate-y-0 duration-[600ms] flex flex-col gap-5 justify-end items-center">
        <p className="text-white">
          A trained machine learning model to suggest five similar movies
          compering to the input of a movie name that is provided by the users.
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-[60%] flex">
            <a className="flex flex-row justify-center items-center px-3 py-2 text-sm md:text-base text-textColo1 bg-darkBG1 rounded cursor-pointer hover:scale-[1.1] duration-[400ms]">
              Details{" "}
              <span className="ps-2 text-xl">
                <GoArrowUpRight />
              </span>
            </a>
          </div>
          <div className="w-[30%] flex justify-end">
            <p className="w-full flex justify-end text-3xl">
              <FaGithub className="text-textColo1 hover:text-darkBG1 duration-300" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
