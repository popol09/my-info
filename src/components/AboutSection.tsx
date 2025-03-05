import React from "react";
export const AboutSection = () => {
  return <section className="py-20 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => <div key={i} className="absolute border border-[#ADFF2F]" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 30 + 10}px`,
        height: `${Math.random() * 30 + 10}px`,
        transform: `rotate(${Math.random() * 360}deg)`
      }} />)}
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About <span className="text-[#ADFF2F]">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate developer with a love for creating innovative
              digital experiences. My journey in tech began with a curiosity
              about how things work, and it has evolved into a career crafting
              elegant solutions for complex problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or mentoring aspiring
              developers.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg space-y-4">
            <div className="space-y-2">
              <h3 className="text-[#ADFF2F] font-mono">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map(tech => <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>)}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#ADFF2F] font-mono">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["AI/ML", "Web3", "UI/UX", "DevOps"].map(interest => <span key={interest} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {interest}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};