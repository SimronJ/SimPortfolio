import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#61876E]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#EAE7B1] text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#EEEEEE]">
          Simranjeet Singh
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#DDDDDD]">
          Software Engineer at NYC.
        </h2>
        <p className="text-[#DDDDDD] py-4 max-w-[700px]">
          I am a Full Stack software engineer with a passion for security and
          keeping up to date with the latest trends. I have experience in both
          front-end and back-end development, and have a strong understanding of
          the security measures needed to protect a website or application. I am
          always looking for ways to improve my skills and stay current with the
          latest technologies and industry trends.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A6BB8D] hover:border-[#EAE7B1]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
