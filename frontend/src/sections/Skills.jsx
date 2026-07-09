import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Database, Cloud, Wrench, BrainCircuit, ChevronRight } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code size={20} />,
    items: ["Java", "JavaScript", "TypeScript", "C", "C++"]
  },
  {
    category: "Frontend",
    icon: <Layout size={20} />,
    items: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Databases",
    icon: <Server size={20} />,
    items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "MySQL"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    items: ["AWS EC2", "Docker", "GitHub Actions"]
  },
  {
    category: "Tools",
    icon: <Wrench size={20} />,
    items: ["Git", "GitHub", "VS Code", "Postman", "Thunder Client"]
  },
  {
    category: "Core CS",
    icon: <BrainCircuit size={20} />,
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {skillsData.map((skill, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`relative flex items-center justify-between w-full p-4 md:p-5 rounded-2xl transition-all duration-300 text-left overflow-hidden group ${
                    isActive 
                      ? "bg-slate-100 dark:bg-slate-900 shadow-sm" 
                      : "hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive ? 'bg-primary-500/10 text-primary-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300'}`}>
                      {skill.icon}
                    </div>
                    <span className={`font-semibold text-lg transition-colors duration-300 ${isActive ? 'text-primary-500 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'}`}>
                      {skill.category}
                    </span>
                  </div>
                  
                  <div className={`relative z-10 transition-transform duration-300 ${isActive ? 'text-primary-500 translate-x-0 opacity-100' : 'text-slate-400 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'}`}>
                    <ChevronRight size={20} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 h-full flex flex-col shadow-xl dark:shadow-2xl overflow-hidden group transition-colors duration-500"
              >
                {/* Technical background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[80px] dark:blur-[100px] pointer-events-none group-hover:bg-primary-500/10 dark:group-hover:bg-primary-500/20 transition-colors duration-700"></div>

                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="p-4 bg-white dark:bg-primary-500/20 text-primary-500 rounded-2xl border border-slate-200 dark:border-primary-500/20 shadow-sm dark:shadow-none transition-colors duration-500">
                    {React.cloneElement(skillsData[activeTab].icon, { size: 32 })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono font-bold text-slate-800 dark:text-white tracking-tight transition-colors duration-500">
                    {skillsData[activeTab].category}
                    <span className="text-primary-500 animate-pulse">_</span>
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-4 relative z-10">
                  {skillsData[activeTab].items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4, type: "spring", stiffness: 200 }}
                      className="px-5 py-2.5 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-primary-300 font-mono text-sm md:text-base rounded-lg border border-slate-200 dark:border-primary-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(0,113,227,0.05)] hover:border-primary-500 hover:dark:border-primary-500/60 hover:shadow-md hover:dark:shadow-[0_0_25px_rgba(0,113,227,0.3)] hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
