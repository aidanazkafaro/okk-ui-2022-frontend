import React from 'react'
import { TimelineData } from "./TimelineData";

const Timeline = () => {
    return (
        <>
            <div className="antialiased bg-white text-gray-800">
                <div className="relative container mx-auto px-6 flex flex-col" >
                    <div className="absolute z-0 w-2 h-full rounded-lg bg-[#F9E1CF] shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0" > </div> {
                        TimelineData.map((timeline, id) => (<div key={id} className="relative z-10" >
                            <div className="h-16 mt-32 w-16 object-cover bg-[#E1AA43] rounded-full shadow-md border-4 border-[#F9E1CF] xs:absolute md:mx-auto md:left-0 md:right-0" />
                            <div className={`${id % 2 === 0 ? "relative xs:pl-28 xs:pt-0 md:w-1/2 transition duration-150 ease-out hover:ease-in md:ml-auto md:pl-16 -mt-36" : "hover:scale-125 relative -mt-36 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16"}`}>
                                <div className="bg-[#F9E1CF] border-b-1 p-10 rounded-3xl shadow-lg" >
                                    <span className="font-bold text-black text-sm tracking-wide" > {timeline.date} </span>
                                    <h2 className="text-2xl font-bold pt-1" > {timeline.title} </h2>
                                    <p className="pt-1" > {timeline.description} </p>
                                </div>
                            </div>
                        </div>
                        ))}               
                </div>
            </div>

        </>
    )
}

export default Timeline