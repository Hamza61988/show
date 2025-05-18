'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 
export default function Home() {
  
  let hamza = useRef(null)
  
 

 useEffect( ()=>{
  gsap.fromTo(hamza.current , {
 scale: 0.8
 },{
 scale: 1,
  duration: 1,

  scrollTrigger: {
    trigger: hamza.current,
  
    
toggleActions: "play reverse play reverse",
    

  }
 })
 },[])

  return (
    <div>
      <div className="absolute bottom-0 left-0 w-full h-22 bg-gradient-to-b from-transparent to-white z-0" />
      
      <div
      
        className="min-h-screen bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] flex items-center justify-center relative px-4 sm:px-6"
      >
        <div className="py-10 sm:py-20 px-4 sm:px-6 z-10 relative w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16">
           
            <div ref={hamza} className="w-full md:w-1/2 flex justify-center">
              <div
                className={`w-[200px] h-[280px] sm:w-[300px] sm:h-[480px] md:w-[450px] md:h-[620px] bg-black rounded-[2rem] border-4 border-gray-300 shadow-2xl overflow-hidden flex items-center justify-center transform transition-transform duration-700 `}
              >
                <img
                  src="/image.png"
                  alt="Mobile device preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                Hamza Ibrahim
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                Currently a university student pursuing a degree in Information Technology Management.
                My journey into programming began over a year ago and has been fueled entirely by self-learning and curiosity.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                I've been passionate about computers since I was 8 years old, which has given me a strong foundational understanding of how technology works from both user and technical perspectives.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                Over time, I’ve built solid knowledge in computing and continue to enhance my skills daily.
                My goal is to combine creativity with code to build meaningful solutions and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />
    </div>
  );
}
