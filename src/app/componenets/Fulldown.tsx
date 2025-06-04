'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp } from "react-icons/fa";

const slides = [
  {
    src: "weather.png",
    href: "https://hamza61988.github.io",
  },
  {
    src: "fulldown2.png",
    href: "https://civilianism-git-main-hamza61988s-projects.vercel.app",
  },
  {
    src: "fulldown1.png",
    href: "https://hamza61988.github.io/password_maker/",
  },
  {
    src: "olx.png",
    href: "https://github.com/Hamza61988/hoelx",
  },
];

export default function Fulldown() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] px-6 py-20 min-h-screen flex flex-col items-center">

        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Other Projects</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            These are designs and GitHub projects I have built myself using{' '}
            <span className="font-semibold text-black">React</span>. Check out my work to explore my skills in creating modern, responsive web applications.
          </p>
        </div>

   
        <div className="w-full max-w-6xl hidden sm:block">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={200}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3300,
              disableOnInteraction: false,
            }}
            className="peek-slider"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="peek-slide">
                <a href={slide.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[560px] object-fill rounded-xl shadow-2xl transition-transform hover:scale-105"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      
        <div>
          {slides.map((slide, index) => (
            <div key={index} className="mt-6 flex justify-center sm:hidden">
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
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C400,150 1040,-50 1440,100 L1440,0 L0,0 Z"
            fill="#f1f5f9"
          />
        </svg>
      </div>

      <div className="m-24 text-center space-y-6 px-4 sm:px-0">
        <h2 className="text-4xl font-bold text-black">Contact Me</h2>
        <p className="text-lg text-gray-700">Feel free to reach out through the platforms below:</p>

        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10 text-4xl text-gray-800">
          <a
            href="https://github.com/hamza61988"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:text-black hover:scale-110 flex flex-col items-center"
          >
            <FaGithub className="ml-1" title="GitHub" />
            <span className="text-lg mt-1">Github</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thorsfinn1337@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 text-black hover:scale-110 flex flex-col items-center"
          >
            <SiGmail title="Gmail" />
            <span className="text-lg mt-1">Email</span>
          </a>

          <a
            href="https://wa.me/+923104824350"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 text-black hover:scale-110 flex flex-col items-center"
          >
            <FaWhatsapp className="ml-3" title="Whatsapp" />
            <span className="text-lg mt-1">Whatsapp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
