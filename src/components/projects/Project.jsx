import React from "react";
import appTesting from "../../assets/images/projects_images/app_testing.webp";
import housePred from "../../assets/images/projects_images/house_price_pred.webp";
import hungryShaed from "../../assets/images/projects_images/hungry_shaed.webp";
import movieSuggest from "../../assets/images/projects_images/movie_sugges_sys.webp";
import personalPortfolio from "../../assets/images/projects_images/personal_portfolio.webp";
import carPricePred from "../../assets/images/projects_images/preowned_car_price_pred.webp";
import pluginsTesting from "../../assets/images/projects_images/wordpress_plugins_testing.webp";
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center items-center md:px-20 lg:px-0">
          <ProjectCard
            coverImg={housePred}
            desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
            githubLink="https://github.com/syednoor058/Machine_Learning_Real_Estate_Price_Prediction"
          />
          <ProjectCard
            coverImg={hungryShaed}
            desc="Created a food delivery app using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include browsing menus, placing orders, and real-time delivery tracking, ensuring a seamless user experience."
            githubLink="https://github.com/syednoor058/hungryShaed-Web-Application-MERN-stack"
          />
          <ProjectCard
            coverImg={movieSuggest}
            desc="Developed a movie suggestion system using machine learning, Streamlit, Django, and MongoDB. Provides personalized recommendations with an interactive interface and robust backend."
            githubLink="https://github.com/syednoor058/Machine-Learning-movie-suggestion-system"
          />
          <ProjectCard
            coverImg={appTesting}
            desc="Built an e-learning app and conducted automation testing using Selenium and JUnit. Ensured functionality, reliability, and performance, providing a seamless user experience."
            githubLink="https://github.com/syednoor058/LearnIT360-Selenium-Automation-Testing-Project"
          />
          <ProjectCard
            coverImg={personalPortfolio}
            desc="Built a personal portfolio website using React and Tailwind CSS. Showcases work, skills, and experiences in a clean, modern design, reflecting proficiency in front-end development."
            githubLink="https://github.com/syednoor058/shaed-noor-portfolio-site"
          />
          <ProjectCard
            coverImg={carPricePred}
            desc="Developed a car price prediction model with machine learning. Built a responsive website using React.js, FastAPI, and Tailwind CSS, allowing users to estimate car prices accurately."
            githubLink="https://github.com/syednoor058/AI_Machine_Learning-preowned_car_price_prediction"
          />
          <ProjectCard
            coverImg={pluginsTesting}
            desc="Conducted WordPress plugin testing using Playwright, JavaScript, TestNG, and JUnit. Ensured functionality, compatibility, and performance, delivering reliable and high-quality solutions."
            githubLink="https://github.com/syednoor058/WordPress-plugin-automation-test-by-Playwright"
          />
        </div>
      </div>
    </div>
  );
}
