import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [isVLSIOpen, setIsVLSIOpen] = useState(false);
  const [isEmbeddedOpen, setIsEmbeddedOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);

  const smoothTransition = "transition-all duration-500 ease-in-out";

  return (
    <section id="projects" className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>

      {/* VLSI */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isVLSIOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsVLSIOpen(!isVLSIOpen)}
        >
          VLSI & Verification Projects {isVLSIOpen ? "▲" : "▼"}
        </h3>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isVLSIOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isVLSIOpen && (
            <>
              <ProjectCard
                title="Synchronous FIFO Verification"
                description="Designed and verified a Synchronous FIFO using SystemVerilog. Developed testbench architecture, stimulus generation, monitoring, and functional verification."
                githubLink="https://github.com/Yashaswini-19/Synchronous_FIFO"
              />

              <ProjectCard
                title="4-bit Signed Multiplier"
                description="Designed and implemented a signed 4-bit multiplier using Verilog HDL with FPGA validation and seven-segment display output."
                githubLink="#"
              />
            </>
          )}
        </div>
      </div>

      {/* Embedded */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isEmbeddedOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsEmbeddedOpen(!isEmbeddedOpen)}
        >
          Embedded Systems & IoT {isEmbeddedOpen ? "▲" : "▼"}
        </h3>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isEmbeddedOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isEmbeddedOpen && (
            <>
              <ProjectCard
                title="Arduino Sensor Interface System"
                description="Developed an embedded system using Arduino and TCS color sensor to detect colors and control RGB LEDs based on sensor outputs."
                githubLink="https://github.com/Yashaswini-19/Arduino_Sensor"
              />

              <ProjectCard
                title="Release Mechanism Control"
                description="Implemented and tested an Arduino-based release mechanism for automation and UAV applications."
                githubLink="https://github.com/Yashaswini-19/Arduino"
              />

              <ProjectCard
                title="Soil Monitoring System"
                description="Integrated pH, EC and environmental sensors using Raspberry Pi 4, ESP32 and Arduino. Developed a Python GUI for real-time monitoring and visualization."
                githubLink="#"
              />
            </>
          )}
        </div>
      </div>

      {/* Research */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isResearchOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsResearchOpen(!isResearchOpen)}
        >
          Research & UAV Projects {isResearchOpen ? "▲" : "▼"}
        </h3>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isResearchOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isResearchOpen && (
            <>
              <ProjectCard
                title="Drone Obstacle Avoidance System"
                description="Research project at IISc utilizing Intel RealSense cameras for obstacle detection and avoidance in autonomous UAVs."
                githubLink="#"
              />

              <ProjectCard
                title="GNSS Based GPS Coordinate Extraction"
                description="Developed a GNSS receiver interface with Raspberry Pi 4B to extract and process GPS coordinates for navigation applications."
                githubLink="#"
              />

              <ProjectCard
                title="Autonomous UAV Development"
                description="Designed and integrated UAV subsystems for payload delivery, mapping, surveillance, object detection and autonomous navigation as part of Edhitha UAV Team."
                githubLink="#"
              />
            </>
          )}
        </div>
      </div>

      {/* Software & ML */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isSoftwareOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
        >
          Software & Machine Learning {isSoftwareOpen ? "▲" : "▼"}
        </h3>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isSoftwareOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isSoftwareOpen && (
            <>
              <ProjectCard
                title="Hospital Management System"
                description="Developed a web-based hospital management platform to manage patients, appointments and healthcare records."
                githubLink="https://github.com/Yashaswini-19/Hospital-management-system"
              />

              <ProjectCard
                title="Email Spam Classifier"
                description="Built a Naive Bayes machine learning model to classify spam and non-spam emails with high accuracy."
                githubLink="https://github.com/Yashaswini-19/Email-classifier-spam-not-spam-using-naive-bayes"
              />

              <ProjectCard
                title="Personal Portfolio Website"
                description="Designed and developed a responsive portfolio website showcasing education, experience, achievements, projects and technical skills."
                githubLink="https://github.com/Yashaswini-19/personal_portfolio"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
