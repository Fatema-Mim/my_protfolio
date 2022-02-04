import React from 'react';
import Header from './Header';

const Contact = () => {
    return (
        <div className='h-screen bg-color1'>
            <Header />
            <div className='container mx-auto px-12 my-4'>
                <div className='relative'>
                    <p className='text-2xl uppercase tracking-wider text-color3'>Contact</p>
                    <p className='absolute top-5 left-1 text-4xl uppercase font-bold tracking-widest text-color4'>Contact</p>
                </div>
                <div className='grid grid-col-2 gap-x-6'>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;