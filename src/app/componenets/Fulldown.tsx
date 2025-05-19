'use client';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp } from "react-icons/fa";


export default function Fulldown() {
  return (
    <div className="bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] px-6 py-20 min-h-screen">
      
    
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-black mb-4">Other Projects</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          These are designs and GitHub projects I have built myself using{' '}
          <span className="font-semibold text-black">React</span>. Check out my work to explore my skills in creating modern, responsive web applications.
        </p>
      </div>

      
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
       
       <a
          href="https://civilianism-git-main-hamza61988s-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[600px] transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            width={600}
            height={300}
            src="/password.png"
            alt="password UI"
            className="rounded-lg shadow-md border border-gray-300"
          />
        </a>

        {/* Project 2 - Civilianism Design */}
        <a
          href="https://civilianism-git-main-hamza61988s-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[600px] transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            width={600}
            height={300}
            src="/fulldown2.png"
            alt="Civilianism UI"
            className="rounded-lg shadow-md border border-gray-300"
          />
        </a>

         <a
          href="https://civilianism-git-main-hamza61988s-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[600px] transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            width={600}
            height={300}
            src="/weather.png"
            alt="weather"
            className="rounded-lg shadow-md border border-gray-300"
          />
        </a>


        {/* Project 4 - OLX Clone */}
        <a
          href="https://github.com/Hamza61988/hoelx"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[600px] h-[300px] bg-black shadow-md border border-gray-300 rounded-lg flex items-center justify-center text-2xl font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          OLX-Web
        </a>
      </div>

      <div className="mt-24 text-center space-y-6">
        <h2 className="text-4xl font-bold text-black">Contact Me</h2>
        <p className="text-lg text-gray-700">Feel free to reach out through the platforms below:</p>
        
        <div className="flex justify-center gap-10 mt-10 text-4xl text-gray-800">
       
          <a
            href="https://github.com/hamza61988"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:text-black hover:scale-110"
          >
            <FaGithub className='ml-1' title="GitHub" />
            <span className='text-lg'>Github</span>
          </a>

      
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=thorsfinn1337@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
            className="transition-transform duration-300 text-black hover:scale-110"
          >
            <SiGmail title="Gmail" />
             <span className='text-lg'>Email</span>
          </a>



            <a
            href="https://wa.me/+923104824350"
  target="_blank"
  rel="noopener noreferrer"
            className="transition-transform duration-300 text-black hover:scale-110"
          >
            <FaWhatsapp className='ml-3' title="Whatsapp" />
             <span className='text-lg'>Whatsapp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
