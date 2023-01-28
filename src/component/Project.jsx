import React, { useState } from 'react';
import Header from './Header';
import work from './work';


const Project = () => {
    const[item,setItem] = useState(work);
    const filterItem = (catItem) =>{
        const classificationItem  = work.filter((curItem)=>{
            return curItem.category === catItem;

        });
        setItem(classificationItem);
    }
    return (
        <div className='h-screen  bg-color1 '>
            <Header />
            <div className='container mx-auto px-12 mt-6 pb-10'>
                <ul className='flex justify-center text-lg space-x-16 text-indigo-300'>
                    <li className='hover:text-color3 '><button onClick={() => setItem(work)}>ALL</button></li>
                    <li className='hover:text-color3'><button onClick={() => filterItem("html")}>HTML</button></li>
                    <li className='hover:text-color3'><button onClick={()=> filterItem("css")}>CSS</button></li>
                    <li className='hover:text-color3'><button onClick={() => filterItem("bootstrap")}>Bootstrap</button></li>
                    <li className='hover:text-color3'><button onClick={() => filterItem("js")}>JavaScript</button></li>
                    <li className='hover:text-color3'><button onClick={() => filterItem("react")}>React</button></li>
                </ul>
                <div className='grid grid-cols-3 gap-x-4 gap-y-7 mt-10'>
                    {
                        item.slice(0,6).map((items)=>{
                            const { images, codelink, livelink} = items;
                            return(
                                <div className='relative group'>
                                    
                                    <img src={images} alt="" className='h-full w-full'/>
                                    <div className='absolute top-16 w-full py-10 bg-color2 text-center space-x-8 hidden group-hover:block'>
                                        <a href={codelink}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block stroke-slate-400 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </a>
                                        <a href={livelink}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Project;