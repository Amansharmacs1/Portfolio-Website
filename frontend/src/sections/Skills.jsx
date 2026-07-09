import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Cloud, Wrench, BrainCircuit } from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass relative p-6 sm:p-8 rounded-[2rem] border border-white/40 dark:border-white/5 transition-all duration-500 group overflow-hidden bg-white/40 dark:bg-slate-900/40 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Decorative gradient blob inside card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-700"></div>

              <h3 className="text-xl font-heading font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {skillGroup.icon}
                </div>
                {skillGroup.category}
              </h3>
              
              <motion.div 
                className="flex flex-wrap gap-2.5 relative z-10"
                variants={containerVariants}
              >
                {skillGroup.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    variants={pillVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#0071e3", 
                      color: "#ffffff", 
                      borderColor: "#0071e3",
                      boxShadow: "0 10px 20px -10px rgba(0, 113, 227, 0.5)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-sm cursor-pointer select-none transition-colors backdrop-blur-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
