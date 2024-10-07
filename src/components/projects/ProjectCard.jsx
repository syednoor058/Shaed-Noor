import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="w-full flex relative justify-center items-center rounded overflow-hidden group cursor-pointer shadow-xl">
      <div className="w-full aspect-square">
        <img
          src={props.coverImg}
          alt=""
          className="w-full h-full group-hover:blur-[3px] duration-[600ms] object-cover"
        />
      </div>
      <div className="w-full h-full absolute bg-gradient-to-br from-primaryColor1/90 to-accentColor1/90 p-2 md:p-4 mdl:p-5 z-[2] translate-y-[100%] group-hover:translate-y-0 duration-[600ms] flex flex-col gap-1 sml:gap-3 xl:gap-5 items-center justify-between">
        <p className="text-white text-xs sml:text-[14px] md:text-[16px] mdl:text-sm xl:text-xl">
          {props.desc}
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-[60%] flex">
            <Link
              className="flex flex-row justify-center items-center px-2 md:px-3 mdl:px-4 py-1 lg:px-2 text-[8px] sml:text-sm md:text-base text-textColo1 bg-darkBG1 rounded cursor-pointer hover:scale-[1.1] duration-[400ms]"
              to={props.detailsLink}
            >
              Details{" "}
              <span className="ps-2 text-xs sml:text-base md:text-lg">
                <GoArrowUpRight />
              </span>
            </Link>
          </div>
          <div className="w-[30%] flex justify-end">
            <Link
              className="w-full flex justify-end text-xs sml:text-base md:text-lg mdl:text-2xl"
              to={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-textColo1 hover:text-darkBG1 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
