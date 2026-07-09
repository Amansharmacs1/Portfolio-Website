import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            I am a Computer Science undergraduate with strong foundations in Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, and System Design fundamentals.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Experienced in building scalable applications using Node.js, Express.js, MongoDB, React, and cloud deployment technologies. Passionate about backend engineering, distributed systems, API design, and performance optimization.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Education</span>
              <span className="text-slate-900 dark:text-white font-semibold">B.E. Computer Science Engineering</span>
              <span className="text-slate-600 dark:text-slate-300">Chitkara University, Himachal Pradesh</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">CGPA</span>
              <span className="text-primary-500 font-heading font-bold text-2xl">9.58/10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
