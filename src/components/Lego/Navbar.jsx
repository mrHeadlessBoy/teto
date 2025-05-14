import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

const getButtonClass = (path) => {
  const isActive =
    (path === 'home' && (pathname === '/' || pathname === '/greetings')) ||
    pathname === `/${path}`;

  if (path === 'hollow') {
    const isHollowActive = pathname === '/hollow';
    return `transition px-2 py-1 w-full text-left cursor-pointer ${
      isHollowActive
        ? 'bg-red-600 text-white'
        : 'hover:bg-red-600 hover:text-white text-black'
    }`;
  }

  return `transition px-2 py-1 w-full text-left cursor-pointer ${
    isActive ? 'bg-black/70 text-white' : 'hover:bg-black/70 hover:text-white text-black'
  }`;
};



  return (
    <nav className="w-48 h-full bg-white/10 text-black border-r border-black flex flex-col items-start justify-center gap-6 px-4 text-lg z-10">
      <Link to="/greetings" className={getButtonClass('home')}>{'> '}Greetings</Link>
      <Link to="/chatchawan" className={getButtonClass('chatchawan')}>{'> '}Chatchawan</Link>
      <Link to="/project" className={getButtonClass('project')}>{'> '}Project</Link>
      <Link to="/hollow" className={getButtonClass('hollow')}>{'> '}Heart</Link>
    </nav>
  );
};

export default Navbar;
