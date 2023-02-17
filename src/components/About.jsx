import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full md:h-auto bg-[#0a192f] text-gray-300 pb-28 md:pb-36'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-6'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Fatema Tuz Zohura Mim, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a web developer.A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;