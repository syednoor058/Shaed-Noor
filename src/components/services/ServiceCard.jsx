/* eslint-disable react/prop-types */
export default function ServiceCard(props) {
  return (
    <div className="backdrop-blur-sm flex flex-col gap-2 p-5 hover:border hover:border-darkBG rounded hover:scale-[1.05] duration-[400ms] shadow-xl cursor-pointer">
      <div className="text-4xl">{props.icon}</div>
      <div className="text-xl md:text-2xl">{props.title}</div>
      <div className="text-xs md:text-sm">{props.desc}</div>
    </div>
  );
}
