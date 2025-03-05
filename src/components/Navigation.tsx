import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "journey", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };
  return <nav className="fixed top-0 right-0 z-50 p-6">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#ADFF2F] hover:text-white transition-colors">
        <Menu size={24} />
      </button>
      <ul className={`
        flex flex-col md:flex-row gap-6
        ${isMenuOpen ? "block" : "hidden"} md:flex
        absolute md:relative
        right-6 top-16 md:top-0
        bg-[#0A0A0A]/95 md:bg-transparent
        p-6 md:p-0
        rounded-lg md:rounded-none
        border border-gray-800 md:border-none
        min-w-[200px] md:min-w-0
      `}>
        {["HOME", "ABOUT", "JOURNEY", "PROJECTS", "CONTACT"].map(item => <li key={item}>
            <button onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-mono transition-colors hover:text-[#ADFF2F] w-full text-left
                ${activeSection === item.toLowerCase() ? "text-[#ADFF2F]" : "text-gray-400"}
              `}>
              {item}
            </button>
          </li>)}
      </ul>
    </nav>;
};