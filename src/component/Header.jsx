import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='container mx-auto px-16 py-6 flex justify-between '>
                <p></p>
                <ul className='flex space-x-4'>
                    <li className='text-xl text-color3 font-medium hover:underline underline-offset-8'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='text-xl text-color3 font-medium hover:underline underline-offset-8'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='text-xl text-color3 font-medium hover:underline underline-offset-8'>
                        <Link to="/project">Project</Link>
                    </li>
                    <li className='text-xl text-color3 font-medium hover:underline underline-offset-8'>
                        <Link to="/skills">Skill</Link>
                    </li>
                    <li className='text-xl text-color3 font-medium hover:underline underline-offset-8'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;