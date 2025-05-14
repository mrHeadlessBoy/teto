import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../Lego/Navbar';

import HomeContent from './HomeContent'
import Chatchawan from './Chatchawan';
import Project from './Project'
import Hollow from './Hollow'
import NotFound from './NotFound';

const Home = () => {
  const [dateTime, setDateTime] = useState('');
    const { pathname } = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
      const formatter = new Intl.DateTimeFormat('en-TH', options);
      setDateTime(formatter.format(now));
    };

    updateTime(); // call immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // clean up
  }, []);

  return (
    <section id='home' className="h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="relative w-[70vw] h-[90vh] overflow-hidden shadow-2xl vhs-filter bg-white z-20 crt-curved flex">
        
        {/* Sidebar Nav */}
        <Navbar />

        {/* Dynamic content */}
        <div className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/greetings" element={<HomeContent />} />
            <Route path="/chatchawan" element={<Chatchawan />} />
            <Route path="/project" element={<Project />} />
            <Route path="/hollow" element={<Hollow />} />
            <Route path="*" element={<NotFound />} /> {/* <== Add this line */}
          </Routes>
        </div>

        {/* Timestamp */}
        <div className="absolute bottom-8 right-8 text-sm text-white bg-black/40 px-3 py-2 rounded-lg ">
          🔴 REC {dateTime}<br/>
          <div className='text-right '>
           [monitor-{pathname}]
          </div>
        </div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-30 scanlines"></div>
    </section>
  )
}

export default Home
