'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function MiddleDown() {
  return (
    <div>
      <hr className="border-gray-700 transition-colors duration-500" />

      <div className="bg-gradient-to-br from-[var(--gradient-to)] via-[var(--gradient-from)] to-[var(--gradient-to)] px-8 py-16 relative transition-colors duration-500">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-xl text-[var(--text-subtle)] transition-colors duration-500">
            Built with{' '}
            <span className="font-semibold text-[var(--color-text)]">Next.js</span>, this design
            blends creativity and performance optimized for smooth interactions on both desktop and
            mobile devices.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-7xl mx-auto transition-colors duration-500">
          <Link href="https://creative-one-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                className="rounded-xl shadow-lg border border-gray-700 transition-colors duration-500"
                src="/middledown1.png"
                alt="Desktop version"
                width={1000}
                height={750}
              />
              <span className="text-lg font-medium text-[var(--text-muted)] transition-colors duration-500">
                Desktop Version
              </span>
            </div>
          </Link>

          <Link href="https://creative-one-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                className="rounded-2xl shadow-xl border border-gray-700 transition-colors duration-500"
                src="/middledown2.png"
                alt="Mobile version"
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
          <div className="bg-transparent border border-gray-500 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
            <SiNextdotjs className="text-[var(--color-text)] text-3xl" title="Next.js" />
            <h4 className="text-[var(--color-text)] font-medium">Next.js</h4>
          </div>

          <div className="bg-transparent border border-gray-500 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
            <SiTailwindcss className="text-blue-600 text-3xl" title="Tailwind CSS" />
            <h4 className="text-[var(--color-text)] font-medium">Tailwind CSS</h4>
          </div>

          <div className="bg-transparent border border-gray-500 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
            <FaJs className="text-yellow-400 text-3xl" title="JavaScript" />
            <h4 className="text-[var(--color-text)] font-medium">JavaScript</h4>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 transition-colors duration-500" />
    </div>
  );
}
