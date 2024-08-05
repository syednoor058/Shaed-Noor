import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import logo from "../../assets/images/title_logo.png";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-black pt-10 px-7 sml:px-9 md:px-12 lg:px-20 overflow-hidden flex flex-col gap-7 lg:gap-10 rounded-t-2xl">
        <div className="w-full flex flex-col gap-7 lg:gap-10 items-center">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10 items-end">
            <div className="w-full flex flex-col gap-3 items-center">
              <img src={logo} className="w-[80%] h-auto" alt="" />
              <div>
                <p className="text-textColo1 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  nemo harum voluptatum ea necessitatibus tempore omnis unde
                  voluptas, amet ex.
                </p>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="uppercase text-sm md:text-base lg:text-lg text-textColo1">
                  Find Me in
                </div>
                <div className="flex flex-row gap-7">
                  <div className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl">
                    <FaFacebookF />
                  </div>
                  <div className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl">
                    <FaGithub />
                  </div>
                  <div className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl">
                    <GrInstagram />
                  </div>
                  <div className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center text-xs md:text-sm lg:text-base">
              <div className="flex flex-col gap-3 text-textColo1">
                <div className="uppercase font-titleFont text-accentColor1">
                  Quick links
                </div>

                <ul
                  className="flex flex-col gap-3 py-1 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Personal Details
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Portfolio
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Services
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Blog
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Contact
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex lg:justify-center text-xs md:text-sm lg:text-base">
              <div className="flex flex-col gap-3 text-textColo1">
                <div className="uppercase font-titleFont text-accentColor1">
                  Resources
                </div>

                <ul
                  className="flex flex-col gap-3 py-1 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Authentication
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      System Status
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Terms of Services
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Pricing
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Over Righgt
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex justify-center text-xs md:text-sm lg:text-base">
              <div className="flex flex-col gap-3 text-textColo1">
                <div className="uppercase font-titleFont text-accentColor1">
                  Developers
                </div>

                <ul
                  className="flex flex-col gap-3 py-1 overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Documentation
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Authentication
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      API References
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Project Experience
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                  <li>
                    <span className="w-full relative hover:text-accentColor1 duration-300 group cursor-pointer">
                      Work Experience
                      <span className="w-full h-[1px] bg-accentColor1 inline-flex absolute left-0 -bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-xs lg:text-sm text-center text-gray-400 pt-10 pb-3 bg-black">
        © 2024. All rights reserved by Syed Shaeduzzaman Noor
      </div>
    </>
  );
}
