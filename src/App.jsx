import React, { useEffect } from "react";
import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import Projects from "./components/projects/projects";
import CardSection from "./components/cards/cardSection";
import Navbar from "./components/navbar/navbar";
import Timeline from "./components/timeline/timeline";
import Sponsers from "./components/sponsers/sponser";
import { FaGithub, FaArrowRight } from "react-icons/fa";

function App() {
  useEffect(() => {
    const divider = document.querySelector(".divider");
    divider.classList.add("animate-grow");
  }, []);

  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Hero />
      <div className="divider bg-gray-300 h-1 mx-auto my-8 clip-pointy-edges"></div>{" "}
      {/* Divider */}
      <CardSection />
      {/* <Projects />
      <Timeline />
      <Sponsers /> */}
      <br />
      <p className="sub-heading text-center text-4xl font-bold md:text-3xl sm:text-2xl">
        <span className="block sm:inline">🚧</span>
        <span className="block sm:inline">Under</span>
        <span className="block sm:inline">Development</span>
        <span className="block sm:inline">🚧</span>
      </p>
      <br />
      <div className="flex justify-center">
        <a
          href="https://github.com/mdrn-np/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group rounded-md transition-all duration-300 transform bg-white py-4 px-6 text-lg items-center gap-2 cursor-pointer transition-backgroundColor duration-300 ease-in-out disabled:contrast-75 border text-black focus:border bg-surface border-borderSoft hover:contrast-75 flex w-48 h-12">
            <FaGithub className="mr-2" />
            Help Us
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </a>
      </div>
      <br />
    </>
  );
}

export default App;
