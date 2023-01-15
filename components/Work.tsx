import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  //project file
  const project = data;

  return (
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#61876E]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-08">
          <p className="text-4xl font-bold inline border-b-4 text-[#EEEEEE] border-[#EAE7B1]">
            Work
          </p>
          <p className="py-6">My projects so far:</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0  group-hover:opacity-100 ">
                <span className="text-2xl font-bold md:text-xl text-white tracking-wider uppercase ">
                  {item.name}
                </span>
                <p className="text-black mx-auto p-4 md:text-sm">
                  {item.description}
                </p>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
