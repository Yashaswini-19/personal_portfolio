import React, { useEffect, useState } from "react";

import intelLogo from "../assets/intel.png";
import tvsLogo from "../assets/tvs.png";
import arkashineLogo from "../assets/arkashine.png";
import edhithaLogo from "../assets/edhitha.png";

function Experience() {
  const [isVisible, setIsVisible] = useState({
    intel: false,
    tvs: false,
    arkashine: false,
    edhitha: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = entry.target.dataset.name;

          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [name]: true,
            }));
          } else {
            setIsVisible((prev) => ({
              ...prev,
              [name]: false,
            }));
          }
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

  return (
    <section id="experience" className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Experience
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {/* Intel */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.intel
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="intel"
        >
          <div className="flex justify-center mb-4">
            <img
              src={intelLogo}
              alt="Intel"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center">
            Intel Corporation
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center">
            VLSI Intern (Campus Placement)
          </h4>

          <p className="text-white">
            Highlights:
            <ul className="list-disc list-inside mt-2">
              <li>Selected through campus placement drive</li>
              <li>Working in VLSI Design and Semiconductor Technologies</li>
              <li>Applying RTL, Verification and Physical Design concepts</li>
            </ul>
          </p>
        </div>

        {/* TVS */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.tvs
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="tvs"
        >
          <div className="flex justify-center mb-4">
            <img
              src={tvsLogo}
              alt="TVS Motors"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center">
            TVS Motor Company
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center">
            Engineering Intern | Jul 2024 - Sep 2024
          </h4>

          <p className="text-white">
            Work Done:
            <ul className="list-disc list-inside mt-2">
              <li>Reverse-engineered instrument cluster PCBs</li>
              <li>Performed PCB analysis and cost estimation</li>
              <li>Worked with SMT manufacturing processes</li>
            </ul>
          </p>
        </div>

        {/* Arkashine */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.arkashine
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="arkashine"
        >
          <div className="flex justify-center mb-4">
            <img
              src={arkashineLogo}
              alt="Arkashine"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center">
            Arkashine Innovations
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center">
            Embedded Systems Intern | Mar 2024 - Jul 2024
          </h4>

          <p className="text-white">
            Work Done:
            <ul className="list-disc list-inside mt-2">
              <li>Developed Raspberry Pi based soil analysis system</li>
              <li>Integrated EC and pH sensors</li>
              <li>Built Python-based TFT GUI for monitoring and analysis</li>
            </ul>
          </p>
        </div>

        {/* Edhitha UAV Team */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.edhitha
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="edhitha"
        >
          <div className="flex justify-center mb-4">
            <img
              src={edhithaLogo}
              alt="Edhitha UAV Team"
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center">
            Edhitha UAV Team
          </h3>

          <h4 className="text-xl font-bold mb-4 text-center">
            UAV Systems & Navigation Team Member
          </h4>

          <p className="text-white">
            Highlights:
            <ul className="list-disc list-inside mt-2">
              <li>Worked on autonomous UAVs and navigation systems</li>
              <li>Contributed to international SUAS competition</li>
              <li>Achieved 15th place among 71 global teams</li>
              <li>Won $500 cash prize</li>
              <li>Received Just Joe Sportsmanship Award</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
