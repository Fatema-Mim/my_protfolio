import React from 'react';

const About = () => {
  return (
    <div name='about' className='relative w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-300 flex items-center py-20'>
      {/* Background decorative elements */}
      <div className='absolute w-full h-full overflow-hidden'>
        <div className='absolute w-96 h-96 rounded-full top-10 right-0 bg-cyan-500/5 blur-3xl'></div>
        <div className='absolute w-96 h-96 rounded-full bottom-10 left-0 bg-blue-500/5 blur-3xl'></div>
      </div>

      <div className='max-w-[900px] mx-auto px-8 relative z-10'>
        {/* Header */}
        <div className='mb-20 text-center animate-bounce-in'>
          <p className='inline text-4xl font-bold border-b-4 border-cyan-500 text-gray-300'>
            About Me
          </p>
        </div>

        {/* Main Content - Clean Text Layout */}
        <div className='space-y-16'>
          {/* Introduction */}
          <div className='text-center animate-fade-in-up delay-200'>
            <h2 className='text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight'>
              Hi, I'm Mim!
            </h2>
            <p className='text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-[700px] mx-auto'>
              A passionate Frontend Developer specializing in building modern, responsive web applications that deliver exceptional user experiences.
            </p>
          </div>

          {/* Divider */}
          <div className='flex items-center justify-center gap-4 animate-slide-in-left delay-300'>
            <div className='h-px w-20 bg-gradient-to-r from-transparent to-cyan-500'></div>
            <div className='w-2 h-2 bg-cyan-500 rounded-full animate-glow-pulse'></div>
            <div className='h-px w-20 bg-gradient-to-l from-transparent to-cyan-500'></div>
          </div>

          {/* Who I Am */}
          <div className='space-y-6 animate-slide-up delay-400'>
            <div className='flex items-center gap-4'>
              <div className='h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/30'></div>
              <h3 className='text-2xl font-bold text-cyan-400 tracking-wider'>WHO I AM</h3>
              <div className='h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/30'></div>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed text-center max-w-[750px] mx-auto'>
              I'm a self-motivated and enthusiastic web developer with a strong passion for JavaScript and modern web technologies. I enjoy building clean, responsive, and user-friendly web applications that solve real-world problems.
            </p>
          </div>

          {/* Divider */}
          <div className='flex items-center justify-center gap-4 animate-slide-in-right delay-500'>
            <div className='h-px w-20 bg-gradient-to-r from-transparent to-blue-500'></div>
            <div className='w-2 h-2 bg-blue-500 rounded-full animate-glow-pulse'></div>
            <div className='h-px w-20 bg-gradient-to-l from-transparent to-blue-500'></div>
          </div>

          {/* My Goal */}
          <div className='space-y-6 animate-slide-up delay-700'>
            <div className='flex items-center gap-4'>
              <div className='h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/30'></div>
              <h3 className='text-2xl font-bold text-blue-400 tracking-wider'>MY GOAL</h3>
              <div className='h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/30'></div>
            </div>
            <p className='text-xl text-gray-300 leading-relaxed text-center max-w-[750px] mx-auto'>
              My goal is to grow as a software professional by working with modern technologies in both local and multinational software and IT companies in Bangladesh, while continuously improving my skills and creating meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;