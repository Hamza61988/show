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

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className=" bg-[var(--color-bg)] text-[var(--color-text)]">
      
    
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full shadow transition duration-300 bg-black text-white dark:bg-white dark:text-black"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full h-22 z-0 bg-gradient-to-b from-transparent to-[var(--color-bg)] transition-colors duration-500" />

 
      <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] transition-colors duration-500">
        <div className="py-10 sm:py-20 px-4 sm:px-6 z-10 relative w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 transition-colors duration-500">

         
            <div ref={hamza} className="w-full md:w-1/2 flex justify-center transition-transform">
              <div
                className={`w-[200px] h-[280px] sm:w-[300px] sm:h-[480px] md:w-[450px] md:h-[620px] bg-black rounded-[2rem] shadow-2xl overflow-hidden flex items-center justify-center border-4 transition-colors duration-500 ${
                  isDark ? 'border-gray-400' : 'border-gray-300'
                }`}
              >
                <img
                  src="/image.png"
                  alt="Mobile preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left ">
              <h2 className="text-4xl sm:text-5xl font-bold mb-1 ">
                Hamza Ibrahim
              </h2>
              <p className="text-base sm:text-lg my-2 font-medium ">
                Full Stack Developer
              </p>
              <p className="text-base sm:text-lg font-medium ">
                Lahore, Pakistan
              </p>

           
              <div className="mt-10 w-full">
                <div className="lg:flex lg:justify-start flex flex-row justify-center gap-6 sm:gap-10 text-3xl sm:text-5xl mb-4 ">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=thorsfinn1337@gmail.com"
                    className="hover:scale-110 "
                  >
                    <SiGmail />
                  </a>
                  <a
                    href="https://linkedin.com/in/hamza-ibrahim-1a8a98366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 "
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Hamza61988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 "
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://wa.me/+923104824350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 "
                  >
                    <FaWhatsapp />
                  </a>
                </div>

              
                <a
                  href="/Hamzaibrahim-CV.pdf"
                  download
                  className="inline-block mt-5 px-6 py-3 rounded-full hover:opacity-90 transition-colors duration-500  text-sm sm:text-base bg-[var(--color-text)] text-[var(--color-bg)]"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <hr className="border-gray-300 dark:border-gray-700 transition-colors duration-500" />
    </div>
  );
}
