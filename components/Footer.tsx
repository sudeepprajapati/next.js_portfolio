import React from 'react'
import { socialMedia } from '@/data'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="w-full pb-5 mb-7 md:mb-5" id="contact">
            <div className="flex mt-16 md:flex-row flex-col justify-between gap-5 md:gap-0 items-center">
                <p className="text-center md:text-base text-sm md:font-normal font-light">
                    Copyright &copy; {year} Sudeep Prajapati
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10  h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <a target="_blank" href={profile.link}>
                                <img src={profile.img} alt="profile.id" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer