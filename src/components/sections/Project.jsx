import React from 'react';

const Project = () => {
  const projects = [
    {
      name: "Portfolio",
      description: "Retro CRT-styled responsive portfolio built with React and Tailwind. Includes glitch effects, scanlines, and a VTube integration section.",
      tools: "react, tailwindcss, vite, css",
      link: "https://chatchawan-recruitment.vercel.app/",
    },
    {
      name: "URRW Admission",
      description: "A website for register student admissions, including a database and user-friendly interface.",
      tools: "react, css, nodejs, express, google api",
      link: "https://admission-urrwnm.vercel.app/",
    },
    {
      name: "Irome AI",
      description: "AI assistant with multiple personalities, emotion control, voice output routing, and full memory control. Styled for VTubing & real-time interaction.",
      tools: "python, voicevox, gemini, genarative ai, whisper",
      link: null,
    },
    {
      name: "Technician Finder",
      description: "An Application for finding technicians in Thailand, with a user-friendly interface easy to use.",
      tools: "react native, expo, nodejs, express, mongodb",
      link: null,
    },
    {
      name: "Bun Todos List",
      description: "A simple todo list application.",
      tools: "Bun, React, TailwindCSS, CSS, elysia",
      link: "https://bunweb-nfu9-jade.vercel.app/",
    },
    // Add more projects as needed
  ];

  return (
    <section className="px-8 w-full h-full overflow-hidden">
      <div className="overflow-y-auto max-h-full pr-2 space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-black/30 mt-14 p-4 rounded bg-black/5 backdrop-blur-md hover:bg-black/10 transition"
          >
            <h3 className="text-lg text-red-600 font-semibold mb-4">{project.name}</h3>
            <p className="text-sm text-black/80 mt-2">{project.description}</p>
            <p className='text-md text-black/80 mt-2'>tools: {project.tools}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-black/60 p-2 w-40 mt-2 hover:bg-red-600 hover:text-white font-semibold block"
              >{'> '}INSPECT</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
