import React, { useEffect, useState } from "react";

// Add the paths to your logo images
import samsungLogo from "../assets/samsung.jpeg"; // Replace with the correct path to your Samsung logo
import stardustLogo from "../assets/sd.png"; // Replace with the correct path to your STARDUST logo
import ssirLogo from "../assets/ssir.png"; // Replace with the correct path to your STARDUST logo

function Experience() {
  const [isVisible, setIsVisible] = useState({
    samsung: false,
    stardust: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = entry.target.dataset.name;
          if (entry.isIntersecting) {
            // When the card comes into view, make it visible
            setIsVisible((prev) => ({
              ...prev,
              [name]: true,
            }));
          } else {
            // Reset visibility when it leaves the viewport
            setIsVisible((prev) => ({
              ...prev,
              [name]: false,
            }));
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

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
        {/* Experience Card 1 */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.samsung
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="samsung"
        >
          <div className="flex justify-center mb-4">
            <img
              src={ssirLogo}
              alt="Samsung Logo"
              className="w-20 h-20 object-cover rounded-full" // Rounded image
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">
            Samsung Semiconductor India Research (SSIR) - Bangalore
          </h3>
          <h4 className="text-xl font-bold mb-4 text-center">
            Physical Design Intern - Jan 2025 to July 2025
          </h4>
        </div>
        {/* Experience Card 1 */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.samsung
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="samsung"
        >
          <div className="flex justify-center mb-4">
            <img
              src={samsungLogo}
              alt="Samsung Logo"
              className="w-20 h-20 object-cover rounded-full" // Rounded image
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">Samsung R&D</h3>
          <h4 className="text-xl font-bold mb-4 text-center">
            Samsung PRISM Intern - Aug 2023 to Aug 2024
          </h4>
          <p className="text-white">
            Work done:
            <ul className="list-disc list-inside mt-2">
              <li>
                Input enhancement for Intra prediction for generic video codec -
                Proposed a Pix2Pix model for deforming input, enhancing the
                input to the Video Codec.
              </li>
            </ul>
          </p>
        </div>

        {/* Experience Card 2 */}
        <div
          className={`experience-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.stardust
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="stardust"
        >
          <div className="flex justify-center mb-4">
            <img
              src={stardustLogo}
              alt="STARDUST Logo"
              className="w-20 h-20 object-cover rounded-full" // Rounded image
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center">STARDUST_RIT</h3>
          <h4 className="text-xl font-bold mb-4 text-center">
            Avionics Head - Oct 2023 to Jun 2024
          </h4>
          <h4 className="text-xl font-bold mb-4 text-center">
            Chief System Engineer - Jan 2023 to Oct 2023
          </h4>
          <h4 className="text-xl font-bold mb-4 text-center">
            Sub System Engineer - Feb 2022 to Jan 2023
          </h4>
          <p className="text-white">
            Work done:
            <ul className="list-disc list-inside mt-2">
              <li>Qualified for 2nd round in IROC-2024</li>
              <li>Part of the team conducting Antenna Building Workshop</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
