import { GoArrowUpRight } from "react-icons/go";
import aboutImage from "../../assets/images/about_img.png";

export default function About() {
  return (
    <div id="about">
      <div className="w-full bg-darkBG2 px-7 sml:px-9 py-10 md:px-12 lg:px-20 lg:py-20 flex flex-col-reverse lg:flex-row overflow-hidden gap-10 lg:gap-0">
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <img
            className="w-[70%] lg:w-[90%] h-auto object-contain"
            src={aboutImage}
            alt=""
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="w-full flex flex-col gap-7 lg:gap-10">
            <div className="w-full flex flex-col-reverse gap-7 lg:gap-10">
              <div>
                <p className="text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-start text-titleColor2">
                  a Breif about{" "}
                  <span className="font-handFont ps-2 lowercase text-5xl sml:text-7xl md:text-8xl font-normal text-accentColor2">
                    _myself
                  </span>
                </p>
              </div>
              <div>
                <p className="uppercase font-titleFont text-xs md:text-base text-end text-primaryColor2">
                  About
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[0] lg:w-[25%]"></div>
              <div className="w-full lg:w-[75%] text-sm md:text-base text-end lg:text-end text-textColo2">
                Recent computer science graduate with a strong foundation in
                software development, algorithms, and data structures, seeking a
                challenging position as a Software Engineer. Eager to apply
                academic knowledge and hands-on experience from personal
                projects, and research to contribute to innovative projects and
                improve software solutions. Passionate about coding,
                problem-solving, and continuous learning in a dynamic,
                growth-oriented environment.
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[50%] flex justify-center items-center">
                <a className="flex justify-center items-center px-5 py-2 text-sm md:text-base text-textColo1 bg-primaryColor2 rounded cursor-pointer hover:scale-[1.1] duration-[400ms]">
                  Learn More{" "}
                  <span className="ps-2 text-xl">
                    <GoArrowUpRight />
                  </span>
                </a>
              </div>
              <div className="w-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
