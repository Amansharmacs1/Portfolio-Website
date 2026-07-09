import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Briefcase, Award, GraduationCap, FileBadge, CheckCircle, ShieldCheck } from 'lucide-react';

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
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: index * 0.1 }}
              className="glass relative p-6 sm:p-8 rounded-[2rem] border border-white/40 dark:border-white/5 transition-all duration-500 group overflow-hidden bg-white/40 dark:bg-slate-900/40 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col items-center text-center"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-700"></div>
              
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 relative z-10">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium relative z-10">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass relative p-6 sm:p-8 rounded-[2rem] border border-white/40 dark:border-white/5 transition-all duration-500 group overflow-hidden bg-white/40 dark:bg-slate-900/40 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col items-center text-center"
            >
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-700"></div>
              
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 relative z-10">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium relative z-10">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
