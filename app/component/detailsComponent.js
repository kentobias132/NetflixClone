import React from "react";

function DetailsComponent({ heading, desc, img, flip }) {
  return (
    <div className=" text-[#fff] bg-black my-2">
      <div
        className={`flex flex-wrap items-center justify-center w-full max-w-[85%] mx-auto py-[70px] ${
          flip ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-full  md:w-1/2 md:text-start text-center">
          <h1 className="font-black text-3xl md:text-5xl ">{heading}</h1>
          <p className="text-2xl py-5">{desc}</p>
        </div>
        <div className="w-full md:w-1/2 flex m-auto">
          <img className="w-15 h-13" src={img} />
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
