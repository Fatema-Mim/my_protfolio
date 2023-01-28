import React from 'react';
import photo from '../Image/mim4.jpg';
import Header from './Header';

const About = () => {
    return (
        <div className='h-screen bg-color1'>
            <Header />
            <div className='container mx-auto px-20 '>
                <div className='grid grid-cols-3 content-center mt-12'>
                    <img src={photo} alt="mim" className='w-3/4 h-max object-cover rounded-md place-self-center' />
                    <div className='col-span-2 text-color3 mt-12 space-y-6'>
                        <p className='text-4xl font-bold'><span className='text-white'>I'm </span>Fatema Tuz Zohura Mim </p>
                        <p className='text-lg text-justify'>I am a web developer.A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <div className='pt-5'>
                            <a href="https://drive.google.com/file/d/1Jwcr-ITqKg11Ou80JexQgIKg_0BjhOWL/view?usp=sharing" target="_blank" className='text-lg text-color3 font-medium px-6 py-2 border-2 border-color3 rounded-md hover:text-white hover:bg-color3 hover:duration-75' rel="noreferrer">Hired Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;