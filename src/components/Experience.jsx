import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Emplynk',
      companyUrl: 'https://emplynk.com/',
      position: 'Frontend Developer',
      location: 'Remote, Dhaka',
      duration: 'April 2025 - Present',
      responsibilities: [
        'Developing interactive interfaces and responsive layouts using React, JavaScript, Tailwind CSS, Bootstrap, and SASS.',
        'Implementing component-driven architecture, improving render efficiency, and maintaining clean, scalable code.',
        'Connecting frontend features with REST APIs, optimizing for mobile performance, and ensuring smooth, user-friendly workflows through solid UI decision-making.'
      ]
    },
    {
      id: 2,
      company: 'Exabyting',
      companyUrl: 'https://exabyting.com/',
      position: 'User Interface Developer',
      location: 'Mohakhali, Dhaka',
      duration: 'May 2023 - March 2025',
      responsibilities: [
        'UI Developer skilled in building responsive web apps using React, JavaScript, Bootstrap, SASS and Tailwind CSS.',
        'Proficient in React, reusable components, state management, and performance optimization.',
        'Experienced in REST API integration, mobile-first design, and design judgment for user-centric interfaces.'
      ]
    },
    {
      id: 3,
      company: 'Novatech Solutions AB',
      companyUrl: 'https://novatech-solutions.se/',
      position: 'Jr Frontend Developer',
      location: 'Sweden, Remote',
      duration: 'November 2021 - February 2023',
      responsibilities: [
        'Designed responsive websites with Tailwind CSS, ensuring modern UIs and accessibility.',
        'Transformed UI/UX wireframes into high-performing pages using functional programming patterns.',
        'Collaborated remotely with cross-functional teams and followed clean code practices.'
      ]
    }
  ];

  return (
    <div name='experience' className='w-full md:min-h-screen bg-[#0a192f] text-gray-300 py-28'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='mb-20 text-center animate-bounce-in'>
          <p className='inline text-4xl font-bold border-b-4 border-cyan-500 text-gray-300'>
            Experience
          </p>
        </div>

        <div className='relative'>
          {/* Vertical Timeline Line */}
          <div className='hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-cyan-500 animate-slide-down delay-200'></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'} delay-${index === 0 ? '300' : index === 1 ? '500' : '700'}`}>
              {/* Timeline Dot */}
              <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8'>
                <div className='w-6 h-6 bg-cyan-500 rounded-full border-4 border-[#0a192f] z-10 animate-glow-pulse'></div>
              </div>

              {/* Content - Alternating sides */}
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start`}>
                {/* Spacer for alternating layout */}
                <div className='hidden md:block md:w-1/2'></div>

                {/* Card */}
                <div className='md:w-1/2 md:px-8'>
                  <div className='bg-[#112240] rounded-lg p-6 shadow-lg relative'>
                    {/* Arrow pointing to timeline */}
                    <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}>
                      <div className={`w-0 h-0 ${index % 2 === 0 ? 'border-l-[20px] border-l-[#112240]' : 'border-r-[20px] border-r-[#112240]'} border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent`}></div>
                    </div>

                    {/* Duration Badge */}
                    <div className='inline-block bg-cyan-500 text-white text-sm px-3 py-1 rounded-full mb-3'>
                      {exp.duration}
                    </div>

                    <h3 className='text-2xl font-bold text-cyan-500'>{exp.position}</h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-xl text-gray-400 hover:text-cyan-500 transition-colors duration-300 mt-1 inline-block'
                    >
                      {exp.company}
                    </a>
                    <p className='text-sm text-gray-500 mt-1'>{exp.location}</p>

                    <ul className='space-y-2 list-disc list-inside mt-4'>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className='text-gray-300 leading-relaxed text-sm'>
                          {resp}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
