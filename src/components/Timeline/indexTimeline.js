import React from 'react'
import { TimelineData } from "./TimelineData";

const Timeline = () => {
    return (
        <>
            <div className='xl:mx-12 md:mx-10 mx-3 my-8 py-8'>
                <div className="flex items-center justify-right">
                    <h1 className="font-signika xl:text-6xl md:text-5xl text-4xl">Timeline</h1>
                </div>
                <div className="flex items-center justify-right">
                    <div
                        className="container xl:w-56 w-40 h-3 bg-underlineOrange rounded-xl mb-24"
                    />
                </div>
                <div className="antialiased bg-white text-gray-800">
                    <div className="relative container mx-auto px-6 flex flex-col" >
                        <div className="absolute z-0 w-2 h-full rounded-lg bg-[#F9E1CF] shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0" > </div> {
                            TimelineData.map((timeline, id) => (<div key={id} className="relative z-10" >
                                <div className="xl:h-16 xl:w-16 md:h-14 md:w-14 h-10 w-10 xl:mt-0 md:mt-0 mt-20 object-cover bg-[#E1AA43] rounded-full shadow-md border-4 border-[#F9E1CF] xs:absolute md:mx-auto md:left-0 md:right-0" />
                                <div className={`${id % 2 === 0 ? "relative md:w-1/2 md:ml-auto xs:pl-28 xs:pt-0 md:pl-16 -mt-36" : " relative md:w-1/2 md:ml-0 -mt-36 xs:pl-28 xs:pt-0 md:mr-auto md:pl-0 md:pr-16"}`}>
                                    <div className="bg-[#F9E1CF] mb-3 xl:mt-24 md:mt-24 mt-12 border-b-1 xl:p-10 md:p-8 p-5 rounded-3xl shadow-lg xl:ml-0 md:ml-0 ml-12" >
                                        <span className="font-bold text-black text-sm tracking-wide" > {timeline.date} </span>
                                        <h2 className="xl:text-2xl md:text-xl text-lg font-bold pt-1" > {timeline.title} </h2>
                                        <p className="pt-1 xl:text-lg md:text-md text-sm" > {timeline.description} </p>
                                    </div>
                                </div>
                            </div>
                            ))}
                    </div>
                </div>

            </div>



        </>
    )
}

export default Timeline