import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard() {
  return (
    <div className="w-full flex relative justify-center items-center bg-black rounded p-10 overflow-hidden group cursor-pointer shadow-black shadow-lg hover:scale-[1.05] duration-[400ms]">
      <div className="font-titleFont uppercase text-2xl text-white z-[1]">
        Movie Suggestion System (Machine Learning & Data Science)
      </div>
      <div className="w-full h-full absolute bg-red-600 p-6 z-[2] translate-y-[100%] group-hover:translate-y-0 duration-[600ms] flex flex-col gap-5 justify-center items-center">
        <p className="text-white">
          A trained machine learning model to suggest five similar movies
          compering to the input of a movie name that is provided by the users.
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-[60%] flex">
            <a className="flex flex-row justify-center items-center px-3 py-2 text-sm md:text-base text-lightText bg-darkAccent rounded cursor-pointer hover:scale-[1.1] duration-[400ms]">
              Details{" "}
              <span className="ps-2 text-xl">
                <GoArrowUpRight />
              </span>
            </a>
          </div>
          <div className="w-[30%] flex justify-end">
            <p className="w-full flex justify-end text-white text-2xl">
              <FaGithub />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
