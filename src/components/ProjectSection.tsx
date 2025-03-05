import React from "react";
export const ProjectSection = () => {
  const projects = [{
    title: "Project Alpha",
    description: "A futuristic web application",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
  }, {
    title: "Project Beta",
    description: "Advanced AI Integration",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3"
  }, {
    title: "Project Gamma",
    description: "Blockchain Technology",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3"
  }];
  return <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Featured <span className="text-[#ADFF2F]">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-[0_0_20px_rgba(173,255,47,0.3)] transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>)}
      </div>
    </section>;
};