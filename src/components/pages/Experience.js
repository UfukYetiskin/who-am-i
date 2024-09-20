import React, {useRef, useEffect} from 'react'
import { AiOutlineLink } from "react-icons/ai";

function Experience() {
    const ref = useRef(null);

    useEffect(() => {
        if(ref.current){
            ref.current.scrollIntoView({behavior : "smooth"});
        }
    }, [])
    return (
        <>
            <div className='space-y-12 owerflow-y-auto' ref={ref}>
                <div className='grid grid-cols-7'>
                    <h1 className=' flex items-start justify-start col-span-2 text-balance'>Nov 2022 - Aug 2024</h1>
                    <div className='flex flex-col justify-start items-start col-span-5'>
                        <h1 className='font-medium mb-4 text-start text-[#fff] leading-5'>Frontend Developer, TPAYOUT</h1>
                        <div className='flex justify-start items-center'>
                            <a href={process.env.REACT_APP_TPAYMENT_LINK} target="_blank" rel='noopener noreferrer' className='mr-2 text-[#fff] flex justify-start items-center'>Tpayment <AiOutlineLink /></a>
                            <a href={process.env.REACT_APP_PAYBLING_LINK} target="_blank" rel='noopener noreferrer' className='mr-2 text-[#fff] flex justify-start items-center'>Paybling<AiOutlineLink /></a>
                        </div>
                        <ul className='text-start'>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>I improved web application performance by optimizing code, asset loading, and creating
                                responsive designs for various devices.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Created interfaces in accordance with UI/UX design principles using Figma.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>We utilized Slack as our primary tool for internal communication</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>In Paybling project, I used NextAuth.js for authentication, TanStack for table management, next-intl for internationalization, and Axios for fetching data.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>In Tpayment project, Developed a project using Node.js and the EJS (Embedded JavaScript)
                                templating engine for dynamic content rendering.</li>
                        </ul>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>JavaScript</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>Node.js</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>React</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>Next.js</span>                        </div>
                        </div>
                </div>
                <div className='grid grid-cols-7'>
                    <h1 className='text-balance flex items-start justify-start col-span-2'>Dec 2023  - Mar 2024</h1>
                    <div className='flex flex-col justify-start items-start col-span-5'>
                        <h1 className='font-medium mb-4 text-start text-[#fff] leading-5'>Frontend Developer, Freelance</h1>
                        <div className='flex justify-start items-center'>
                            <a href={process.env.REACT_APP_PSIKOLOGOFISI_LINK} target="_blank" rel='noopener noreferrer' className='mr-2 text-[#fff] flex justify-start items-center'>Psikolog Ofisi<AiOutlineLink /></a>
                        </div>
                        <ul className='text-start'>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Performed general bug fixes on projects developed with Next.js.
                            </li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Created interfaces in accordance with UI/UX design principles using Figma.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Made changes to existing code for performance improvements and enhanced user experience.                            </li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Analyzed bug reports and provided effective solutions to ensure application stability.                            </li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Supported the integration of new features according to project requirements</li>
                        </ul>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>JavaScript</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>React</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>Next.js</span>                        </div>
                        </div>
                </div>
                <div className='grid grid-cols-7'>
                    <h1 className='text-balance flex items-start justify-start col-span-2'>Mar 2022 - Apr 2022</h1>
                    <div className='flex flex-col justify-start items-start col-span-5'>
                        <h1 className='font-medium mb-4 text-start text-[#fff] leading-5'>Frontend Developer Intern, Bimser</h1>
                        <ul className='text-start'>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Developed an application using React, focusing on designing user interface components and managing state.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Utilized Markdown for project documentation, creating technical documentation to maintain project continuity</li>
                        </ul>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>JavaScript</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>React</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>Markdown</span>
                            <span className='bg-[#347e7c] text-[#5be3d0] px-4 py-2 opacity-75 rounded-2xl'>Git</span>
                            </div>
                        </div>
                </div>
                <div className='grid grid-cols-7'>
                    <h1 className='text-balance flex items-start justify-start col-span-2'>Aug 2021 - Jan 2022</h1>
                    <div className='flex flex-col justify-start items-start col-span-5'>
                        <h1 className='font-medium mb-4 text-start text-[#fff] leading-5'>Erasmus+ Internship, Fabryka Emecji Reklama</h1>
                        <ul className='text-start'>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Contributed to team projects and enhanced collaboration within the team.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Developed various designs using graphic design software such as CorelDRAW and Photoshop.</li>
                            <li className='text-start decoration-dotted text-wrap mb-2'><span className='mr-2 text-white'>-</span>Worked on the creation and enhancement of visual content during the design processes.</li>
                        </ul>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Experience