/* eslint-disable react/prop-types */
export default function ServiceCard(props) {
  return (
    <div className="flex flex-col gap-2 md:gap-3 p-3 sml:p-3 md:p-5 lg:hover:border bg-gradient-to-br from-primaryColor1 to-accentColor1 hover:bg-gradient-to-t hover:from-darkBG1 hover:to-darkBG1 rounded-md md:hover:scale-[1.05] duration-[400ms] shadow-xl cursor-pointer group justify-center ">
      <div className="flex text-xl sml:text-3xl mdl:text-3xl lg:text-3xl text-yellow-200 group-hover:text-accentColor1">
        {props.icon}
      </div>
      <div className="text-sm sml:text-base md:text-2xl mdl:text-2xl lg:text-2xl text-titleColor1 leading-none font-semibold">
        {props.title}
      </div>
      <div className="text-[9px] sml:text-xs md:text-sm mdl:text-sm lg:text-xs lgl:text-sm text-textColo1">
        {props.desc}
      </div>
    </div>
  );
}
