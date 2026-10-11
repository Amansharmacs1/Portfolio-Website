import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Publications from '../sections/Publications';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';
import OpenSource from '../sections/OpenSource';

const Home = () => {
  const [visitorCount, setVisitorCount] = useState(100);

  useEffect(() => {
    const now = new Date();
    // Unique key for the current year & month (e.g. "2026-10")
    const currentMonthKey = `${now.getFullYear()}-${now.getMonth() + 1}`;
    
    const storedMonth = localStorage.getItem('portfolio_visitor_month');
    const storedCount = parseInt(localStorage.getItem('portfolio_visitor_count'), 10);

    let count = 100;
    if (storedMonth !== currentMonthKey || isNaN(storedCount) || storedCount < 100) {
      // New month or first visit: starts from 100 (+1 for this visit = 101)
      count = 101;
      localStorage.setItem('portfolio_visitor_month', currentMonthKey);
      localStorage.setItem('portfolio_visitor_count', count.toString());
    } else {
      // Same month: increment with every visit
      count = storedCount + 1;
      localStorage.setItem('portfolio_visitor_count', count.toString());
    }
    
    setVisitorCount(count);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <Experience />
      <Publications />
      <Achievements />
      <Contact />
      
      <footer className="py-10 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 mt-20 flex flex-col items-center justify-center">
        {/* Monthly Visitor Counter Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mb-4 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Users size={13} className="text-primary-500 dark:text-primary-400" />
          <span>Monthly Visitors:</span>
          <span className="font-semibold text-slate-900 dark:text-white tabular-nums">
            {visitorCount}
          </span>
        </div>

        <p>&copy; {new Date().getFullYear()} Aman Sharma. All rights reserved.</p>
        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">Built with MERN Stack, Vite & Tailwind CSS</p>
      </footer>
    </>
  );
};

export default Home;
