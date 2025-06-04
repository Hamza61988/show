'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const hamza = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      hamza.current,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: hamza.current,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-500`}>
    
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`px-4 py-2 rounded-full shadow transition duration-300 ${
            isDark ? 'bg-white text-black' : 'bg-black text-white'
          }`}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

 
      <div className={`absolute bottom-0 left-0 w-full h-22 z-0 ${isDark ? 'bg-gradient-to-b from-transparent to-black' : 'bg-gradient-to-b from-transparent to-white'}`} />

      {/* Main Content */}
      <div className={`min-h-screen flex items-center justify-center relative px-4 sm:px-6 ${
        isDark
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1]'
      }`}>
        <div className="py-10 sm:py-20 px-4 sm:px-6 z-10 relative w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            {/* Image */}
            <div ref={hamza} className="w-full md:w-1/2 flex justify-center">
              <div className={`w-[200px] h-[280px] sm:w-[300px] sm:h-[480px] md:w-[450px] md:h-[620px] ${
                isDark ? 'bg-black border-gray-700' : 'bg-black border-gray-300'
              } rounded-[2rem] border-4 shadow-2xl overflow-hidden flex items-center justify-center`}>
                <img src="/image.png" alt="Mobile preview" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-1">Hamza Ibrahim</h2>
              <p className="text-base sm:text-lg my-2 font-medium">Full Stack Developer</p>
              <p className="text-base sm:text-lg font-medium">Lahore, Pakistan</p>

              <div className="mt-10 w-full">
                <div className="flex gap-6 sm:gap-10 text-3xl sm:text-5xl mb-4">
                  <a href="mailto:youremail@example.com" className="hover:scale-110 transition"><SiGmail /></a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:scale-110 transition"><FaLinkedin /></a>
                  <a href="https://github.com/yourgithub" target="_blank" className="hover:scale-110 transition"><FaGithub /></a>
                  <a href="https://wa.me/yourwhatsapp" target="_blank" className="hover:scale-110 transition"><FaWhatsapp /></a>
                </div>

                <a
                  href="/w.pdf"
                  download
                  className={`inline-block mt-5 px-6 py-3 rounded-full hover:opacity-90 transition text-sm sm:text-base ${
                    isDark ? 'bg-white text-black' : 'bg-black text-white'
                  }`}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={isDark ? 'border-gray-700' : 'border-gray-300'} />
    </div>
  );
}
