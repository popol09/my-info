import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { JourneySection } from "./components/JourneySection";
import { ProjectSection } from "./components/ProjectSection";
import { ContactSection } from "./components/ContactSection";
export function App() {
  return <main className="bg-[#0A0A0A] min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="journey">
        <JourneySection />
      </section>
      <section id="projects">
        {/* <ProjectSection /> */}
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>;
}