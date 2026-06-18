import React, { useEffect, useState } from "react";
import school from "../assets/school.jpg";
import college from "../assets/college.jpg";
import msrit from "../assets/msrit.jpg";
import vit from "../assets/vit.jpg";

function Education() {
  const [isVisible, setIsVisible] = useState({
    school: false,
    college: false,
    btech: false,
    mtech: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".education-card");

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
    <section id="education" className="py-12 px-6 md:px-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Education & Achievements
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">

        {/* School */}
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
              SSLC - 2006 to 2019
            </h3>

            <h4 className="text-xl font-bold mb-2">
              Vidya Bharathi English School, Bangalore
            </h4>

            <p className="mb-2">Achievements:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Scored 92.96% in Karnataka State Board Examination</li>
              <li>Winner of Debate Competitions</li>
              <li>Winner of Quiz Competitions</li>
            </ul>

            <p>Activities:</p>
            <ul className="list-disc list-inside">
              <li>Active participant in cultural programs</li>
              <li>Represented school in Throwball and Volleyball</li>
              <li>Member of School Quiz Team</li>
            </ul>
          </div>
        </div>

        {/* PU College */}
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
              BGS PU College, Bangalore
            </h4>

            <p className="mb-2">Achievements:</p>
            <ul className="list-disc list-inside mb-4">
              <li>College achieved 100% Results and State Rank 1</li>
              <li>Scored 99% in 1st PUC</li>
              <li>KCET Rank: 3.5K</li>
              <li>JEE Main: 91 Percentile</li>
            </ul>

            <p>Activities:</p>
            <ul className="list-disc list-inside">
              <li>Dance and Cultural Events</li>
              <li>Event Hosting and Anchoring</li>
              <li>Active participant in College Programs</li>
            </ul>
          </div>
        </div>

        {/* B.Tech */}
        <div
          className={`education-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.btech
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="btech"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={msrit}
              alt="BTech"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
          </div>

          <div className="text-white text-left">
            <h3 className="text-2xl font-bold mb-4">
              B.Tech (ECE) - 2021 to 2025
            </h3>

            <h4 className="text-xl font-bold mb-2">
              Ramaiah Institute of Technology, Bangalore
            </h4>

            <p className="mb-2">Activities & Societies:</p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Edhitha UAV Team - Worked on autonomous UAVs and navigation
                systems
              </li>
              <li>IEEE Communications Society (ComSoc) Member</li>
              <li>NSS Volunteer</li>
            </ul>

            <p className="mb-2">Achievements:</p>
            <ul className="list-disc list-inside">
              <li>Graduated with 9.35 CGPA</li>
              <li>15th Place among 71 International Teams at SUAS 2023</li>
              <li>Won $500 Cash Prize at SUAS 2023</li>
              <li>Received Just Joe Sportsmanship Award</li>
              <li>Winner - Hardware Hackathon (₹2,000 Cash Prize)</li>
              <li>Published Research Paper in IEEE Xplore</li>
            </ul>
          </div>
        </div>

        {/* M.Tech */}
        <div
          className={`education-card p-6 rounded-lg bg-gray-800 shadow-lg w-full sm:w-80 md:w-96 transform transition-transform duration-700 ease-in-out ${
            isVisible.mtech
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          } hover:scale-105`}
          data-name="mtech"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={vit}
              alt="MTech"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
          </div>

          <div className="text-white text-left">
            <h3 className="text-2xl font-bold mb-4">
              M.Tech (VLSI Design) - 2025 to 2027
            </h3>

            <h4 className="text-xl font-bold mb-2">
              Vellore Institute of Technology, Vellore
            </h4>

            <p className="mb-2">Achievements:</p>
            <ul className="list-disc list-inside mb-4">
              <li>CGPA: 9.15</li>
              <li>Merit Scholarship Recipient</li>
              <li>Secured Intel Internship through Campus Placement</li>
            </ul>

            <p>Focus Areas:</p>
            <ul className="list-disc list-inside">
              <li>VLSI Design and Verification</li>
              <li>Digital IC Design</li>
              <li>RTL Design using Verilog & SystemVerilog</li>
              <li>Physical Design and Timing Analysis</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
