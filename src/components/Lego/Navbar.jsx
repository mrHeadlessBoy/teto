import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getButtonClass = (path) => {
    const isActive =
      (path === 'home' && (pathname === '/' || pathname === '/greetings')) ||
      pathname === `/${path}`;

    const base = `transition px-4 py-2 w-40 text-left cursor-pointer text-lg`;
    const active = path === 'hollow'
      ? 'bg-red-600 text-white'
      : 'bg-white/80 text-black font-bold';

    const hover = path === 'hollow'
      ? 'hover:bg-red-600 hover:text-white'
      : 'hover:bg-white/50 hover:text-black';

    return `${base} ${isActive ? active : hover}`;
  };

  return (
    <div className="relative z-20">
      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-black/70 text-white text-left rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <span>{'> close'}</span> : <span>{'> terminal'}</span>}
      </button>

      {/* Sidebar Nav */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-black/80 border-r border-black p-6 pt-20 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-54 md:h-full md:pt-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-10">
          {/* Logo */}
    <div className="w-full flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-wide text-red-600">[CHATCHAWAN]</h1>
    </div>
    <div className="w-full border-2 border-white/80 my-2"></div>

          {/* Nav Links */}
          <ul className="flex flex-col gap-4 w-full text-center">
            <Link to="/greetings" className={getButtonClass('home')} onClick={() => setIsOpen(false)}>{'> '}Greetings</Link>
            <Link to="/chatchawan" className={getButtonClass('chatchawan')} onClick={() => setIsOpen(false)}>{'> '}Chatchawan</Link>
            <Link to="/project" className={getButtonClass('project')} onClick={() => setIsOpen(false)}>{'> '}Project</Link>
            <Link to="/hollow" className={getButtonClass('hollow')} onClick={() => setIsOpen(false)}>{'> '}Heart</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
