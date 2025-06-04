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
    <div className="transition-colors duration-500 bg-[var(--color-bg)] text-[var(--color-text)]">
      
      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full shadow transition duration-300 bg-black text-white dark:bg-white dark:text-black"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-22 z-0 bg-gradient-to-b from-transparent to-[var(--color-bg)] transition-colors duration-500" />

      {/* Main Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] transition-colors duration-500">
        <div className="py-10 sm:py-20 px-4 sm:px-6 z-10 relative w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 transition-colors duration-500">

            {/* Image */}
            <div ref={hamza} className="w-full md:w-1/2 flex justify-center transition-transform">
              <div
                className={`w-[200px] h-[280px] sm:w-[300px] sm:h-[480px] md:w-[450px] md:h-[620px] bg-black rounded-[2rem] shadow-2xl overflow-hidden flex items-center justify-center border-4 transition-colors duration-500 ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                }`}
              >
                <img
                  src="/image.png"
                  alt="Mobile preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Info */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left transition-colors duration-500">
              <h2 className="text-4xl sm:text-5xl font-bold mb-1 transition-colors duration-500">
                Hamza Ibrahim
              </h2>
              <p className="text-base sm:text-lg my-2 font-medium transition-colors duration-500">
                Full Stack Developer
              </p>
              <p className="text-base sm:text-lg font-medium transition-colors duration-500">
                Lahore, Pakistan
              </p>

              {/* Social Links */}
              <div className="mt-10 w-full">
                <div className="lg:flex lg:justify-start flex flex-row justify-center gap-6 sm:gap-10 text-3xl sm:text-5xl mb-4 transition-colors duration-500">
                  <a
                    href="mailto:youremail@example.com"
                    className="hover:scale-110 transition-colors duration-500"
                  >
                    <SiGmail />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-colors duration-500"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-colors duration-500"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://wa.me/yourwhatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-colors duration-500"
                  >
                    <FaWhatsapp />
                  </a>
                </div>

                {/* Resume Button */}
                <a
                  href="/w.pdf"
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

      {/* Separator */}
      <hr className="border-gray-300 dark:border-gray-700 transition-colors duration-500" />
    </div>
  );
}
