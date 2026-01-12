import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/Pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const CARD_WIDTH = 'sm:w-[570px] w-[90vw]'
const IMAGE_WIDTH = 'sm:w-[500px] w-[80vw]'
const IMAGE_HEIGHT = 'sm:h-[35vh] h-[30vh]'

const RecentProjects = () => {
    return (
        <section className="py-12" id="projects">
            <h1 className="heading">
                A small selection of{' '}
                <span className="text-purple">recent projects</span>
            </h1>

            <div className="mt-10 flex flex-wrap justify-center gap-x-24 gap-y-12 px-4">
                {projects.map(({ id, title, des, img, iconLists, visit, link }) => {

                    return (
                        <div
                            key={id}
                            className={`min-h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center ${CARD_WIDTH}`}
                        >
                            <PinContainer title={link}>
                                {/* Image block */}
                                <div
                                    className={`relative flex items-center justify-center overflow-hidden mb-10 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
                                >
                                    <div className="absolute inset-0 overflow-hidden rounded-3xl bg-[#13162d]">
                                        <img
                                            src="/bg.png"
                                            alt=""
                                            className={`w-full h-full object-cover`}
                                        />
                                    </div>

                                    <img
                                        src={img}
                                        alt={`Screenshot of ${title}`}
                                        className={`
                      relative z-10 w-full h-full rounded-3xl}
                    `}
                                    />
                                </div>

                                {/* Text */}
                                <h2 className="font-bold md:text-xl text-base line-clamp-1">
                                    {title}
                                </h2>

                                <p className="lg:text-lg font-light text-sm line-clamp-2 mt-2">
                                    {des}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    {/* Icons – untouched logic */}
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index) => (
                                            <div
                                                key={icon}
                                                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index * 2}px)`,
                                                }}
                                            >
                                                <img src={icon} alt="" className="p-2" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <div className="flex items-center">
                                        <Link
                                            href={visit}
                                            target="_blank"
                                            className="lg:text-xl md:text-xs text-sm text-purple hover:text-purple-200 transition-colors"
                                        >
                                            Check Live Site
                                        </Link>
                                        <FaLocationArrow className="ms-3" color="#cbacf9" />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default RecentProjects
