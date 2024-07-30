import { motion } from "framer-motion";
import { CgMouse } from "react-icons/cg";
import {
  FaChevronCircleDown,
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import heroImg from "../../assets/images/hero_image.png";

export default function Hero() {
  const textVariants = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const iconVariants = {
    hidden: {
      y: 500,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="w-full min-h-screen xl:h-screen flex bg-lightBG overflow-hidden relative">
        <div className="px-7 sml:px-9 py-20 md:px-12 lg:px-20 flex flex-col gap-10 xl:gap-0 lg:flex-row z-[3]">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[60%] xl:w-[55%] flex flex-col gap-5 justify-center items-center"
          >
            <div className="w-full flex flex-row-reverse lg:flex-row justify-between">
              <motion.div
                variants={textVariants}
                className=" w-[30%] md:w-[25%] lgl:w-[30%] xl:w-[25%] uppercase text-xs sml:text-base md:text-lg lg:text-base xl:text-xl leading-none text-end lg:text-start"
              >
                Welcome to my portfolio
              </motion.div>
              <div className="w-[65%] md:w-[70%] lgl:w-[65%] xl:w-[70%] flex flex-col gap-2">
                <motion.h1
                  variants={textVariants}
                  className="font-titleFont font-bold text-2xl sml:text-4xl md:text-5xl mdl:text-6xl lg:text-4xl xl:text-6xl leading-none lg:text-end"
                >
                  Hi, I am{" "}
                </motion.h1>
                <p className="uppercase text-darkAccent font-titleFont font-bold text-2xl sml:text-4xl md:text-5xl mdl:text-6xl lg:text-4xl xl:text-6xl leading-none lg:text-end">
                  Shaed Noor
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <p className="text-xl sml:text-2xl md:text-4xl lg:text-3xl xl:text-4xl leading-none">
                An Expert Full Stack Developer.
              </p>
            </div>
            <div className="w-full flex flex-row-reverse">
              <motion.div
                variants={textVariants}
                className="w-full xl:w-[85%] text-sm md:text-base text-center md:text-end"
              >
                Dynamic, motivated, hardworking, keen about the changes in the
                dynamic world of computer science technology. I want to export
                my potential & acquire knowledge & skills in my profession as
                required by an organization to achieve the target & develop the
                best performance.
              </motion.div>
              <div className="w-0 xl:w-[15%]"></div>
            </div>
            <div className="w-full flex flex-row">
              <motion.div
                variants={textVariants}
                className="w-[50%] flex justify-center items-center"
              >
                <a className="flex flex-row gap-1 justify-center items-center px-5 py-2 text-white rounded bg-darkAccent hover:scale-[1.1] cursor-pointer duration-[400ms] text-[10px] sml:text-xs md:text-base">
                  <span>
                    <MdFileDownload />
                  </span>
                  Download Resume
                </a>
              </motion.div>
              <motion.div
                variants={textVariants}
                className="w-[50%] flex justify-center items-center"
              >
                <a className="flex flex-row gap-1 justify-center items-center px-5 py-2 text-darkAccent rounded border border-darkAccent hover:scale-[1.1] cursor-pointer duration-[400ms] text-[10px] sml:text-xs md:text-base">
                  <span>
                    <IoCallSharp />
                  </span>
                  Contact Me
                </a>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full lg:w-[40%] xl:w-[45%] flex flex-col xl:flex-row justify-center items-center">
            <div className="w-[75%] md:w-[60%] lg:w-full xl:w-[85%] flex justify-center items-center">
              <img
                className="w-[90%] h-auto object-contain"
                src={heroImg}
                alt=""
              />
            </div>
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="w-full xl:w-[10%] xl:h-full flex flex-row xl:flex-col gap-10 xl:gap-5 justify-center xl:justify-end"
            >
              <motion.div
                variants={iconVariants}
                className="p-2 text-2xl text-darkAccent rounded"
              >
                <FaFacebookF />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="p-2 text-2xl text-darkAccent rounded"
              >
                <FaLinkedin />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="p-2 text-2xl text-darkAccent rounded"
              >
                <FaInstagramSquare />
              </motion.div>
              <motion.div
                variants={iconVariants}
                className="p-2 text-2xl text-darkAccent rounded"
              >
                <FaGithub />
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex justify-end lg:justify-start absolute -bottom-4 md:-bottom-6 lg:-bottom-7 lgl:-bottom-10 z-[0]"
        >
          <p className="text-[20vh] md:text-[30vh] lg:text-[35vh] xl:text-[40vh] leading-none font-titleFont uppercase font-bold opacity-10 whitespace-nowrap">
            Syed
          </p>
        </motion.div> */}
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-row gap-10 justify-center items-center absolute bottom-7 md:bottom-5 lgl:bottom-10 xl:bottom-12 z-[1]"
        >
          <motion.p
            variants={iconVariants}
            className="uppercase flex justify-center items-center text-darkBG font-titleFont text-xs md:text-base"
          >
            <span className="pe-2">
              <CgMouse />
            </span>
            Scroll down
          </motion.p>
          <motion.p
            variants={iconVariants}
            className="text-darkBG font-titleFont font-bold text-base md:text-lg lgl:text-xl"
          >
            <FaChevronCircleDown />
          </motion.p>
          <motion.p
            variants={iconVariants}
            className="uppercase text-darkBG font-titleFont text-xs md:text-base"
          >
            To Learn More
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
