'use client';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Fulldown() {
  return (
    <div className="bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] px-6 py-20 min-h-screen">
      
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-black mb-4">Other Projects</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          These are designs and GitHub projects I have built myself using{' '}
          <span className="font-semibold text-black">React</span>. Check out my work to explore my skills in creating modern, responsive web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        {/* Project 1 - Password Creator */}
        <a
          href="https://hamza61988.github.io/password_maker/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[600px] h-[300px] bg-black shadow-md border border-gray-300 rounded-lg flex items-center justify-center text-2xl font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          Password Creator
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

        {/* Project 3 - Weather Checker */}
        <a
          href="https://hamza61988.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[600px] h-[300px] bg-black shadow-md border border-gray-300 rounded-lg flex items-center justify-center text-2xl font-semibold text-white transition-transform duration-300 hover:scale-105"
        >
          Weather Checker
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

      {/* Contact Section */}
      <div className="mt-24 text-center space-y-6">
        <h2 className="text-4xl font-bold text-black">Contact Me</h2>
        <p className="text-lg text-gray-700">Feel free to reach out through the platforms below:</p>
        
        <div className="flex justify-center gap-10 text-4xl text-gray-800">
          {/* GitHub */}
          <a
            href="https://github.com/hamza61988"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:text-black hover:scale-110"
          >
            <FaGithub title="GitHub" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:deadshot6198@gmail.com"
            className="transition-transform duration-300 text-black hover:scale-110"
          >
            <SiGmail title="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}
