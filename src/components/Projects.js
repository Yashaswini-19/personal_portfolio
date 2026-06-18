import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  // State to handle dropdown toggles for each section
  const [isAnalogOpen, setIsAnalogOpen] = useState(false);
  const [isDigitalOpen, setIsDigitalOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isIOTOpen, setIsIOTOpen] = useState(false);
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isFullStackOpen, setIsFullStackOpen] = useState(false);
  const [isFullStackMLOpen, setIsFullStackMLOpen] = useState(false);
  const [isMLOpen, setIsMLOpen] = useState(false);

  const smoothTransition = "transition-all duration-500 ease-in-out";

  return (
    <section id="projects" className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Projects
      </h2>

      {/* Analog Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isAnalogOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsAnalogOpen(!isAnalogOpen)}
        >
          Analog VLSI Projects {isAnalogOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isAnalogOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isAnalogOpen && (
            <ProjectCard
              title="Optimization Strategy For Two Stage Op-amp"
              description="This project involves the design of a two-stage operational amplifier (opamp) enhanced with Miller compensation and a nulling resistor to improve stability and performance. The design and simulation were carried out using Cadence Virtuoso."
              githubLink="https://github.com/satwikkamath/Optimization_strategy_for_two_stage_opamp"
            />
          )}
        </div>
      </div>

      {/* Digital Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isDigitalOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsDigitalOpen(!isDigitalOpen)}
        >
          Digital VLSI Projects {isDigitalOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isDigitalOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isDigitalOpen && (
            <>
              <ProjectCard
                title="RISC-V Based Hardware Accelerator for K-Nearest Neighbors (KNN)"
                description="This project is a custom hardware accelerator based on the RISC-V architecture designed to optimize K-Nearest Neighbors (KNN) operations. The accelerator includes several modules such as the Instruction Fetch Unit (IFU), Control Unit, Datapath, and customized Arithmetic Logic Unit (ALU). The design is implemented using Verilog and targets efficient computation for KNN-based algorithms."
                githubLink="https://github.com/satwikkamath/RISCV_Accelerator_for_kNN"
              />
              <ProjectCard
                title="Analysis of Sorting Algorithms"
                description="This projects contains the code, schematics, and reports for Analysis of Sorting Algorithms. The project focuses on implementing and analyzing three sorting algorithms (Bubble Sort, Selection Sort, and Insertion Sort) in Verilog. The algorithms are synthesized using 180nm technology and evaluated for power consumption and timing performance."
                githubLink="https://github.com/satwikkamath/SortingAlgorithmsAnalysis"
              />
            </>
          )}
        </div>
      </div>

      {/* Design Verification Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isDesignOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsDesignOpen(!isDesignOpen)}
        >
          Design Verification Projects {isDesignOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isDesignOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isDesignOpen && (
            <ProjectCard
              title="SPI Master Verification"
              description="This project contains a SystemVerilog verification testbench for an SPI (Serial Peripheral Interface) Master module. The testbench is designed to verify the functionality of the SPI Master by generating stimuli, driving transactions, monitoring the bus, and comparing results using a scoreboard."
              githubLink="https://github.com/satwikkamath/SPI_Master_Verification"
            />
          )}
        </div>
      </div>

      {/* IoT Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isIOTOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsIOTOpen(!isIOTOpen)}
        >
          IoT Projects {isIOTOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isIOTOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isIOTOpen && (
            <>
              <ProjectCard
                title="PCB Design for LED Driver"
                description="This project involves designing a PCB in KiCAD to drive four high-power LEDs using the CAT4104 LED driver IC. The PCB supports PWM dimming control provided by an ESP32 microcontroller and is powered by a 28V supply."
                githubLink="https://github.com/satwikkamath/LED_Driver_PCB_Design"
              />
              <ProjectCard
                title="PCB Design for ESP32 microcontroller with Temperature sensor and RGB LED."
                description="This project focuses on designing a custom PCB using the ESP32-S3-MINI-1-N8 microcontroller. The PCB integrates a temperature and humidity sensor, a RGB LED, and a power regulation system. The design also includes TVS protection diodes for USB input safety. The PCB was designed using KiCad."
                githubLink="https://github.com/satwikkamath/ESP32_with_temp_sensor_PCB_Design"
              />
              <ProjectCard
                title="Morse Code Generator using LPC2148 and Proteus"
                description="The Morse Code Generator project aims to develop an embedded system that converts text input into Morse code signals. It utilizes the LPC2148 microcontroller, a keypad for text input, an LCD for displaying the input text and corresponding Morse code, and either an LED or buzzer for generating Morse code signals."
                githubLink="https://github.com/satwikkamath/Morse_Code_Generator_using_LPC2148"
              />
              <ProjectCard
                title="Morse Code Generator for numbers 0 to 9 using ICs"
                description="This project presents a Morse code generator system built using Arduino Nano, Bluetooth module (HC 05), and various integrated circuits (ICs) including 74147, 7404, 74154, 74LS30A, and 7447. The system allows users to input numbers from 0 to 9 via a Bluetooth serial controller app, which are then converted into Morse code and displayed on a seven-segment display."
                githubLink="https://github.com/satwikkamath/Morse_Code_Generator"
              />
            </>
          )}
        </div>
      </div>

      {/* Frontend Web Development Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isFrontendOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsFrontendOpen(!isFrontendOpen)}
        >
          Frontend Web Development Projects {isFrontendOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isFrontendOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isFrontendOpen && (
            <>
              <ProjectCard
                title="Notronics"
                description="Notronics is a specialized educational platform designed exclusively for students pursuing the Electronics and Communication branch at Ramaiah Institute Of Technology."
                githubLink="https://github.com/satwikkamath/notronics.github.io"
              />
              <ProjectCard
                title="Raksha Music School Website"
                description="This website serves as an online platform to promote and facilitate the enrollment process for aspiring music enthusiasts to one of the best music schools in Bhadravathi, Karnataka."
                githubLink="https://github.com/satwikkamath/Raksha_Music_School.github.io"
              />
            </>
          )}
        </div>
      </div>

      {/* Full Stack Web Development Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isFullStackOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsFullStackOpen(!isFullStackOpen)}
        >
          Full Stack Web Development Projects {isFullStackOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isFullStackOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isFullStackOpen && (
            <>
              <ProjectCard
                title="CarePoint"
                description="CarePoint is a comprehensive web-based healthcare management platform that prioritizes the seamless and efficient experience of both doctors and patients. This platform offers distinct logins for doctors and patients, each with tailored capabilities to meet their specific needs."
                githubLink="https://github.com/satwikkamath/GFGproject"
              />
              <ProjectCard
                title="The Memory Quest"
                description="The Memory Quest is a captivating and interactive game specifically designed to boost cognitive skills and promote mental well-being. This engaging game offers a range of features to help users enhance their memory, focus, and overall mental agility. Here's a description of its key features and components:"
                githubLink="https://github.com/satwikkamath/Manas_Codeathon"
              />
              <ProjectCard
                title="The Book Vault"
                description="The Book Vault is an innovative web application developed as part of the Edkool Contest. This user-friendly platform combines a wealth of features to enhance the reading experience and empower users to build their own digital book collection."
                githubLink="https://github.com/satwikkamath/Edkool_Contest"
              />
              <ProjectCard
                title="FIFA World Cup Database Management"
                description="This project is a comprehensive database management system for the FIFA World Cup, enabling users to access, manage, and perform CRUD operations (Create, Read, Update, Delete) on various types of data related to the tournament, including players, teams, matches, and more."
                githubLink="https://github.com/satwikkamath/DBMS_project"
              />
              <ProjectCard
                title="Personal Portfolio Website"
                description="This site is a reflection of my journey as an ECE student, highlighting my passion and projects in analog and digital IC design, alongside my expertise in MERN stack web development. Explore my work and learn more about my skills and accomplishments."
                githubLink="https://github.com/satwikkamath/Personal_Portfolio"
              />
            </>
          )}
        </div>
      </div>

      {/* Full Stack Web Development + ML Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isFullStackMLOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsFullStackMLOpen(!isFullStackMLOpen)}
        >
          Full Stack Web Development (MERN) + ML Projects{" "}
          {isFullStackMLOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isFullStackMLOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isFullStackMLOpen && (
            <>
              <ProjectCard
                title="Police Data Hub"
                description="Police Data Hub is a secure platform designed to manage police data efficiently and securely. It integrates advanced security measures and modern technologies to ensure the confidentiality, integrity, and transparency of police data handling."
                githubLink="https://github.com/satwikkamath/DataGuardians"
              />
              <ProjectCard
                title="Tree Tally"
                description="Tree Tally is an intelligent tool that harnesses the capabilities of YOLO (You Only Look Once) model for object detection to analyze aerial views of forests. It accurately predicts the number of trees and classifies them into different species based on their diameters. Users can simply upload an aerial image, and Tree Tally generates a bar graph showcasing the distribution of tree species."
                githubLink="https://github.com/satwikkamath/sih_2023"
              />
            </>
          )}
        </div>
      </div>

      {/* ML Projects */}
      <div className="mb-10">
        <h3
          className={`text-2xl font-semibold mb-6 cursor-pointer ${smoothTransition} ${
            isMLOpen ? "text-green-400" : "text-white"
          }`}
          onClick={() => setIsMLOpen(!isMLOpen)}
        >
          ML Projects {isMLOpen ? "▲" : "▼"}
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${smoothTransition} ${
            isMLOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isMLOpen && (
            <ProjectCard
              title="Potato Disease Classifier"
              description="This repository implements a Convolutional Neural Network (CNN) using TensorFlow to classify potato diseases. The model distinguishes between early blight, late blight, and healthy potatoes based on the PlantVillage dataset."
              githubLink="https://github.com/satwikkamath/Potato_Disease_Classifier"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
