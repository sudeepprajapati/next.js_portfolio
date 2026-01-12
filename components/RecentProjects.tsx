import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = () => {
    return (
        <div className='py-12' id='projects'>
            <h1 className="heading">
                A small selection of  {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className="sm:flex flex-wrap items-center justify-center p-4 gap-y-8 gap-x-24 mt-10">
                {projects.map((
                    { id, title, des, img, iconLists, visit, link }
                ) => (
                    <div key={id} className='min-h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw]'>
                        <PinContainer title={link} >
                            {/* <div className='relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[35vh] h-[30vh] mb-10 '>
                                <div className='relative  w-full h-full  overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className=' z-10 absolute bottom-0 rounded-3xl' />
                            </div> */}
                            <div className='relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[35vh] h-[30vh] mb-10'>
                                <div className={`relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ${id < 4 ? 'transform rotate-[5deg] scale-110 origin-center' : ''}`}>
                                    <img src="/bg.png" alt={`Background for ${title}`} className='w-full h-full object-cover' />
                                </div>
                                <img
                                    src={img}
                                    alt={`Screenshot of ${title} project`}
                                    className={`${id < 4 ? 'z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] object-cover rounded-3xl transform rotate-[5deg]' : 'z-10 absolute inset-0 w-full h-full object-cover rounded-3xl'}`}
                                />
                            </div>

                            <h1 className='font-bold  md:text-xl text-base line-clamp-1 '>
                                {title}
                            </h1>
                            <p className='lg:text-lg lg:font-normal font-light text-sm line-clamp-2 '>
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt={icon}
                                                className='p-2'
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                <Link href={visit} target='_blank' className='flex lg:text-xl md:text-xs text-sm text-purple hover:text-purple-200 transition-colors'>Check Live Site</Link>
                                    <FaLocationArrow
                                        className='ms-3'
                                        color='#cbacf9'
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div >
        </div >
    )
}

export default RecentProjects