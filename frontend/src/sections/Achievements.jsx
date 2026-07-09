import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Briefcase, Award, GraduationCap, FileBadge, CheckCircle, ShieldCheck, Database, BrainCircuit } from 'lucide-react';

const achievementsData = [
  { icon: <Code size={24} />, title: "200+ Problems Solved", subtitle: "on LeetCode" },
  { icon: <GraduationCap size={24} />, title: "CGPA: 9.58/10", subtitle: "Chitkara University" },
  { icon: <Briefcase size={24} />, title: "Built Full Stack Projects", subtitle: "MERN Stack & AI" },
  { icon: <Award size={24} />, title: "Leadership Roles", subtitle: "Unstop & ISTE" },
];

const certificationsData = [
  { icon: <Code size={24} />, title: "MERN Stack Development", subtitle: "Apna College" },
  { icon: <Award size={24} />, title: "Certification of AI", subtitle: "University Chancellor" },
  { icon: <FileBadge size={24} />, title: "Infosys Certification", subtitle: "Infosys" },
  { icon: <Database size={24} />, title: "MongoDB CRUD operation", subtitle: "MongoDB University" },
  { icon: <BrainCircuit size={24} />, title: "Prompt Engineering Bootcamp", subtitle: "LetsUpgrade" },
];

const TimelineNode = ({ item, index, isLast }) => {
  return (
    <div className="relative flex gap-6 md:gap-12 group">
      
      {/* Timeline track and node */}
      <div className="relative flex flex-col items-center">
        {/* Background Line */}
        {!isLast && (
          <div className="absolute top-12 md:top-16 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -mb-12 md:-mb-16"></div>
        )}
        
        {/* Animated fill line */}
        {!isLast && (
          <motion.div
            className="absolute top-12 md:top-16 bottom-0 w-[2px] bg-primary-500 origin-top -mb-12 md:-mb-16 z-0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
        )}

        {/* The Node Icon */}
        <motion.div 
          className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-primary-500 group-hover:text-primary-500 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-500"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
        >
          {React.cloneElement(item.icon, { className: "w-5 h-5 md:w-7 md:h-7" })}
        </motion.div>
      </div>

      {/* Content Block */}
      <motion.div 
        className="flex-1 pb-12 md:pb-16 pt-2 md:pt-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-base md:text-lg text-primary-500 font-medium">
            {item.subtitle}
          </p>
        </div>
      </motion.div>
      
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Milestones Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Career Milestones</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </motion.div>

        <div className="relative pl-2 md:pl-4 mb-24">
          {achievementsData.map((item, index) => (
            <TimelineNode 
              key={index} 
              item={item} 
              index={index} 
              isLast={index === achievementsData.length - 1} 
            />
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </motion.div>

        <div className="relative pl-2 md:pl-4">
          {certificationsData.map((item, index) => (
            <TimelineNode 
              key={index} 
              item={item} 
              index={index} 
              isLast={index === certificationsData.length - 1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
