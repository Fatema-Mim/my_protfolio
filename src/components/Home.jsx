import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div name='home' className='w-full md:h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] py-28 md:py-0 relative overflow-hidden'>
      {/* Animated background gradient circles */}
      <div className='absolute rounded-full top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl animate-pulse'></div>
      <div className='absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse'></div>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10'>
        <p className='mb-2 text-lg font-medium text-cyan-400 animate-slide-in-left'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold bg-gradient-to-r from-[#ccd6f6] via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up delay-100'>
          Fatema Tuz Zohura Mim
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] py-4 animate-slide-in-right delay-200'>
          I'm a <span className='text-cyan-400'>Frontend Developer</span>
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] leading-relaxed text-lg animate-fade-in-up delay-300'>
          I build beautiful, responsive web applications and turn ideas into smooth, user-friendly digital experiences. Sometimes I design them too. Right now, I'm focused on crafting modern interfaces that feel simple, fast, and delightful to use.
        </p>

         {/* Social Icons */}
        <div className='flex gap-4 mt-4 mb-2 delay-500 animate-fade-in-up'>
          <a
            href='https://www.linkedin.com/in/fatema-tuz-zohura-mim/'
            target='_blank'
            rel='noreferrer'
            className='w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-500 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30 transform hover:-translate-y-1'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://github.com/Fatema-Mim'
            target='_blank'
            rel='noreferrer'
            className='w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-500 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30 transform hover:-translate-y-1'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='mailto:fatemamim28@gmail.com'
            className='w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-500 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30 transform hover:-translate-y-1'
          >
            <HiOutlineMail size={24} />
          </a>
          <a
            href='https://drive.google.com/file/d/1uxLc38JC-opDf85SxWoXw7Wv6F2N5Jap/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-lg border border-cyan-500/20 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-500 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30 transform hover:-translate-y-1'
          >
            <BsFillPersonLinesFill size={24} />
          </a>
        </div>

        <div className='flex gap-4 mt-4 delay-700 animate-fade-in-scale'>
          <Link
            to='work'
            smooth={true}
            duration={500}
          >
            <button className='flex items-center px-8 py-4 text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 group hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105'>
              View Work
              <span className='duration-300 group-hover:translate-x-1'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={500}
          >
            <button className='px-8 py-4 transition-all duration-300 border-2 rounded-lg text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-white transform hover:scale-105'>
              Contact Me
            </button>
          </Link>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
