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
              I’m an aspiring developer and designer with a strong 
              curiosity about how systems work. My journey began 
              with an interest in understanding enterprise systems 
              and the technologies behind them, which eventually led 
              to a desire to contribute to their development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In my free time, I usually take online courses and 
              try some coding challenges I find on the internet. 
              I also enjoy replicating interesting projects or features 
              I come across on the social media pages I follow.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg space-y-4">
            <div className="space-y-2">
              <h3 className="text-[#ADFF2F] font-mono">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JS", "SQL", "Github", "Figma", "Postman"].map(tech => <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>)}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#ADFF2F] font-mono">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["ReactJS", "Tailwind", "NodeJS", "SAP", "Oracle ERP"].map(interest => <span key={interest} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {interest}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};