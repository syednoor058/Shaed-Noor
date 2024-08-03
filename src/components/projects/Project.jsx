import React from "react";
import housePred from "../../assets/images/projects_images/house_price_pred.png";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div id="projects">
      <div className="bg-cyan-400 w-full px-7 sml:px-9 py-10 md:px-12 lg:px-20 lg:py-20 overflow-hidden flex flex-col gap-7 lg:gap-10">
        <div>
          <div className="w-full flex flex-col gap-7 lg:gap-10">
            <div>
              <p className="uppercase font-titleFont text-xs md:text-base text-end">
                Portfolio
              </p>
            </div>
            <div className="flex flex-col-reverse gap-10 lgl:gap-0 lgl:flex-row-reverse justify-between">
              <div className="w-full lgl:w-[60%] text-sm md:text-base text-end">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                unde quasi porro beatae dolores dolorum explicabo debitis!
                Libero cupiditate magnam unde sequi? Nam ducimus accusamus quam
                sit, ipsa delectus quibusdam vel quos, tempore modi accusantium
                voluptate maxime, consectetur quia autem magni. Aliquam maxime
                magnam corrupti in unde fugit aut a ipsum ullam, ab ducimus sint
                assumenda officiis exercitationem modi similique, quae sit. Hic
                accusamus quis possimus itaque autem libero reprehenderit velit
                est amet, sit ab maiores voluptatibus illo laboriosam aliquid ad
                quibusdam. A fugiat sapiente quia facere, unde exercitationem
                blanditiis nam ullam voluptatibus? Adipisci praesentium, est
                omnis harum dicta numquam tempore ad quam corporis assumenda
                neque molestias culpa voluptatibus expedita nemo nulla amet
                accusantium possimus commodi unde. Blanditiis, dolorum modi.
              </div>
              <p className="w-full lgl:w-[35%] text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-start">
                The{" "}
                <span className="font-handFont ps-2 normal-case text-5xl sml:text-7xl md:text-8xl font-normal text-yellow-200">
                  Projects
                </span>{" "}
                I have worked on
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
