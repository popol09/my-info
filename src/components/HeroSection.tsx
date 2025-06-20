import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute border border-[#ADFF2F]" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 50 + 20}px`,
        height: `${Math.random() * 50 + 20}px`,
        transform: `rotate(${Math.random() * 360}deg)`
      }} />)}
      </div>
      <div className="relative w-full">
        {/* Half Hexagon Image Container */}
        <div className="
            absolute left-0 top-0 h-full
            w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]
            overflow-hidden
          ">
          <div className="
              absolute 
              top-1/2 -translate-y-1/2 -left-1/2
              w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]
            " style={{
          // background: "linear-gradient(to right, transparent, #0A0A0A)",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          zIndex: 1
        }} />
          <div className="
              absolute 
              top-1/2 -translate-y-1/2 -left-1/4
              w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]
              transition-transform duration-700 ease-in-out
              hover:scale-105
            " style={{
          // backgroundImage: 'url("https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3")',
          backgroundImage: 'url("ghibli me1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          // clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 100%, 0% 0%)"
        }} />
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
          <div className="
            pt-[45vh] sm:pt-[50vh] md:pt-0
            md:min-h-screen flex items-center
            md:ml-[40%] lg:ml-[35%]
          ">
            <div className="md:pl-12">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white relative">
                JOHN{" "}
                <span className="text-[#ADFF2F] relative">
                  PAUL
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-[#ADFF2F] to-transparent" />
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 font-mono">
                Aspiring to be Developer & Designer
              </p>
              <div className="flex gap-6">
                <a href="https://github.com/popol09" className="text-[#ADFF2F] hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/john-paul-dela-rosa-8358411ba/" className="text-[#ADFF2F] hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:delarosapauldelarosa@gmail.com?subject=Hello&body=Hi%20there!" className="text-[#ADFF2F] hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};