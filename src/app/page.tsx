'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showWhoIAm, setShowWhoIAm] = useState(false);
  const whoIAmRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowWhoIAm(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const current = whoIAmRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-22 bg-gradient-to-b from-transparent to-white z-0" />

      {/* Who I Am Section */}
      <div
        ref={whoIAmRef}
        className="h-screen bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] flex items-center justify-center relative"
      >
        <div className="min-h-screen py-20 px-6 z-10 relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className={`w-[450px] h-[620px] bg-black rounded-[2rem] border-4 border-gray-300 shadow-2xl overflow-hidden flex items-center justify-center transform transition-transform duration-700 ${
                  showWhoIAm ? 'scale-100' : 'scale-90'
                }`}
              >
                <img
                  src="/image.png"
                  alt="Mobile device preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-5xl font-extrabold text-black">Hamza Ibrahim</h2>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Currently a university student pursuing a degree in Information Technology Management. My journey into programming began over a year ago and has been fueled entirely by self-learning and curiosity.
              </p>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                I've been passionate about computers since I was 8 years old, which has given me a strong foundational understanding of how technology works from both user and technical perspectives.
              </p>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Over time, I’ve built solid knowledge in computing and continue to enhance my skills daily. My goal is to combine creativity with code to build meaningful solutions and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />
    </div>
  );
}
