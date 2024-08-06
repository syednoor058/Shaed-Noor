import React from "react";
import housePred from "../../assets/images/projects_images/house_price_pred.png";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div id="projects">
      <div className="bg-darkBG3 w-full px-7 sml:px-9 pb-10 md:px-12 lg:px-20 lg:pb-20 overflow-hidden flex flex-col gap-7 lg:gap-10">
        <div>
          <div className="w-full flex flex-col gap-7 lg:gap-10">
            <div>
              <p className="uppercase font-titleFont text-xs md:text-base text-end text-accentColor1">
                Portfolio
              </p>
            </div>
            <div className="flex flex-col-reverse gap-10 lgl:gap-0 lgl:flex-row-reverse justify-between items-center">
              <div className="w-full lgl:w-[60%] text-sm md:text-base text-end text-textColo2">
                Welcome to my project portfolio, where creativity meets
                functionality. Here, you will find a curated selection of my
                most significant works, showcasing my expertise in front-end and
                back-end development with UI/UX design, Machine Learning,
                software manual or automation testing, and more. Each project
                reflects my commitment to quality, innovation, and meticulous
                attention to detail. From dynamic websites and testing apps to
                data-driven machine learning models, these projects demonstrate
                my ability to tackle diverse challenges and deliver exceptional
                results. Dive in to explore the breadth and depth of my work.
              </div>
              <p className="w-full lgl:w-[35%] text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-start text-titleColor2 leading-none">
                My Development{" "}
                <span className="font-handFont ps-2 lowercase text-5xl sml:text-7xl md:text-8xl font-normal text-[#07BEB8]">
                  _journey
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lgl:grid-cols-3 gap-5 justify-center items-center md:px-20 lg:px-0">
          <ProjectCard coverImg={housePred} />
          <ProjectCard coverImg={housePred} />
          <ProjectCard coverImg={housePred} />
          <ProjectCard coverImg={housePred} />
          <ProjectCard coverImg={housePred} />
          <ProjectCard coverImg={housePred} />
          <ProjectCard coverImg={housePred} />
        </div>
      </div>
    </div>
  );
}
