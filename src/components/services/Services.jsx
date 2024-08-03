import { FaAppStoreIos } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div id="services">
      <div className="w-full px-7 sml:px-9 py-10 md:px-12 lg:px-20 lg:py-20 overflow-hidden flex flex-col gap-7 lg:gap-10">
        <div className="w-full flex flex-col gap-7 lg:gap-10">
          <div>
            <p className="uppercase font-titleFont text-xs md:text-base text-start">
              Expertise
            </p>
          </div>
          <div className="flex flex-col-reverse gap-10 lgl:gap-0 lgl:flex-row justify-between">
            <div className="w-full lgl:w-[60%] text-sm md:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              unde quasi porro beatae dolores dolorum explicabo debitis! Libero
              cupiditate magnam unde sequi? Nam ducimus accusamus quam sit, ipsa
              delectus quibusdam vel quos, tempore modi accusantium voluptate
              maxime, consectetur quia autem magni. Aliquam maxime magnam
              corrupti in unde fugit aut a ipsum ullam, ab ducimus sint
              assumenda officiis exercitationem modi similique, quae sit. Hic
              accusamus quis possimus itaque autem libero reprehenderit velit
              est amet, sit ab maiores voluptatibus illo laboriosam aliquid ad
              quibusdam. A fugiat sapiente quia facere, unde exercitationem
              blanditiis nam ullam voluptatibus? Adipisci praesentium, est omnis
              harum dicta numquam tempore ad quam corporis assumenda neque
              molestias culpa voluptatibus expedita nemo nulla amet accusantium
              possimus commodi unde. Blanditiis, dolorum modi.
            </div>
            <p className="w-full lgl:w-[35%] text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-end">
              The{" "}
              <span className="font-handFont ps-2 normal-case text-5xl sml:text-7xl md:text-8xl font-normal text-blue-300">
                Services
              </span>{" "}
              I can provide
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-full">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <ServiceCard
                icon=<FaAppStoreIos />
                title="App Development"
                desc="Proficient in developing robust and scalable software solutions tailored to meet diverse business needs, leveraging expertise in various programming languagess."
              />
              <ServiceCard
                icon=<FaAppStoreIos />
                title="Software Testing"
                desc="Skilled in ensuring the quality and reliability of software through meticulous testing methodologies, including automated testing, to identify and resolve defects efficiently."
              />
              <ServiceCard
                icon=<FaAppStoreIos />
                title="UI/UX Design"
                desc="Experienced in crafting intuitive and visually appealing user interfaces, with a focus on enhancing user experience through thoughtful design principles and usability."
              />
              <ServiceCard
                icon=<FaAppStoreIos />
                title="Machine Learning"
                desc="Advanced knowledge in applying machine learning algorithms to analyze data, derive insights, and develop predictive models that drive innovation and optimization."
              />
              <ServiceCard
                icon=<FaAppStoreIos />
                title="Digital Marketing"
                desc="Expertise in designing & executing comprehensive digital marketing strategies, utilizing various channels such as social media, email, & content marketing."
              />
              <ServiceCard
                icon=<FaAppStoreIos />
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
