import React from 'react';
import Header from './Header';

const Contact = () => {
    return (
        <div className='h-screen bg-color1'>
            <Header />
            <div className='container mx-auto px-12 my-2'>
                <div className='relative'>
                    <p className='text-2xl uppercase tracking-wider text-color3'>Contact</p>
                    <p className='absolute top-5 left-1 text-4xl uppercase font-bold tracking-widest text-color4'>Contact</p>
                </div>
                <div className='grid grid-cols-3 gap-x-4'>
                    <div className='mt-16 col-span-2'>
                        <form class="w-full max-w-2xl">
                            <div class="flex flex-wrap -mx-3 mb-3">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-color3 text-xs font-bold mb-2" for="grid-password">
                                        Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Your name" />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-3">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-color3 text-xs font-bold mb-2" for="grid-first-name">
                                        Phone
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="tel" placeholder="01xxxxxxxxx" />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-color3 text-xs font-bold mb-2" for="grid-last-name">
                                        Email
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="email@email.com" />
                                </div>
                            </div>
                            <div>
                                <label class="block uppercase tracking-wide text-color3 text-xs font-bold mb-2" for="grid-last-name">
                                    Massage
                                </label>
                                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" rows="3" placeholder='Massage'></textarea>
                            </div>
                            <button type="submit" className='w-full mt-4 bg-color3  py-2 text-white font-semibold uppercase tracking-wider rounded-sm hover:bg-color4 hover:text-color3'>Send</button>
                        </form>
                    </div>
                    <div className='mt-20'>
                        <div className='relative '>
                            <p className='text-2xl uppercase tracking-wider text-color3'>Or Contact By Email</p>
                            <p className='absolute top-5 left-1 text-2xl uppercase font-bold tracking-wider text-color4'>Or Contact By Email</p>
                        </div>
                        <div className='flex mt-14'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-color3 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className='self-center '>Fatemamim28@gamil.com</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;