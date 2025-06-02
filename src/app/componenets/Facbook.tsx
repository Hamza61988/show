'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Facebook() {
  return (
    <div>
<div className="bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] px-8 py-16 relative">

      <div className="max-w-5xl mx-auto text-center mb-16">
    <p className="text-xl text-gray-800">
  This website was built using <span className="font-semibold text-black">HTML, CSS, and JavaScript</span> on the frontend, with an <span className="font-semibold text-black">Express.js</span> backend. It features dynamic form handling and stores user-submitted data securely in <span className="font-semibold text-black">MongoDB</span>. Designed and developed as part of a <span className="font-semibold text-black">client project</span>, it emphasizes both functionality and clean user experience.
</p>

</div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-7xl mx-auto">
        
       
        <Link href="https://asadullah-nu.vercel.app" target="_blank">
          <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <Image
              className="rounded-xl shadow-lg border border-gray-300"
              src="/facebook2.png"
              alt="Desktop version"
              width={1000}  
              height={750}  
            />
            <span className="text-lg font-medium text-gray-800">Desktop Version</span>
          </div>
        </Link>

        <Link href="https://asadullah-nu.vercel.app" target="_blank">
          <div className="flex flex-col items-center text-center space-y-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <Image
              className="rounded-2xl shadow-xl border border-gray-300"
              src="/facebook1.png"
              alt="Mobile version"
              width={300}
              height={650}
            />
            <span className="text-lg font-medium text-gray-800">Mobile Version</span>
          </div>
        </Link>
      </div>
      
    </div>
          <hr/>

    </div>
  );
}
