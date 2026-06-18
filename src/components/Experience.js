import React, { useEffect, useState } from "react";

import intelLogo from "../assets/intel.png";
import tvsLogo from "../assets/tvs.png";
import arkashineLogo from "../assets/arkashine.png";
import iiscLogo from "../assets/iisc.png";
import rriLogo from "../assets/rri.png";
import edhithaLogo from "../assets/edhitha.png";

function Experience() {
  const [isVisible, setIsVisible] = useState({
    intel: false,
    tvs: false,
    arkashine: false,
    iisc: false,
    rri: false,
    edhitha: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = entry.target.dataset.name;

          setIsVisible((prev) => ({
            ...prev,
            [name]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const cardClass = (name) =>
    `experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
      isVisible[name]
        ? "translate-x-0 opacity-100"
        : "-translate-x-10 opacity-0"
    } hover:scale-105`;

  return (
    <section id="experience" className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Experience
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">

        {/* Intel */}
        <div className={cardClass("intel")} data-name="intel">
          <div className="flex justify-center mb-4">
            <img
              src={intelLogo}
              alt="Intel"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-white">
            Intel Corporation
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center text-gray-300">
            VLSI Intern | 2026 - Present
          </h4>

          <ul className="list-disc list-inside text-white">
            <li>Selected through campus placement</li>
            <li>Working in VLSI Design and Semiconductor Technologies</li>
            <li>Applying RTL Design, Verification and Physical Design concepts</li>
          </ul>
        </div>

        {/* TVS */}
        <div className={cardClass("tvs")} data-name="tvs">
          <div className="flex justify-center mb-4">
            <img
              src={tvsLogo}
              alt="TVS"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-white">
            TVS Motor Company
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center text-gray-300">
            Project Trainee | Jul 2024 - Sep 2024
          </h4>

          <ul className="list-disc list-inside text-white">
            <li>Reverse engineered instrument clusters</li>
            <li>PCB design analysis and cost estimation</li>
            <li>Worked on electronics manufacturing workflows</li>
          </ul>
        </div>

        {/* ArkaShine */}
        <div className={cardClass("arkashine")} data-name="arkashine">
          <div className="flex justify-center mb-4">
            <img
              src={arkashineLogo}
              alt="ArkaShine"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-white">
            ArkaShine Innovations
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center text-gray-300">
            Consultant | Mar 2024 - Jul 2024
          </h4>

          <ul className="list-disc list-inside text-white">
            <li>Developed Raspberry Pi based soil analysis system</li>
            <li>Integrated ESP32, Arduino Uno, EC and pH sensors</li>
            <li>Built Python GUI using Pygame</li>
            <li>Created real-time soil monitoring solution</li>
          </ul>
        </div>

        {/* IISc */}
        <div className={cardClass("iisc")} data-name="iisc">
          <div className="flex justify-center mb-4">
            <img
              src={iiscLogo}
              alt="IISc"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-white">
            Indian Institute of Science (IISc)
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center text-gray-300">
            Research Intern | Nov 2023 - Dec 2023
          </h4>

          <ul className="list-disc list-inside text-white">
            <li>Worked with Intel RealSense Camera</li>
            <li>Implemented obstacle avoidance for autonomous drones</li>
            <li>Contributed to UAV perception systems</li>
          </ul>
        </div>

        {/* Raman Research Institute */}
        <div className={cardClass("rri")} data-name="rri">
          <div className="flex justify-center mb-4">
            <img
              src={rriLogo}
              alt="RRI"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-white">
            Raman Research Institute
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center text-gray-300">
            Research Intern | Sep 2023 - Oct 2023
          </h4>

          <ul className="list-disc list-inside text-white">
            <li>Extracted GPS coordinates using GNSS systems</li>
            <li>Interfaced GNSS receiver with Raspberry Pi 4B</li>
            <li>Worked on satellite navigation systems</li>
          </ul>
        </div>

        {/* Edhitha */}
        <div className={cardClass("edhitha")} data-name="edhitha">
          <div className="flex justify-center mb-4">
            <img
              src={edhithaLogo}
              alt="Edhitha"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-white">
            Edhitha Unmanned Aerial Systems
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center text-gray-300">
            Structure & Propulsion Subteam | Jan 2021 - Jul 2023
          </h4>

          <ul className="list-disc list-inside text-white">
            <li>Developed autonomous UAV capabilities</li>
            <li>Worked on payload delivery and obstacle avoidance</li>
            <li>Contributed to object detection and mapping systems</li>
            <li>15th place among 71 global teams at SUAS 2023</li>
            <li>Won $500 cash prize and Just Joe Sportsmanship Award</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
