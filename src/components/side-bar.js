import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BrowserRouter as Router, Link } from 'react-router-dom'

function SideBar() {
    return (
        <>
            <div className='h-auto min-h-screen relative w-full'>
                <h1 className='text-[42px] leading-10  font-bold text-[#fff] text-start'>Ufuk Yetişkin</h1>
                <h1 className='font-medium text-start my-4 text-lg leading-7 text-[#fff]'>Frontend Developer</h1>
                <p className='w-80 font-normal leading-6 text-wrap text-start'>I craft responsive, user-friendly, and high-performance web applications.</p>
                <div className='flex flex-col space-y-4 mt-4 lg:mt-16 justify-start items-start'>
                    <Link to='/'
                        className='relative flex justify-between items-center group'
                    >
                        <span className='font-normal leading-6 text-gray-700 group-focus:text-white group-hover:text-white transition-colors duration-300'>
                            About
                        </span>
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-focus:w-full'></span>
                    </Link>

                    <Link to='/experience'
                        className='relative flex justify-between items-center group'
                    >
                        <span className='font-normal leading-6 text-gray-700 group-focus:text-white group-hover:text-white transition-colors duration-300'>
                            Experience
                        </span>
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-focus:w-full'></span>
                    </Link>
                </div>

                <div className='flex space-x-4 items-center justify-start text-2xl absolute bottom-[calc(100%-75vh)]  lg:bottom-[calc(100%-80vh)] left-0'>
                    <a href={process.env.REACT_APP_GITHUB_LINK} rel="noopener noreferrer" target='_blank'><FaGithub /></a>
                    <a href={process.env.REACT_APP_LINKEDIN_LINK} rel="noopener noreferrer" target='_blank'><FaLinkedin /></a>
                    <a href={process.env.REACT_APP_X_LINK} rel="noopener noreferrer" target='_blank'><FaTwitter /></a>
                </div>
            </div>
        </>
    )
}

export default SideBar