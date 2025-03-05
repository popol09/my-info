import React from "react";
export const JourneySection = () => {
  const timeline = [{
    year: "2024",
    title: "Business Analyst",
    company: "Boss Cargo Express",
    description: "Part of Analytics team that gathered data, emplement, and assures the quality for the system"
  }, {
    year: "2022",
    title: "IT Technocal Support",
    company: "DDC Land Inc.",
    description: "Support and part of emplementation of ERP System from tailored company"
  }, {
    year: "2022",
    title: "Infromation Technology Degree",
    company: "Cavite State University Imus Campus",
    description: "Graduated with Honor in Bachelor of Science & Information Technology"
  }, 
  // {
  //   year: "2018",
  //   title: "Computer Science Degree",
  //   company: "Tech University",
  //   description: "Graduated with honors in Computer Science"
  // }
];
  return <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-[#ADFF2F]">Journey</span>
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-800" />
          {timeline.map((item, index) => <div key={index} className={`relative flex md:flex-row flex-col md:justify-between items-start mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ADFF2F] rounded-full" />
              {/* Content */}
              <div className={`md:w-5/12 ml-6 md:ml-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className="bg-gray-900 p-6 rounded-lg hover:shadow-[0_0_15px_rgba(173,255,47,0.2)] transition-shadow">
                  <span className="text-[#ADFF2F] font-mono text-sm">
                    {item.year}
                  </span>
                  <h3 className="text-white font-bold mt-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};