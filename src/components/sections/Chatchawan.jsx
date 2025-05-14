import React from 'react';
import profilePic from '../../assets/me.jpg';

import svg from '../Lego/svg';

const techStack = [
    { name: 'Linux', icon: svg.linux },
    { name: 'Git', icon: svg.git },
    { name: 'GitHub', icon: svg.github },
    { name: 'Docker', icon: svg.docker },
    { name: 'Postman', icon: svg.postman },
    { name: 'Android Studio', icon: svg.androidstudio },
    { name: 'React', icon: svg.react },
    { name: 'Expo', icon: svg.expo },
    { name: 'Tailwind CSS', icon: svg.tailwindcss },
    { name: 'Node.js', icon: svg.nodedotjs },
    { name: 'Express.js', icon: svg.express },
    { name: 'MongoDB', icon: svg.mongodb },
    { name: 'MariaDB', icon: svg.mariadb },

]

const languages = [
    { name: 'Python', icon: svg.python },
    { name: 'HTML5', icon: svg.html5 },
    { name: 'CSS', icon: svg.css },
    { name: 'TypeScript', icon: svg.typescript },
    { name: 'JavaScript', icon: svg.javascript },
]

const Chatchawan = () => {
  return (
    <section className="flex flex-col flex-grow w-full h-full px-8 py-8 max-w-6xl text-left overflow-y-auto">
      <img
        src={profilePic}
        alt="Chatchawan"
        className="w-60 h-60 object-cover border-4 border-black"
      />

      <div className="mt-8 flex items-center gap-6">
        <div>
          <h2 className="text-xl text-black">About Me</h2>
          <p className="text-md text-black/80 leading-relaxed">
            I’m Chatchawan, a tech enthusiast and digital artisan from Thailand. Passionate about
            anime, gaming, and bringing ideas to life through code.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg text-black font-semibold mt-4 mb-2">Programming Languages:</h3>
        <div className="flex flex-wrap gap-4">
          {languages.map((Lang) => (
            <div key={Lang.name} className="flex flex-col items-center w-16">
              <img src={Lang.icon} alt={Lang.name} className="w-10 h-10 object-contain" />
              <span className="text-xs text-black text-center mt-1">{Lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg text-black font-semibold mt-4 mb-2">Technologies I Use:</h3>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center w-16">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
              <span className="text-xs text-black text-center mt-1">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Chatchawan
