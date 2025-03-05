import React from "react";
export const ContactSection = () => {
  return <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Get in <span className="text-[#ADFF2F]">Touch</span>
        </h2>
        <form className="space-y-6">
          <input type="text" placeholder="Name" className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white" />
          <textarea placeholder="Message" rows={4} className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:border-[#ADFF2F] focus:outline-none text-white" />
          <button type="submit" className="px-8 py-3 bg-[#ADFF2F] text-black font-bold rounded-lg hover:bg-[#98DB29] transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>;
};