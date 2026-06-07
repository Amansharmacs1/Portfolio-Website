import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Publications from '../sections/Publications';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Achievements />
      <Contact />
      
      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 mt-20">
        <p>&copy; {new Date().getFullYear()} Aman Sharma. All rights reserved.</p>
        <p className="mt-2">Built with MERN Stack, Vite & Tailwind CSS</p>
      </footer>
    </>
  );
};

export default Home;
