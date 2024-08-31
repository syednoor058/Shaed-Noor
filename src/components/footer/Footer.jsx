import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import logo from "../../assets/images/title_logo.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-5 lg:gap-10 bg-black">
      <div className="w-full bg-black pt-6 px-5 md:px-10 lg:px-20 overflow-hidden flex flex-col gap-5 lg:gap-10 rounded-t-2xl">
        <div className="w-full flex flex-col gap-5 lg:gap-10 items-center">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 items-end">
            <div className="w-full flex flex-col gap-5">
              <div>
                <img src={logo} className="h-[100px] object-contain" alt="" />
              </div>
              <div>
                <p className="text-textColo1 text-xs md:text-sm">
                  Thank you for visiting my portfolio. Stay connected and follow
                  my journey as I continue to create, innovate, and grow. I look
                  forward to staying in touch and sharing more of my work with
                  you. Your support means the world to me.
                </p>
              </div>
              <div className="w-full flex flex-col gap-5">
                <div className="uppercase text-sm md:text-base lg:text-lg text-textColo1">
                  Find Me in
                </div>
                <div className="flex flex-row gap-5 mdl:gap-10">
                  <a
                    className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl hover:-translate-y-2 pb-3"
                    href="https://www.facebook.com/shaed058/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl hover:-translate-y-2 pb-3"
                    href="https://github.com/syednoor058"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl hover:-translate-y-2 pb-3"
                    href="https://www.instagram.com/shaed_noor/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrInstagram />
                  </a>
                  <a
                    className="rounded text-accentColor1 hover:text-textColo1 duration-300 cursor-pointer text-2xl hover:-translate-y-2 pb-3"
                    href="https://www.linkedin.com/in/shaednoor/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
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
                      Over Right
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
      <div className="w-full px-7 sml:px-9 md:px-12 lg:px-20 flex flex-col gap-5">
        <div className="w-full h-[1px] bg-gradient-to-r from-primaryColor1 to-accentColor1 opacity-50"></div>
        <div className="w-full text-xs lg:text-sm text-center text-gray-400 pb-7 bg-black">
          © 2024. All rights reserved by Syed Shaeduzzaman Noor
        </div>
      </div>
    </div>
  );
}
