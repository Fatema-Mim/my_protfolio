import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div
      name="work"
      className="w-full pt-0 md:pt-28 text-gray-300 bg-[#0a192f] pb-28 md:pb-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {project.map((item, index) => (
            <div
              key={index}
              className="relative group shadow-lg shadow-[#040c16] rounded-md overflow-hidden"
            >
              {/* Project image */}
              <img
                src={item.image}
                alt="project"
                className="object-cover w-full h-48 duration-300 transform group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
                <div className="text-center">
                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="m-2"
                      >
                        <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white rounded-lg">
                          Code
                        </button>
                      </a>
                    )}
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="m-2"
                    >
                      <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white rounded-lg">
                        Live
                      </button>
                    </a>
                  </div>
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
