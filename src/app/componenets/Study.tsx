'use client';

import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss, 
} from 'react-icons/si';

export default function StudyInfo() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1] flex items-center justify-center py-10 px-4 sm:px-6">
      <div className="relative z-10 text-center space-y-8 sm:space-y-10 max-w-4xl mx-auto">
        
       
        <h1 className="text-3xl sm:text-5xl font-extrabold text-black">Knowledge</h1>

        
        <p className="text-base sm:text-2xl text-gray-800 font-medium">
          Currently a student at <strong>UMT Lahore</strong>, I started my programming journey over a year ago.
          Since then, I've built a solid foundation in full-stack web development.
        </p>
        <p className="text-sm sm:text-xl text-gray-700 leading-relaxed font-medium">
          My focus is on building responsive, scalable web apps using the <strong>MERN stack</strong>, along with database systems like MongoDB and PostgreSQL.
          I'm constantly learning, growing, and excited to contribute to impactful projects.
        </p>

      
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-4xl sm:text-5xl text-black">
          <FaJs title="JavaScript" className="transition-transform duration-300 hover:scale-110" />
          <FaHtml5 title="HTML5" className="transition-transform duration-300 hover:scale-110" />
          <FaCss3Alt title="CSS3" className="transition-transform duration-300 hover:scale-110" />
          <SiTailwindcss title="Tailwind CSS" className="transition-transform duration-300 hover:scale-110 " />
          <FaReact title="React" className="transition-transform duration-300 hover:scale-110" />
          <SiNextdotjs title="Next.js" className="transition-transform duration-300 hover:scale-110" />
          <FaNodeJs title="Node.js" className="transition-transform duration-300 hover:scale-110" />
          <SiMongodb title="MongoDB" className="transition-transform duration-300 hover:scale-110" />
          <SiPostgresql title="PostgreSQL" className="transition-transform duration-300 hover:scale-110" />
          <FaDatabase title="SQL/General DB" className="transition-transform duration-300 hover:scale-110" />
        </div>

        
        <div className="pt-8 sm:pt-10 space-y-2 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Quote</h2>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-medium">
            “Never stop learning because life never stops teaching.”
          </p>
          <p className="text-sm sm:text-lg text-gray-600">— Kirill Korshikov</p>
        </div>
      </div>
    </div>
  );
}
