import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaCode, FaGithub } from "react-icons/fa6";
import fastApi from "../assets/images/project_1_img/fastapi.png";
import github from "../assets/images/project_1_img/github.png";
import heroImg from "../assets/images/project_1_img/hero_img.png";
import nextJs from "../assets/images/project_1_img/nextjs.png";
import numpy from "../assets/images/project_1_img/numpy.png";
import objectiveImg from "../assets/images/project_1_img/objectives.png";
import pandas from "../assets/images/project_1_img/pandas.png";
import python from "../assets/images/project_1_img/python.png";
import scikit from "../assets/images/project_1_img/scikit_learn.png";
import tailwind from "../assets/images/project_1_img/tailwind.png";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";

export default function HousePricePredProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-darkBG2 overflow-hidden">
      <Navbar2 />
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        <div className="bg-darkBG2 w-full flex overflow-hidden relative justify-center items-center pt-24">
          <div className="w-full flex flex-col lg:flex-row justify-between gap-10 md:gap-20 lg:gap-0">
            <div className="w-full lg:w-[60%] xl:w-[55%] flex justify-center px-7 sml:px-9  md:px-12 lg:px-0 lg:ps-20 flex-col gap-7 lg:gap-10">
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="font-titleFont text-titleColor3 font-bold text-2xl sml:text-4xl md:text-5xl mdl:text-6xl lg:text-4xl xl:text-6xl">
                  Real Estate House Price{" "}
                  <span className="text-transparent bg-gradient-to-tr from-primaryColor1 to-accentColor1 bg-clip-text">
                    Prediction
                  </span>{" "}
                  System
                </div>
                <div className="font-handFont text-xl sml:text-2xl md:text-4xl text-accentColor1">
                  Machine Learning Prediction Application
                </div>
                <div>
                  <p className="text-xs sml:text-sm md:text-base text-textColo3">
                    The Real Estate House Price Prediction System is a machine
                    learning-powered application designed to estimate the market
                    value of residential properties. This system aids real
                    estate agents, buyers, sellers, and investors by providing
                    accurate price predictions based on various property
                    attributes, enabling more informed decision-making in the
                    real estate market.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-row gap-10 justify-center">
                  <a className="px-5 sml:px-7 xl:px-10 py-2 rounded text-sm sml:text-base xl:text-xl bg-primaryColor1 text-textColo1 cursor-pointer hover:scale-110 duration-[400ms] flex items-center">
                    <span className="pe-2">
                      <FaGithub />{" "}
                    </span>{" "}
                    Github
                  </a>
                  <a className="px-5 sml:px-7 xl:px-10 py-1 text-sm sml:text-base xl:text-xl rounded border border-primaryColor1 text-primaryColor1 cursor-pointer hover:scale-110 duration-[400ms] flex items-center">
                    <span className="pe-2">
                      <FaCode />
                    </span>{" "}
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[35%] xl:w-[40%] flex justify-end">
              <img
                className="w-[90%] md:w-[80%] lg:w-full h-auto object-contain"
                src={heroImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-0 py-10 md:py-16 lg:py-20 lg:px-20 bg-darkBG1">
          <Marquee
            autoFill={true}
            speed={120}
            direction="left"
            className="hover:cursor-pointer"
            gradient={true}
            gradientColor="#00171F"
            gradientWidth={50}
          >
            <img src={python} className="w-[100px] md:w-[150px] h-auto mx-5" />
            <img src={scikit} className="w-[100px] md:w-[150px] h-auto mx-5" />
            <img src={numpy} className="w-[100px] md:w-[150px] h-auto mx-5" />
            <img src={pandas} className="w-[100px] md:w-[150px] h-auto mx-5" />
            <img src={fastApi} className="w-[100px] md:w-[150px] h-auto mx-5" />
            <img src={nextJs} className="w-[100px] md:w-[150px] h-auto mx-5" />
            <img
              src={tailwind}
              className="w-[100px] md:w-[150px] h-auto mx-5"
            />
            <img src={github} className="w-[100px] md:w-[150px] h-auto mx-5" />
          </Marquee>
        </div>
        <div className="flex flex-col gap-10 px-7 sml:px-9  md:px-12 lg:px-20">
          <div className="font-titleFont uppercase font-bold text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            Project{" "}
            <span className="font-handFont font-normal text-primaryColor1 normal-case ps-2 text-5xl sml:text-7xl md:text-8xl">
              _objectives
            </span>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 xl:gap-10">
            <div className="h-[250px] bg-gradient-to-tr from-primaryColor1 to-accentColor1 rounded"></div>
            <div className="h-[250px] bg-gradient-to-tr from-primaryColor1 to-accentColor1 rounded"></div>
            <div className="h-[250px] bg-gradient-to-tr from-primaryColor1 to-accentColor1 rounded"></div>
          </div>
        </div>
        <div className="px-7 sml:px-9  md:px-12 lg:px-20 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-between">
          <div className="w-full lg:w-[30%] xl:w-[35%] flex justify-center items-center">
            <img className="object-contain" src={objectiveImg} alt="" />
          </div>
          <div className="w-full lg:w-[65%] xl:w-[60%] flex flex-col gap-10 text-titleColor2">
            <div className="font-titleFont font-bold uppercase text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-end">
              Key{" "}
              <span className="font-handFont font-normal text-primaryColor1 normal-case ps-2 text-5xl sml:text-7xl md:text-8xl">
                _features
              </span>
            </div>
            <div className="flex flex-col gap-3 text-textColo2 text-sm md:text-base lg:text-sm xl:text-base">
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Input Property Details:
                </span>
                Allow users to input various property attributes such as
                location, size, number of bedrooms and bathrooms, age,
                condition, and amenities.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Price Prediction:
                </span>
                Generate an estimated market value based on the provided
                property details using advanced machine learning algorithms.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">Visualization:</span>
                Offer visual insights and trends to show how different factors
                affect house prices.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Comparative Analysis:
                </span>
                Enable users to compare predicted prices with historical data
                and similar properties in the area.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Location-Based Insights:
                </span>
                Provide detailed insights based on geographical location,
                including neighborhood trends and local amenities.
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 sml:px-9  md:px-12 lg:px-20 flex gap-10 flex-col-reverse lg:gap-0 lg:flex-row-reverse justify-between">
          <div className="w-full lg:w-[30%] xl:w-[35%] flex justify-center items-center">
            <img className="object-contain" src={objectiveImg} alt="" />
          </div>
          <div className="w-full lg:w-[65%] xl:w-[60%] flex flex-col gap-10 text-titleColor2">
            <div className="font-titleFont font-bold uppercase text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Implimentation{" "}
              <span className="font-handFont font-normal text-primaryColor1 normal-case ps-2 text-5xl sml:text-7xl md:text-8xl">
                _steps
              </span>
            </div>
            <div className="flex flex-col gap-3 text-textColo2 text-sm md:text-base lg:text-sm xl:text-base">
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Data Collection and Preprocessing:
                </span>
                Collect comprehensive datasets of residential property sales
                from various sources. Clean and preprocess the data to handle
                missing values, outliers, and categorical encoding.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Feature Engineering:
                </span>
                Identify and create relevant features that impact house prices,
                such as location, property size, age, and additional amenities.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Model Development:
                </span>
                Train multiple machine learning models (e.g., linear regression,
                decision trees, random forests, gradient boosting) and evaluate
                their performance.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  System Integration:
                </span>
                Develop backend and frontend components to integrate the
                prediction model with a user-friendly interface.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Testing and Evaluation:
                </span>
                Test the system with real-world data, validate the model&apos;s
                accuracy, and make necessary adjustments.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">Deployment:</span>
                Deploy the application on a cloud platform to ensure wide
                accessibility and scalability.
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 sml:px-9  md:px-12 lg:px-20 flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row justify-between">
          <div className="w-full lg:w-[30%] xl:w-[35%] flex justify-center items-center">
            <img className="object-contain" src={objectiveImg} alt="" />
          </div>
          <div className="w-full lg:w-[65%] xl:w-[60%] flex flex-col gap-10 text-titleColor2">
            <div className="font-titleFont font-bold uppercase text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-end">
              Expected{" "}
              <span className="font-handFont font-normal text-primaryColor1 normal-case ps-2 text-5xl sml:text-7xl md:text-8xl">
                _outcomes
              </span>
            </div>
            <div className="flex flex-col gap-3 text-textColo2 text-sm md:text-base lg:text-sm xl:text-base">
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Enhanced Pricing Accuracy:
                </span>
                Provide users with accurate price estimates for residential
                properties, reducing the uncertainty in buying, selling, and
                investing decisions.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  Market Insights:
                </span>
                Offer valuable insights into the factors affecting house prices,
                helping users understand market trends.
              </div>
              <div className="">
                <span className="font-bold uppercase pe-2">
                  User Convenience:
                </span>
                Simplify the process of estimating house prices with a
                straightforward, user-friendly application.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
