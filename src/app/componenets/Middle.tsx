'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Middle() {
  return (
    <div>
      <hr  />

      <div className="bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] px-8 py-16 relative">
        <div className="max-w-5xl mx-auto text-center mb-16">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-black pb-2">
            Project's Showcase
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-700 mt-8 leading-relaxed">
            Explore my responsive shop management application built with{' '}
            <span className="font-semibold text-black">Next.js</span>. Designed for both desktop and mobile, this project demonstrates modern UI/UX principles and scalability.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-7xl mx-auto">
         
          <Link href="https://bigdawg-hamza61988s-projects.vercel.app/" target="_blank">
            <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                className="rounded-xl shadow-lg border border-gray-300"
                src="/big1.png"
                alt="Desktop version"
                width={1000}
                height={750}
              />
              <span className="text-lg font-medium text-gray-800">Desktop Version</span>
            </div>
          </Link>

          {/* Mobile */}
          <Link href="https://bigdawg-hamza61988s-projects.vercel.app/" target="_blank">
            <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                className="rounded-2xl shadow-xl border border-gray-300"
                src="/big3.png"
                alt="Mobile version"
                width={300}
                height={650}
              />
              <span className="text-lg font-medium text-gray-800">Mobile Version</span>
            </div>
          </Link>
        </div>
      </div>

      <hr />
    </div>
  );
}
