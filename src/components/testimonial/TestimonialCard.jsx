import React from "react";
import { FaStar } from "react-icons/fa6";

export default function TestimonialCard(props) {
  return (
    <div>
      <div className="w-[380px] h-auto md:w-[450px] lg:w-[500px] mx-5 my-3 p-5 rounded flex flex-col gap-2 justify-center bg-gray-100 overflow-hidden">
        <div className="w-full flex flex-row justify-between">
          <div className="w-[75%] flex flex-row justify-between">
            <div className="w-[25%] h-auto flex justify-center items-center">
              <img src={props.img} className="object-contain rounded-[50%]" />
            </div>
            <div className="w-[70%] flex flex-col gap-1 justify-center rounded">
              <div className="text-xs lg:text-sm text-red-600 uppercase leading-none">
                {props.brand}
              </div>
              <div className="text-lg lg:text-xl font-titleFont whitespace-nowrap leading-none">
                {props.name}
              </div>
              <div className="text-xs text-gray-500 leading-none">
                {props.pos}
              </div>
            </div>
          </div>
          <div className="w-[20%] flex flex-row gap-1 text-yellow-600 justify-end text-sm lg:text-base">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex flex-col gap-1">
            <div className="text-base md:text-lg lg:text-2xl leading-none">
              {props.title}
            </div>
            <div className="text-xs text-gray-500">{props.via}</div>
          </div>
          <div className="text-xs">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
