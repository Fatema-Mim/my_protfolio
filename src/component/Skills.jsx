import React from 'react';
import Header from './Header';
// style={{ width: `${45}%` }}
const Skills = () => {
    return (
        <div className='h-screen bg-color1'>
            <Header />
            <div className='container mx-auto px-12 my-4'>
                <div className='relative'>
                    <p className='text-2xl uppercase tracking-wider text-color3'>My Skills</p>
                    <p className='absolute top-5 left-1 text-4xl uppercase font-bold tracking-widest text-color4'>My Skills</p>
               </div>
               <div className='grid grid-cols-2 gap-x-20 my-20'>
                    <div className='space-y-6'>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-color3 dark:text-white">HTML</span>
                                <span class="text-sm font-medium text-color3 dark:text-white">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${90}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-color3 dark:text-white">CSS</span>
                                <span class="text-sm font-medium text-color3 dark:text-white">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${90}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-color3 dark:text-white">JavaScript</span>
                                <span class="text-sm font-medium text-color3 dark:text-white">85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${85}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-color3 dark:text-white">Bootstrap</span>
                                <span class="text-sm font-medium text-color3 dark:text-white">85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${85}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-color3 dark:text-white">Tailwind</span>
                                <span class="text-sm font-medium text-color3 dark:text-white">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${90}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-color3 dark:text-white">React</span>
                                <span class="text-sm font-medium text-color3 dark:text-white">80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${80}%` }}></div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Skills;