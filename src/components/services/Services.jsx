import { FaGlobeAmericas } from "react-icons/fa";
import { FaBugSlash, FaCode } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiRobot2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div id="services">
      <div className="w-full px-5 py-10 md:px-10 lg:px-20 lg:py-20 overflow-hidden flex flex-col gap-5 lg:gap-10 bg-darkBG3">
        <div className="w-full flex flex-col gap-5 lgl:gap-10">
          <div>
            <p className="uppercase font-titleFont text-xs md:text-base text-start text-accentColor1">
              Expertise
            </p>
          </div>
          <div className="flex flex-col-reverse gap-5 lgl:gap-0 lgl:flex-row justify-between items-center">
            <div className="w-full lgl:w-[60%] text-sm md:text-base text-textColo2">
              I provide a diverse range of professional services designed to
              meet your unique needs. From cutting-edge full-stack web
              development and intuitive UI/UX design to advanced Machine
              Learning solutions and effective digital marketing strategies, I
              am dedicated to delivering quality and innovation. Whether you
              need a robust mobile application or expert consulting to guide
              your business, my goal is to help you succeed and thrive in
              today&apos;s competitive landscape. Let&apos;s work together to
              bring your vision to life.
            </div>
            <p className="w-full lgl:w-[35%] text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-end text-titleColor2">
              Quality Service{" "}
              <span className="font-handFont ps-2 lowercase text-5xl sml:text-7xl md:text-8xl font-normal text-primaryColor2">
                _delivery
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-full">
            <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-3 sml:gap-5 xl:gap-10">
              <ServiceCard
                icon=<FaCode />
                title="App Development"
                desc="Proficient in developing robust and scalable software solutions tailored to meet diverse business needs, leveraging expertise in various programming languagess."
              />
              <ServiceCard
                icon=<FaBugSlash />
                title="Software Testing"
                desc="Skilled in ensuring the quality and reliability of software through meticulous testing methodologies, including automated testing, to identify and resolve defects efficiently."
              />
              <ServiceCard
                icon=<LuLayoutDashboard />
                title="UI/UX Design"
                desc="Experienced in crafting intuitive and visually appealing user interfaces, with a focus on enhancing user experience through thoughtful design principles and usability."
              />
              <ServiceCard
                icon=<RiRobot2Fill />
                title="Machine Learning"
                desc="Advanced knowledge in applying machine learning algorithms to analyze data, derive insights, and develop predictive models that drive innovation and optimization."
              />
              <ServiceCard
                icon=<IoStatsChart />
                title="Digital Marketing"
                desc="Expertise in designing & executing comprehensive digital marketing strategies, utilizing various channels such as social media, email, & content marketing."
              />
              <ServiceCard
                icon=<FaGlobeAmericas />
                title="SEO"
                desc="Proficient in optimizing website content and structure to improve visibility and ranking on search engine results pages, utilizing strategic keyword research."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
