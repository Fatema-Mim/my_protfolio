import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Redux from '../assets/redux.png';

const Skills = () => {
  const comfortableSkills = [
    { name: 'HTML5', img: HTML },
    { name: 'CSS3', img: CSS },
    { name: 'Tailwind', img: Tailwind },
  ];

  const familiarSkills = [
    { name: 'JavaScript', img: JavaScript },
    { name: 'React', img: ReactImg },
    { name: 'Redux', img: Redux },
    { name: 'Node.js', img: Node },
    { name: 'MongoDB', img: Mongo },
    { name: 'Firebase', img: FireBase },
  ];

  const tools = [
    { name: 'GitHub', img: GitHub },
  ];

  const SkillCard = ({ skill }) => (
    <div className='group bg-gradient-to-br from-[#112240] to-[#0a192f] p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1'>
      <div className='flex flex-col items-center'>
        <div className='w-20 h-20 mb-4 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-white/10 transition-all'>
          <img className='w-16 h-16 object-contain' src={skill.img} alt={`${skill.name} icon`} />
        </div>
        <p className='text-gray-300 font-medium group-hover:text-cyan-500 transition-colors'>{skill.name}</p>
      </div>
    </div>
  );

  return (
    <div name='skills' className='w-full md:min-h-screen bg-gradient-to-b from-[#112240] to-[#0a192f] text-gray-300 py-28'>
      <div className='max-w-[1000px] mx-auto px-8'>
        <div className='mb-20 text-center animate-bounce-in'>
          <p className='inline text-4xl font-bold border-b-4 border-cyan-500 text-gray-300'>
            Skills
          </p>
        </div>

        <div className='space-y-12'>
          {/* Comfortable */}
          <div className='animate-slide-in-left delay-200'>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6 flex items-center'>
              <span className='w-2 h-8 bg-cyan-500 mr-3 rounded animate-glow-pulse'></span>
              Comfortable
            </h3>
            <p className='text-gray-400 mb-4 text-sm'>HTML5, CSS3, Bootstrap, SASS, Tailwind CSS, Chakra UI, MUI, Shadcn/UI</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
              {comfortableSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Familiar */}
          <div className='animate-slide-in-right delay-400'>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6 flex items-center'>
              <span className='w-2 h-8 bg-cyan-500 mr-3 rounded animate-glow-pulse'></span>
              Familiar
            </h3>
            <p className='text-gray-400 mb-4 text-sm'>JavaScript, ES6, React, React Router, Redux, Next.js, Firebase, Node.js, MongoDB, Express.js, TypeScript</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
              {familiarSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className='animate-slide-in-left delay-700'>
            <h3 className='text-2xl font-bold text-cyan-500 mb-6 flex items-center'>
              <span className='w-2 h-8 bg-cyan-500 mr-3 rounded animate-glow-pulse'></span>
              Tools
            </h3>
            <p className='text-gray-400 mb-4 text-sm'>Git, Netlify, Figma, Jira, Vercel</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
              {tools.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;