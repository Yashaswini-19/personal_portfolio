import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Import your logos
import processorLogo from "../assets/processor.jpg";
import cadenceLogo from "../assets/cadenceLogo.webp";
import multisimLogo from "../assets/mulitisimLogo.jpeg";
import fpgaLogo from "../assets/fpgaLogo.png";
import vivadoLogo from "../assets/vivadoLogo.jpg";
import verilogLogo from "../assets/verilogLogo.png";
import systemverilogLogo from "../assets/systemverilogLogo.png";
import edaLogo from "../assets/edaLogo.png";
import antennaLogo from "../assets/antennaLogo.png";
import ansysLogo from "../assets/ansysLogo.webp";
import imgLogo from "../assets/imgLogo.webp";
import matlabLogo from "../assets/matlabLogo.gif";
import simulinkLogo from "../assets/simulinkLogo.png";
import arduino from "../assets/arduino.png";
import rasp from "../assets/raspberry.png";
import lpc from "../assets/lpc2148.jpg";
import pcb from "../assets/pcb.webp";
import tinkercad from "../assets/tinkercad.jpg";
import kicad from "../assets/kicad.png";
import reactjs from "../assets/react.png";
import nodejs from "../assets/node.png";
import expressjs from "../assets/express.png";
import ejs from "../assets/ejs.png";
import mongodb from "../assets/mongodb.svg";
import flask from "../assets/flask.webp";
import tailwind from "../assets/tailwindcss.avif";
import css from "../assets/css.png";
import html from "../assets/html.webp";
import javascript from "../assets/javascript.webp";
import c from "../assets/c.png";
import cpp from "../assets/c++.webp";
import python from "../assets/python.png";
import boot from "../assets/bootstap.svg";
import git from "../assets/git.webp";
import github from "../assets/github.webp";
import os from "../assets/os.png";
import dbms from "../assets/dbms.png";
import coa from "../assets/coa.png";
import cn from "../assets/cn.jpg";
import oops from "../assets/oops.webp";
import jetson from "../assets/jetsonnano.png";
import esp32 from "../assets/esp32.png";
import primetime from "../assets/primetime.png";
import innovus from "../assets/innovus.png";
import dc from "../assets/designcompiler.png";
import icc2 from "../assets/icc2.png";
import dft from "../assets/dft.png";
import sta from "../assets/sta.png";
import pd from "../assets/physicaldesign.png";

// Sample skills data
const skillsData = [
  {
    category: "VLSI Design & Physical Design",
    items: [
      { name: "RTL Design", logo: verilogLogo },
      { name: "Digital IC Design", logo: processorLogo },
      { name: "Physical Design", logo: pd },
      { name: "Verilog HDL", logo: verilogLogo },
      { name: "SystemVerilog", logo: systemverilogLogo },
      { name: "FPGA Development", logo: fpgaLogo },
      { name: "Xilinx Vivado", logo: vivadoLogo },
      { name: "Cadence Virtuoso", logo: cadenceLogo },
      { name: "Cadence Genus", logo: cadenceLogo },
      { name: "Cadence Innovus", logo: innovus },
      { name: "Synopsys Design Compiler", logo: dc },
      { name: "ICC2", logo: icc2 },
      { name: "PrimeTime STA", logo: primetime },
      { name: "Logic Synthesis", logo: dc },
      { name: "Floorplanning", logo: pd },
      { name: "Power Planning", logo: pd },
      { name: "Placement", logo: pd },
      { name: "Clock Tree Synthesis", logo: sta },
      { name: "Routing", logo: pd },
      { name: "Static Timing Analysis", logo: sta },
      { name: "Timing Closure", logo: sta },
      { name: "Physical Verification", logo: pd },
      { name: "Design Rule Checks", logo: pd },
      { name: "DFT Fundamentals", logo: dft },
      { name: "Multisim", logo: multisimLogo },
    ],
  },

  {
    category: "Verification & EDA Tools",
    items: [
      { name: "SystemVerilog", logo: systemverilogLogo },
      { name: "EDA Playground", logo: edaLogo },
      { name: "Functional Verification", logo: edaLogo },
      { name: "Testbench Development", logo: edaLogo },
      { name: "Simulation", logo: edaLogo },
      { name: "Debugging", logo: edaLogo },
      { name: "Assertion Based Verification", logo: edaLogo },
    ],
  },

  {
    category: "Embedded Systems, IoT & Edge AI",
    items: [
      { name: "Arduino", logo: arduino },
      { name: "ESP32", logo: esp32 },
      { name: "Raspberry Pi", logo: rasp },
      { name: "NVIDIA Jetson Nano", logo: jetson },
      { name: "LPC2148", logo: lpc },
      { name: "PCB Design", logo: pcb },
      { name: "KiCad", logo: kicad },
      { name: "TinkerCad", logo: tinkercad },
      { name: "Sensor Interfacing", logo: arduino },
      { name: "Embedded C", logo: c },
    ],
  },

  {
    category: "Signal Processing",
    items: [
      { name: "Image Processing", logo: imgLogo },
      { name: "Video Processing", logo: imgLogo },
      { name: "MATLAB", logo: matlabLogo },
      { name: "Simulink", logo: simulinkLogo },
    ],
  },

  {
    category: "Antennas",
    items: [
      { name: "Antenna Design", logo: antennaLogo },
      { name: "Ansys HFSS", logo: ansysLogo },
    ],
  },

  {
    category: "Programming Languages",
    items: [
      { name: "C", logo: c },
      { name: "C++", logo: cpp },
      { name: "Python", logo: python },
    ],
  },

  {
    category: "Web Development",
    items: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: javascript },
    ],
  },

  {
    category: "Core Computer Science",
    items: [
      { name: "Operating Systems", logo: os },
      { name: "Database Management Systems", logo: dbms },
      { name: "Computer Networks", logo: cn },
      { name: "Object Oriented Programming", logo: oops },
      { name: "Computer Organization & Architecture", logo: coa },
    ],
  },
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section id="skills" className="py-12 content-center justify-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <Slider {...settings} className="flex flex-col gap-12">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center content-center justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-transform transform hover:scale-105"
                >
                  {item.logo ? (
                    <>
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-16 h-16 mx-auto mb-2 rounded-full border-4 border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                      />
                      <h4 className="text-xl font-medium text-white">
                        {item.name}
                      </h4>
                    </>
                  ) : (
                    <h4 className="text-xl font-medium text-white">
                      {item.name}
                    </h4>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
