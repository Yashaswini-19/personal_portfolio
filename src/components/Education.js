import React, { useEffect, useState } from "react";
import school from "../assets/school.jpg";
import college from "../assets/college.jpg";
import msrit from "../assets/msrit.jpg";

function Education() {
  const [isVisible, setIsVisible] = useState({
    school: false,
    college: false,
    engineering: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".education-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = entry.target.dataset.name;
          if (entry.isIntersecting) {
            // When the section comes into view, make it visible
            setIsVisible((prev) => ({
              ...prev,
              [name]: true,
            }));
          } else {
            // When the section leaves view, make it invisible to re-trigger on scroll
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
    <section id="education" className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Education
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {/* Pre-Primary, Primary, and High School */}
        <div
          className={`education-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.school
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="school"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={school}
              alt="School"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
          </div>
          <div className="text-white text-left">
            <h3 className="text-2xl font-bold mb-4">
              Pre-Primary, Primary, and High School - 2006 to 2019
            </h3>
            <h4 className="text-xl font-bold mb-2">
              Poorna Prajna Education Centre, Bhadravathi
            </h4>
            <p className="mb-2">Achievements:</p>
            <ul className="list-disc list-inside mb-4">
              <li>624/625 - 99.84% ( Karnataka SSLC board, State 2nd rank)</li>
              <li>Swamiji's Memorial Award for Science Winner</li>
            </ul>
            <p>Activities:</p>
            <ul className="list-disc list-inside">
              <li>Sports: Throwball, Triple jump, Relay, Volleyball</li>
              <li>School quiz team</li>
            </ul>
          </div>
        </div>

        {/* Pre-University */}
        <div
          className={`education-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.college
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="college"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={college}
              alt="College"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
          </div>
          <div className="text-white text-left">
            <h3 className="text-2xl font-bold mb-4">
              Pre-University - 2019 to 2021
            </h3>
            <h4 className="text-xl font-bold mb-2">
              Malnad PU College (Deeksha), Shivamogga
            </h4>
            <p>Achievements:</p>
            <ul className="list-disc list-inside">
              <li>JEE: 94 percentile</li>
              <li>KCET Rank: 1.5k</li>
              <li>COMEDK Rank: 2.2k</li>
            </ul>
          </div>
        </div>

        {/* Engineering */}
        <div
          className={`education-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.engineering
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="engineering"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={msrit}
              alt="Engineering College"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
          </div>
          <div className="text-white text-left">
            <h3 className="text-2xl font-bold mb-4">
              Engineering - 2021 to 2025
            </h3>
            <h4 className="text-xl font-bold mb-2">
              Ramaiah Institute of Technology
            </h4>
            <p className="mb-2">Activities:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Avionics Head at STARDUST_RIT - Student Club</li>
            </ul>
            <p>Achievements:</p>
            <ul className="list-disc list-inside">
              <li>First Prize, I-Style - CSS Competition</li>
              <li>First Prize, Blinding Bytes 2.0 - Coding Competition</li>
              <li>Second Prize, MQ+ - Maths Quiz</li>
              <li>
                Second Prize, Edkool Contest - Website Building Competition
              </li>
              <li>Consolation Prize, Maanas Codeathon, Bangalore</li>
              <li>
                Finalists, Embedded Programming Challenge, IIT Madras, Chennai
              </li>
              <li>
                Qualified, Karnataka State Police Datathon, SIH 2023(College
                level), Hackest 2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
