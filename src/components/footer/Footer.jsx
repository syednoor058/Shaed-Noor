import {
  FaFacebookF,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
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
                <div className="flex flex-row gap-3">
                  <div className="p-2 rounded bg-primaryColor1 text-textColo1">
                    <FaFacebookF />
                  </div>
                  <div className="p-2 rounded bg-primaryColor1 text-textColo1">
                    <FaGithub />
                  </div>
                  <div className="p-2 rounded bg-primaryColor1 text-textColo1">
                    <FaInstagramSquare />
                  </div>
                  <div className="p-2 rounded bg-primaryColor1 text-textColo1">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center text-xs md:text-sm lg:text-base">
              <div className="flex flex-col gap-3 text-textColo1">
                <div className="uppercase font-titleFont text-primaryColor1">
                  Quick links
                </div>
                <div>Personal Details</div>
                <div>Portfolio</div>
                <div>Services</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="w-full flex lg:justify-center text-xs md:text-sm lg:text-base">
              <div className="flex flex-col gap-3 text-textColo1">
                <div className="uppercase font-titleFont text-primaryColor1">
                  Resources
                </div>
                <div>Authentication</div>
                <div>System Status</div>
                <div>Terms of Services</div>
                <div>Pricing</div>
                <div>Overright</div>
              </div>
            </div>
            <div className="w-full flex justify-center text-xs md:text-sm lg:text-base">
              <div className="flex flex-col gap-3 text-textColo1">
                <div className="uppercase font-titleFont text-primaryColor1">
                  Developers
                </div>
                <div>Documentation</div>
                <div>API References</div>
                <div>Copyright</div>
                <div>Project Experience</div>
                <div>Work Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-xs lg:text-sm text-center text-gray-400 pt-10 pb-5 bg-black">
        © 2024. All rights reserved by Syed Shaeduzzaman Noor
      </div>
    </>
  );
}
