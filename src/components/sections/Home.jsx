import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Lego/Navbar';

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

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <div className="relative w-full max-w-[95vw] h-full max-h-[95vh] md:w-[70vw] md:h-[90vh] overflow-hidden shadow-2xl vhs-filter bg-white z-20 crt-curved flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1 flex items-center justify-center overflow-auto p-2 md:p-0">
          <Outlet />
        </div>
        <div className="absolute bottom-4 right-4 text-xs md:text-sm text-white bg-black/40 px-2 py-1 md:px-3 md:py-2 rounded-lg text-right leading-snug">
          🔴 REC {dateTime}<br />
          <div>[monitor-{pathname}]</div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-30 scanlines"></div>
    </section>
  );
};

export default Home;
