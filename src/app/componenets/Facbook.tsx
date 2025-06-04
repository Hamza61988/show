'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Facebook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--gradient-to)] via-[var(--gradient-to)] to-[var(--gradient-from)] px-8 py-16 relative transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center mb-16 transition-colors duration-500">
        <p className="text-xl text-[var(--text-muted)] transition-colors duration-500">
          This website was built using{' '}
          <span className="font-semibold text-[var(--color-text)] transition-colors duration-500">HTML, CSS, and JavaScript</span>{' '}
          on the frontend, with an{' '}
          <span className="font-semibold text-[var(--color-text)] transition-colors duration-500">Express.js</span> backend. It
          features dynamic form handling and stores user-submitted data securely in{' '}
          <span className="font-semibold text-[var(--color-text)] transition-colors duration-500">MongoDB</span>. Designed and
          developed as part of a <span className="font-semibold text-[var(--color-text)]  transition-colors duration-500">client project</span>, it
          emphasizes both functionality and clean user experience.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-7xl mx-auto transition-colors duration-500">
        <Link href="https://asadullah-nu.vercel.app" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col items-center text-center space-y-4 transform transition duration-300 hover:scale-105 cursor-pointer">
            <Image
              className="rounded-xl shadow-lg border border-gray-300 transition-colors duration-500"
              src="/facebook2.png"
              alt="Desktop version"
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
    </div>
  );
}
