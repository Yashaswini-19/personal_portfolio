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

// Sample skills data
const skillsData = [
  {
    category: "VLSI",
    items: [
      { name: "Analog and Digital IC Design", logo: processorLogo },
      { name: "FPGA Development", logo: fpgaLogo },
      { name: "Xilinx Vivado", logo: vivadoLogo },
      { name: "Cadence Virtuoso, Genus", logo: cadenceLogo },
      { name: "Multisim", logo: multisimLogo },
    ],
  },
  {
    category: "Digital Logic Verification",
    items: [
      { name: "Verilog", logo: verilogLogo },
      { name: "SystemVerilog", logo: systemverilogLogo },
      { name: "EDA Playground", logo: edaLogo },
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
    category: "Signal Processing",
    items: [
      { name: "Image and Video Processing", logo: imgLogo },
      { name: "MATLAB", logo: matlabLogo },
      { name: "Simulink", logo: simulinkLogo },
    ],
  },
  {
    category: "IOT",
    items: [
      { name: "Arduino Programming", logo: arduino },
      { name: "Raspberry Pi", logo: rasp },
      { name: "LPC2148", logo: lpc },
      { name: "PCB Design", logo: pcb },
      { name: "TinkerCad", logo: tinkercad },
      { name: "KiCad", logo: kicad },
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
      { name: "ReactJS", logo: reactjs },
      { name: "NodeJS", logo: nodejs },
      { name: "ExpressJS", logo: expressjs },
      { name: "Flask", logo: flask },
      { name: "MongoDB", logo: mongodb },
      { name: "Embedded JS", logo: ejs },
      { name: "Javascript", logo: javascript },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "CSS", logo: css },
      { name: "Bootstrap", logo: boot },
      { name: "HTML", logo: html },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
    ],
  },
  {
    category: "Technical Skills",
    items: [
      { name: "Operating Systems", logo: os },
      { name: "Database Management Systems", logo: dbms },
      { name: "Computer Networks", logo: cn },
      { name: "Object Oriented Programming", logo: oops },
      { name: "Computer Organization and Architecture", logo: coa },
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
