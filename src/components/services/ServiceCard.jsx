/* eslint-disable react/prop-types */
export default function ServiceCard(props) {
  return (
    <div className="flex flex-col gap-2 p-5 lg:hover:border bg-gradient-to-br from-primaryColor1 to-accentColor1 hover:bg-gradient-to-t hover:from-darkBG1 hover:to-darkBG1 rounded-md hover:scale-[1.05] duration-[400ms] shadow-xl cursor-pointer group">
      <div className="text-3xl text-darkBG1 group-hover:text-accentColor1">
        {props.icon}
      </div>
      <div className="text-xl md:text-2xl text-titleColor1">{props.title}</div>
      <div className="text-xs md:text-sm text-textColo1">{props.desc}</div>
    </div>
  );
}
