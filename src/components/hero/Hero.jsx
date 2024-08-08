import { motion } from "framer-motion";
import { CgMouse } from "react-icons/cg";
import {
  FaChevronCircleDown,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdCall, MdFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import resume from "../../assets/documents/resume of SYED SHAEDUZZAMAN NOOR.pdf";
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

  const mouseBlink = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: [0, 1, 0.1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Sqa Engineer.",
      "Full Stack Developer.",
      "AI Engineer.",
      "Seo Specialist.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <div id="home">
      <div className="w-full min-h-screen xl:h-screen flex bg-darkBG1 overflow-hidden relative justify-center items-center">
        <div className="px-7 sml:px-9 py-20 md:px-12 lg:px-20 flex flex-col gap-10 xl:gap-0 lg:flex-row z-[3]">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[60%] xl:w-[55%] flex flex-col gap-5 justify-center items-center"
          >
            <div className="w-full flex flex-row-reverse lg:flex-row justify-between text-textColo1">
              <motion.div
                variants={textVariants}
                className=" w-[30%] md:w-[25%] lgl:w-[30%] xl:w-[25%] text-xs sml:text-base md:text-lg lg:text-base xl:text-xl leading-none text-end lg:text-start uppercase"
              >
                Welcome to my portfolio
              </motion.div>
              <div className="w-[65%] md:w-[70%] lgl:w-[65%] xl:w-[70%] flex flex-col gap-2">
                <motion.h1
                  variants={textVariants}
                  className="font-titleFont font-bold text-2xl sml:text-4xl md:text-5xl mdl:text-6xl lg:text-4xl xl:text-6xl leading-none lg:text-end text-titleColor1"
                >
                  Hi, I am{" "}
                </motion.h1>
                <p className="uppercase text-accentColor1 font-titleFont font-bold text-2xl sml:text-4xl md:text-5xl mdl:text-6xl lg:text-4xl xl:text-6xl leading-none lg:text-end">
                  Shaed Noor
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <p className="text-xl sml:text-2xl md:text-4xl lg:text-3xl xl:text-4xl leading-none text-titleColor1">
                An Expert{" "}
                <span className="font-handFont text-2xl ps-2 md:ps-1 mdl:ps-2 sml:text-3xl md:text-5xl lg:text-4xl xl:text-5xl">
                  {text}
                </span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#6D72C3"
                />
              </p>
            </div>
            <div className="w-full flex flex-row-reverse">
              <motion.div
                variants={textVariants}
                className="w-full xl:w-[85%] text-sm md:text-base text-center md:text-end text-textColo1"
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
                <a
                  className="flex flex-row gap-1 justify-center items-center px-5 py-[9px] text-titleColor1 rounded bg-primaryColor1 hover:scale-[1.1] cursor-pointer duration-[400ms] text-[10px] sml:text-xs md:text-base"
                  href={resume}
                  download="Resume of SYED SHAEDUZZAMAN NOOR.pdf"
                >
                  <span className="text-lg">
                    <MdFileDownload />
                  </span>
                  Download Resume
                </a>
              </motion.div>
              <motion.div
                variants={textVariants}
                className="w-[50%] flex justify-center items-center"
              >
                <Link
                  className="flex flex-row gap-1 justify-center items-center px-5 py-2 text-primaryColor1 rounded border border-primaryColor1 hover:scale-[1.1] cursor-pointer duration-[400ms] text-[10px] sml:text-xs md:text-base"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span className="text-lg">
                    <MdCall />
                  </span>
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full lg:w-[40%] xl:w-[45%] flex flex-col xl:flex-row justify-center items-center gap-10 lg:gap-5">
            <div className="w-[75%] md:w-[60%] lg:w-full xl:w-[85%] flex justify-center items-center">
              <img src={heroImg} alt="" />
            </div>
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="w-full xl:w-[10%] xl:h-full flex flex-row xl:flex-col gap-10 xl:gap-5 justify-center xl:justify-end"
            >
              <motion.a
                href="https://www.facebook.com/shaed058/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                className="p-2 text-2xl hover:text-3xl text-textColo1 rounded hover:text-primaryColor1 cursor-pointer duration-300"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                variants={iconVariants}
                className="p-2 text-2xl hover:text-3xl text-textColo1 rounded hover:text-primaryColor1 cursor-pointer duration-300"
                href="https://www.linkedin.com/in/shaednoor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                variants={iconVariants}
                className="p-2 text-2xl hover:text-3xl text-textColo1 rounded hover:text-primaryColor1 cursor-pointer duration-300"
                href="https://www.instagram.com/shaed_noor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </motion.a>
              <motion.a
                variants={iconVariants}
                className="p-2 text-2xl hover:text-3xl text-textColo1 rounded hover:text-primaryColor1 cursor-pointer duration-300"
                href="https://github.com/syednoor058"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-row gap-10 justify-center items-center absolute bottom-7 md:bottom-5 lgl:bottom-10 xl:bottom-12 z-[1]"
        >
          <motion.p
            variants={iconVariants}
            className="uppercase flex justify-center items-center text-textColo1 font-titleFont text-xs md:text-base"
          >
            <motion.span
              variants={mouseBlink}
              initial="hidden"
              animate="visible"
              className="pe-2"
            >
              <CgMouse />
            </motion.span>
            Scroll down
          </motion.p>
          <motion.p
            variants={iconVariants}
            className="text-accentColor1 font-titleFont font-bold text-base md:text-lg lgl:text-xl"
          >
            <FaChevronCircleDown />
          </motion.p>
          <motion.p
            variants={iconVariants}
            className="uppercase text-textColo1 font-titleFont text-xs md:text-base"
          >
            To Learn More
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
