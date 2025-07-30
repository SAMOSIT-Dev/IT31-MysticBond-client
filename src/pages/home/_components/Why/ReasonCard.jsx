import React from 'react'

export default function ReasonCard({ children }) {
    return (
        <div className="relative font-inria-serif max-w-[330px] bg-[#46465D6B] rounded-lg border-2 border-[#46465D] backdrop-blur-[65px] p-8 mx-auto md:max-w-[400px]">
            <div className="absolute inset-0 noise-bg z-0"></div>
            <div className='relative text-white'>
                {children}
            </div>
        </div>
    )
}
