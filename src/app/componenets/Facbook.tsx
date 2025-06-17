'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

export default function Facebook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--gradient-to)] via-[var(--gradient-to)] to-[var(--gradient-from)] px-8 py-16 relative transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center mb-16 transition-colors duration-500">
        <p className="text-xl text-[var(--text-muted)] transition-colors duration-500">
          This website 
          features dynamic form handling and stores user-submitted data securely in{' '}
          <span className="font-semibold text-[var(--color-text)]">MongoDB</span>. Designed and
          developed as part of a{' '}
          <span className="font-semibold text-[var(--color-text)]">client project</span>, it
          emphasizes both functionality and clean user experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-7xl mx-auto transition-colors duration-500">
        <Link href="https://asadullah-nu.vercel.app" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer">
            <Image
              className="rounded-xl shadow-lg border border-gray-300 transition-colors duration-500"
              src="/facebook2.png"
              alt="Screenshot of desktop version"
              width={1000}
              height={750}
            />
            <span className="text-lg font-medium text-[var(--text-muted)] transition-colors duration-500">
              Desktop Version
            </span>
          </div>
        </Link>

        <Link href="https://asadullah-nu.vercel.app" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer">
            <Image
              className="rounded-2xl shadow-xl border border-gray-300 transition-colors duration-500"
              src="/facebook1.png"
              alt="Screenshot of mobile version"
              width={300}
              height={650}
            />
            <span className="text-lg font-medium text-[var(--text-muted)] transition-colors duration-500">
              Mobile Version
            </span>
          </div>
        </Link>
      </div>

      {/* Tech Stack Icons */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
          <FaHtml5 className="text-orange-600 text-3xl" title="HTML" />
          <h4 className="text-[var(--color-text)] font-medium">HTML</h4>
        </div>

        <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
          <FaCss3Alt className="text-blue-600 text-3xl" title="CSS" />
          <h4 className="text-[var(--color-text)] font-medium">CSS</h4>
        </div>

        <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
          <FaJs className="text-yellow-400 text-3xl" title="JavaScript" />
          <h4 className="text-[var(--color-text)] font-medium">JavaScript</h4>
        </div>

        <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
          <SiExpress className="text-[var(--color-text)] text-3xl" title="Express.js" />
          <h4 className="text-[var(--color-text)] font-medium">Express.js</h4>
        </div>

        <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
          <SiMongodb className="text-green-600 text-3xl" title="MongoDB" />
          <h4 className="text-[var(--color-text)] font-medium">MongoDB</h4>
        </div>
      </div>
    </div>
  );
}
