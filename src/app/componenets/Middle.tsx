'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  FaJs,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';

export default function Middle() {
  return (
    <div>
      <hr className="border-gray-700" />

      <div className="bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] px-8 py-16 transition-colors duration-500">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--color-text)]">
            Project Showcase
          </h2>
          <p className="text-xl text-[var(--text-muted)] mt-8 leading-relaxed">
            Explore my responsive shop management application built with{' '}
            <span className="font-semibold text-[var(--color-text)]">Next.js</span>. Designed for both desktop and mobile, this project demonstrates modern UI/UX principles and scalability.
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-7xl mx-auto">
          <Link
            href="https://bigdawg-hamza61988s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open desktop version"
          >
            <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                className="rounded-xl shadow-lg border border-gray-300"
                src="/big1.png"
                alt="Screenshot of the desktop version"
                width={1000}
                height={750}
              />
              <span className="text-lg font-medium text-[var(--text-subtle)]">Desktop Version</span>
            </div>
          </Link>

          <Link
            href="https://bigdawg-hamza61988s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open mobile version"
          >
            <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                className="rounded-2xl shadow-xl border border-gray-300"
                src="/big3.png"
                alt="Screenshot of the mobile version"
                width={300}
                height={650}
              />
              <span className="text-lg font-medium text-[var(--text-subtle)]">Mobile Version</span>
            </div>
          </Link>
        </div>

     <div className="mt-12 flex flex-wrap justify-center gap-6">
  <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
    <SiNextdotjs className="text-[var(--color-text)] text-3xl" title="Next.js" />
    <h4 className="text-[var(--color-text)] font-medium">Next.js</h4>
  </div>

  <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
    <SiTailwindcss className="text-blue-800 text-3xl" title="Tailwind CSS" />
    <h4 className="text-[var(--color-text)] font-medium">Tailwind CSS</h4>
  </div>

  <div className="bg-transparent border border-gray-400 p-4 flex items-center gap-2 text-center hover:scale-105 transition rounded-md">
    <FaJs className="text-yellow-400 text-3xl" title="JavaScript" />
    <h4 className="text-[var(--color-text)] font-medium">JavaScript</h4>
  </div>
</div>

      </div>

      <hr className="border-gray-700" />
    </div>
  );
}
