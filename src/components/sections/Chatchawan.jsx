import React from "react";
import profilePic from "../../assets/me.jpg";

import svg from "../Lego/svg";
import { Link } from "react-router-dom";

const techStack = [
  { name: "Linux", icon: svg.linux },
  { name: "Git", icon: svg.git },
  { name: "GitHub", icon: svg.github },
  { name: "Docker", icon: svg.docker },
  { name: "Postman", icon: svg.postman },
  { name: "Android Studio", icon: svg.androidstudio },
  { name: "React", icon: svg.react },
  { name: "Expo", icon: svg.expo },
  { name: "Tailwind CSS", icon: svg.tailwindcss },
  { name: "Node.js", icon: svg.nodedotjs },
  { name: "Express.js", icon: svg.express },
  { name: "MongoDB", icon: svg.mongodb },
  { name: "MariaDB", icon: svg.mariadb },
];

const languages = [
  { name: "Python", icon: svg.python },
  { name: "HTML5", icon: svg.html5 },
  { name: "CSS", icon: svg.css },
  { name: "TypeScript", icon: svg.typescript },
  { name: "JavaScript", icon: svg.javascript },
];

const contacts = [
  { name: "GitHub", icon: svg.github, link: "https://github.com/mrHeadlessBoy", },
  { name: "Facebook", icon: svg.facebook, link: "https://www.facebook.com/profile.php?id=61560914997446", },
  { name: "Instagram", icon: svg.instagram, link: "https://www.instagram.com/mrheadlessboy/", },
]

const Chatchawan = () => {
  return (
    <section className="flex flex-col flex-grow w-full h-full px-4 sm:px-8 py-8 max-w-6xl text-left overflow-y-auto">
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
        <img
          src={profilePic}
          alt="Chatchawan"
          className="w-60 h-60 grayscale object-cover border-4 border-black"
        />
        <div className="text-left">
          <h2 className="text-xl text-black/80 font-semibold">About Me</h2>
          <p className="text-md text-black/80 leading-relaxed max-w-xl">
            I’m Chatchawan — the Da Vinci of this era — a programmer, web/app/game developer, UX/UI designer, and artist from Thailand.
            I'm most motivated by crafting software, gaming, animation, and bringing ideas to life with my own hands,which is my main task.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-lg text-black font-semibold mb-2">Contact Me:</h3>
        <div className="flex flex-wrap gap-4">
          {contacts.map((contacts) => (
          <div key={contacts.name} className="flex flex-col items-center w-16">
            <a href={contacts.link} target="_blank" rel="noopener noreferrer">
            <img
              src={contacts.icon}
              alt={contacts.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs text-black text-center mt-1">
              {contacts.name}
            </span>
            </a>
          </div>
        ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg text-black font-semibold mt-12 mb-2">
          Programming Languages:
        </h3>
        <div className="flex flex-wrap gap-4">
          {languages.map((Lang) => (
            <div key={Lang.name} className="flex flex-col items-center w-16">
              <img
                src={Lang.icon}
                alt={Lang.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xs text-black text-center mt-1">
                {Lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg text-black font-semibold mt-12 mb-2">
          Technologies Options:
        </h3>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center w-16">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xs text-black text-center mt-1">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chatchawan;
