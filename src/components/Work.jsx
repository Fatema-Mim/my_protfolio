import React from "react";
import { data } from "../data/data.js";
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Work = () => {
  const project = data;

  return (
    <div
      name="work"
      className="w-full md:min-h-screen text-gray-300 bg-gradient-to-b from-[#0a192f] to-[#112240] py-28"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-20 text-center animate-bounce-in">
          <p className="inline text-4xl font-bold border-b-4 border-cyan-500 text-gray-300">
            Projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 animate-fade-in-scale delay-${Math.min(index * 100 + 200, 700)}`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt="project"
                  className="object-cover w-full h-full duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex gap-3 mb-4">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500 text-cyan-500 hover:text-white rounded-lg transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500 transform hover:scale-105 hover:shadow-md hover:shadow-cyan-500/30"
                    >
                      <FiGithub size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105"
                  >
                    <FiExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
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
