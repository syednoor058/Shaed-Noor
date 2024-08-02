import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../../assets/images/title_logo.png";

export default function Footer() {
  return (
    <div className="w-full bg-darkBG py-10 lg:py-20 px-7 sml:px-9 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row gap-7 lg:gap-10 items-end">
        <div className="w-full md:w-[50%] flex flex-row md:flex-col gap-7 lg:gap-10">
          <img src={logo} className="w-[50%] h-auto" alt="" />
          <div className="flex flex-col gap-3">
            <div className="uppercase text-lg text-gray-300">Find Me in</div>
            <div className="flex flex-row gap-3">
              <div className="p-2 rounded bg-gray-200">
                <FaFacebookF />
              </div>
              <div className="p-2 rounded bg-gray-200">
                <FaGithub />
              </div>
              <div className="p-2 rounded bg-gray-200">
                <FaInstagramSquare />
              </div>
              <div className="p-2 rounded bg-gray-200">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-row text-gray-100 justify-between">
          <div className="flex flex-col items-center gap-7 lg:gap-10">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Projects</div>
          </div>
          <div className="flex flex-col items-center gap-7 lg:gap-10">
            <div>Testimonials</div>
            <div>Contact</div>
            <div>Authentication</div>
            <div>Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
}
