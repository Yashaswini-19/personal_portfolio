import React from 'react';

function ProjectCard({ title, description, githubLink }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
