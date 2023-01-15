import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3C6255] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-[#EEEEEE] border-[#EAE7B1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, I'm Simran. It's nice to meet you! I invite you to explore
              my portfolio, which I have built using Next.js and Tailwind CSS.
            </p>
          </div>
          <div>
            I am enthusiastic about both full-stack software engineering and
            security. Combining understanding of both aspects in development
            process, I aim to build secure applications that are valuable for
            businesses of all sizes. I have been passionate about programming
            since I first began learning it at the age of 11. I am deeply
            interested in understanding how programs function and finding ways
            to make them better. I am eager to apply my knowledge to assist
            businesses to succeed.
          </div>
        </div>
      </div>
    </div>
  );
};
