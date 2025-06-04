'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';

const slides = [
  { src: 'weather.png', href: 'https://hamza61988.github.io' },
  { src: 'fulldown2.png', href: 'https://civilianism-git-main-hamza61988s-projects.vercel.app' },
  { src: 'fulldown1.png', href: 'https://hamza61988.github.io/password_maker/' },
  { src: 'olx.png', href: 'https://github.com/Hamza61988/hoelx' },
];

export default function Fulldown() {
  return (
    <div className="bg-[var(--color-bg)]  text-[var(--color-text)] transition-colors ">
      {/* Project Slider Section */}
      <div className="bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] px-6 py-20 min-h-screen transition-colors duration-500 flex flex-col items-center">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--color-text)] mb-4">Other Projects</h2>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            These are designs and GitHub projects I have built myself using{' '}
            <span className="font-semibold text-[var(--color-text)]">React</span>. Check out my work to explore my skills in creating modern, responsive web applications.
          </p>
        </div>

        {/* Swiper for Desktop */}
        <div className="w-full  hover:scale-105 transition  border border-gray-700 rounded-xl  max-w-6xl hidden sm:block">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={200}
            slidesPerView="auto"
            centeredSlides
            loop
            autoplay={{ delay: 3300, disableOnInteraction: false }}
            className="peek-slider"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="peek-slide">
                <a href={slide.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[560px] object-fill rounded-xl shadow-2xl transition-transform"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      
        <div className=" sm:hidden">
          {slides.map((slide, index) => (
            <div key={index} className="mt-6 flex  justify-center">
              <a href={slide.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-11/12 max-w-xs rounded-xl shadow-lg object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden leading-none -mb-1">
       <div className="svg-wrapper" style={{ transition: 'background-color 500ms, --gradient-from 500ms, --gradient-to 500ms' }}>
  <svg
    viewBox="0 0 1440 150"
    className="w-full h-[100px]"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--gradient-from)" />
        <stop offset="100%" stopColor="var(--gradient-to)" />
      </linearGradient>
    </defs>

    <path
      d="M0,0 C400,150 1040,-50 1440,100 L1440,0 L0,0 Z"
      fill="url(#gradient)"
    />
  </svg>
</div>

      </div>

      <div className="m-24 text-center space-y-6 px-4 sm:px-0">
        <h2 className="text-4xl font-bold text-[var(--color-text)]">Contact Me</h2>
        <p className="text-lg text-[var(--text-muted)]">
          Feel free to reach out through the platforms below:
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10 text-4xl text-[var(--text-muted)]">
          <a
            href="https://github.com/hamza61988"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform  hover:text-[var(--color-text)] hover:scale-110 flex flex-col items-center"
          >
            <FaGithub className="ml-1" title="GitHub" />
            <span className="text-lg mt-1">GitHub</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thorsfinn1337@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform  hover:text-[var(--color-text)] hover:scale-110 flex flex-col items-center"
          >
            <SiGmail title="Gmail" />
            <span className="text-lg mt-1">Email</span>
          </a>

          <a
            href="https://wa.me/+923104824350"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform  hover:text-[var(--color-text)] hover:scale-110 flex flex-col items-center"
          >
            <FaWhatsapp className="ml-3" title="WhatsApp" />
            <span className="text-lg mt-1">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
