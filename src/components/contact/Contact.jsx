import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import contactImg from "../../assets/images/contact_illustrator.webp";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameErrMsg, setFirstNameErrMsg] = useState("");
  const [lastNameErrMsg, setLastNameErrMsg] = useState("");
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [subErrMsg, setSubErrMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const form = useRef();

  const closeSuccessMsg = (e) => {
    e.preventDefault();
    setSuccessMsg("");
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (firstName === "") {
      setFirstNameErrMsg("* First name is required!");
    } else {
      setFirstNameErrMsg("");
      if (lastName === "") {
        setLastNameErrMsg("* Last name is required!");
      } else {
        setLastNameErrMsg("");
        if (phoneNumber === "") {
          setPhoneErrMsg("* Phone number is required!");
        } else {
          setPhoneErrMsg("");
          if (email === "") {
            setEmailErrMsg("* Email is required!");
          } else if (!emailValidation(email)) {
            setEmailErrMsg("* Invalid email address!");
          } else {
            setEmailErrMsg("");
            if (subject === "") {
              setSubErrMsg("* Subject is required!");
            } else {
              setSubErrMsg("");
              if (message === "") {
                setErrMsg("* Blank message can not be sent!");
              } else {
                setErrMsg("");
                setSuccessMsg(
                  `Thank you dear ${
                    firstName + " " + lastName
                  }, your message has been sent successfully!`
                );

                emailjs
                  .sendForm(
                    "service_k918xce",
                    "template_uzavnvf",
                    form.current,
                    {
                      publicKey: "RVdjFgeK3-m4-E8RM",
                    }
                  )
                  .then(
                    () => {
                      console.log("SUCCESS!");
                    },
                    (error) => {
                      console.log("FAILED...", error.text);
                    }
                  );
                setErrMsg("");
                setFirstName("");
                setLastName("");
                setPhoneNumber("");
                setEmail("");
                setSubject("");
                setMessage("");
                setFirstNameErrMsg("");
                setLastNameErrMsg("");
                setPhoneErrMsg("");
                setEmailErrMsg("");
                setSubErrMsg("");
              }
            }
          }
        }
      }
    }
  };

  return (
    <div id="contact">
      <div className="w-full py-10 lg:py-20 bg-darkBG1 flex flex-col gap-5 lg:gap-10 overflow-hidden">
        <div className="w-full px-5  md:px-10 lg:px-20 overflow-hidden flex flex-col gap-5 lg:gap-10">
          <div className="">
            <p className="uppercase font-titleFont text-xs md:text-base text-end text-accentColor1">
              Contact
            </p>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-5 lg:gap-10 items-center">
            <div className="w-full xl:w-[60%] flex flex-col gap-5">
              <div className="w-full text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-titleColor1">
                Let&apos;s have a{"  "}
                <span className="font-handFont ps-2 normal-case text-5xl sml:text-7xl md:text-8xl font-normal text-[#dae85e]">
                  _conversation
                </span>
              </div>
              <div className="w-full flex flex-col-reverse md:flex-row gap-5 justify-center items-center">
                <div className="w-full h-auto md:w-[50%] flex justify-center items-center">
                  <img src={contactImg} alt="" />
                </div>
                <div className="w-full md:w-[50%] flex flex-col gap-5">
                  <div className="text-sm md:text-base text-textColo1 text-end">
                    I would love to hear from you! Whether you have a project in
                    mind, need more information about my services, or just want
                    to connect, feel free to reach out. I'm always excited to
                    explore new opportunities and discuss how I can help bring
                    your vision to life.
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="uppercase text-lg text-textColo1">
                      Find Me in
                    </div>
                    <div className="flex flex-row gap-5 mdl:gap-10 text-2xl">
                      <a
                        className=" rounded text-primaryColor1 cursor-pointer hover:bg-transparent hover:text-darkBG3 hover:-translate-y-2 duration-300 pb-2"
                        href="https://www.facebook.com/shaed058/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        className=" rounded text-primaryColor1 cursor-pointer hover:bg-transparent hover:text-darkBG3 hover:-translate-y-2 duration-300 pb-2"
                        href="https://github.com/syednoor058"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a
                        className=" rounded text-primaryColor1 cursor-pointer hover:bg-transparent hover:text-darkBG3 hover:-translate-y-2 duration-300"
                        href="https://www.instagram.com/shaed_noor/ pb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GrInstagram />
                      </a>
                      <a
                        className=" rounded text-primaryColor1 cursor-pointer hover:bg-transparent hover:text-darkBG3 hover:-translate-y-2 duration-300 pb-2"
                        href="https://www.linkedin.com/in/shaednoor/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-full md:w-[80%] mdl:w-[70%] xl:w-[40%] bg-darkBG3 rounded p-5 flex flex-col gap-10">
              <div className="text-xl uppercase text-center text-titleColor2">
                Drop a message
              </div>
              <div>
                <form className="flex flex-col gap-5 px-4 mdl:px-7" ref={form}>
                  <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-[50%]">
                      <input
                        className="w-full h-8 outline-none border-b-[1px] border-darkBG1 text-sm md:text-base bg-transparent"
                        placeholder="First name"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        value={firstName}
                        type="text"
                        name="first_name"
                      />
                      {firstNameErrMsg && (
                        <p className="pt-1 text-accentColor1 text-xs tracking-wide">
                          {firstNameErrMsg}
                        </p>
                      )}
                    </div>
                    <div className="w-full md:w-[50%]">
                      <input
                        className="w-full h-8 outline-none border-b-[1px] border-darkBG1 bg-transparent text-sm md:text-base"
                        placeholder="Last name"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        value={lastName}
                        type="text"
                        name="last_name"
                      />
                      {lastNameErrMsg && (
                        <p className="pt-1 text-accentColor1 text-xs tracking-wide">
                          {lastNameErrMsg}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full h-8 outline-none border-b-[1px] border-darkBG1 bg-transparent text-sm md:text-base"
                      placeholder="Phone number"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      value={phoneNumber}
                      type="text"
                      name="from_mobile"
                    />
                    {phoneErrMsg && (
                      <p className="pt-1 text-accentColor1 text-xs tracking-wide">
                        {phoneErrMsg}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full h-8 outline-none border-b-[1px] border-darkBG1 bg-transparent text-sm md:text-base"
                      placeholder="Email address"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      name="from_email"
                      type="email"
                    />
                    {emailErrMsg && (
                      <p className="pt-1 text-accentColor1 text-xs tracking-wide">
                        {emailErrMsg}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full h-8 outline-none border-b-[1px] border-darkBG1 bg-transparent text-sm md:text-base"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name="from_subject"
                      type="text"
                    />
                    {subErrMsg && (
                      <p className="pt-1 text-accentColor1 text-xs tracking-wide">
                        {subErrMsg}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                      className="w-full outline-none border-b-[1px] border-darkBG1 bg-transparent text-sm md:text-base"
                      placeholder="Your message"
                      type="text"
                      cols="lg:30"
                      rows="5"
                    ></textarea>
                    {errMsg && (
                      <p className="pt-1 text-accentColor1 text-xs tracking-wide">
                        {errMsg}
                      </p>
                    )}
                  </div>
                  <div
                    className="w-full cursor-pointer bg-accentColor1 rounded py-2 md:py-3 px-3 flex justify-center items-center text-textColo1 group"
                    onClick={handleSend}
                  >
                    <button className="flex justify-center items-center text-sm md:text-base group-hover:scale-[1.2] duration-300">
                      <span className="text-xl pe-2">
                        <IoIosSend />
                      </span>
                      Send
                    </button>
                  </div>
                  <AnimatePresence>
                    {successMsg && (
                      <motion.div
                        initial={{ x: "-50%", opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }}
                        exit={{
                          x: "-50%",
                          opacity: 0,
                          transition: { duration: 0.5 },
                        }}
                        className="w-full mb-2 py-2 px-3 rounded-sm bg-green-500 text-white text-base tracking-wide flex justify-between z-50"
                      >
                        {successMsg}
                        <span>
                          <button
                            className="cursor-pointer text-bodyColor"
                            onClick={closeSuccessMsg}
                          >
                            <CgClose />
                          </button>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="full flex justify-center items-center px-2 sml:px-5 md:px-7 lg:px-0 pt-7 lg:pt-10">
          <div className="w-full lg:w-[90%] bg-gradient-to-br from-primaryColor1 to-accentColor1 text-white rounded-xl px-0 mdl:px-5 lg:px-10">
            <div className="grid grid-cols-3">
              <div className="p-2 md:p-4 flex flex-col gap-1 items-center">
                <div className="flex p-2 md:p-3 rounded-[50%] mt-[-37px] md:mt-[-56px] bg-[#141618] relative">
                  <div className="p-2 md:p-4 text-xl md:text-3xl rounded-[50%]  bg-gradient-to-br from-primaryColor1 to-accentColor1 text-white">
                    <IoLocationSharp />
                  </div>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -left-[10px] md:-left-[24.5px] z-[100] rounded-tr-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -right-[10px] md:-right-[24.5px] z-[100] rounded-tl-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                </div>
                <div className="uppercase font-titleFont font-bold text-xs md:text-sm lg:text-base leading-none md:pt-3">
                  Address
                </div>
                <div className="text-[8px] md:text-xs text-center">
                  Khulna Sadar, Khulna-9100, Bangladesh
                </div>
              </div>
              <div className="p-2 md:p-4 flex flex-col gap-1 items-center">
                <div className="flex p-2 md:p-3 rounded-[50%] mt-[-37px] md:mt-[-56px] bg-[#141618] relative">
                  <div className="p-2 md:p-4 text-xl md:text-3xl rounded-[50%]  bg-gradient-to-br from-primaryColor1 to-accentColor1 text-white">
                    <MdCall />
                  </div>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -left-[10px] md:-left-[24.5px] z-[100] rounded-tr-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -right-[10px] md:-right-[24.5px] z-[100] rounded-tl-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                </div>
                <div className="uppercase font-titleFont font-bold text-xs md:text-sm lg:text-base leading-none md:pt-3">
                  Phone
                </div>
                <div className="text-[8px] md:text-xs text-center">
                  <div className="flex flex-col gap-1 leading-none">
                    <div>+8801782734573</div>
                    <div>+8801893204778</div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-4 flex flex-col gap-1 items-center">
                <div className="flex p-2 md:p-3 rounded-[50%] mt-[-37px] md:mt-[-56px] bg-[#141618] relative">
                  <div className="p-2 md:p-4 text-xl md:text-3xl rounded-[50%] bg-gradient-to-br from-primaryColor1 to-accentColor1 text-white">
                    <IoMdMail />
                  </div>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -left-[10px] md:-left-[24.5px] z-[100] rounded-tr-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                  <span className="w-3.5 h-3.5 md:w-7 md:h-7 absolute top-7 md:top-10 -right-[10px] md:-right-[24.5px] z-[100] rounded-tl-[24px] shadow-shadow2 md:shadow-shadow1"></span>
                </div>
                <div className="uppercase font-titleFont font-bold text-xs md:text-sm lg:text-base leading-none md:pt-3">
                  Email
                </div>
                <div className="text-[8px] md:text-xs text-center text-wrap">
                  syednoor058@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
