import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/70 dark:bg-black/70 z-10 backdrop-blur-[2px]"></div>
        <img src="./code_hero_bg.jpg" alt="Code Background" className="w-full h-full object-cover opacity-60 dark:opacity-40" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          style={{ y: yText, opacity }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 md:mb-8 border-4 border-white dark:border-primary-500 shadow-2xl shadow-primary-200 dark:shadow-none mx-auto"
          >
            <img 
              src="./profile%20pic.jpeg" 
              alt="Aman Sharma" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-primary-500 dark:text-white mb-4 md:mb-6 tracking-tighter leading-tight">
            Aman Sharma <br/><span className="text-slate-500 dark:text-slate-400">Software Engineer</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto font-light px-2 sm:px-0">
            Crafting premium, scalable, and dynamic web experiences with an obsession for detail.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-black dark:hover:bg-white text-white dark:hover:text-black rounded-full font-medium transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="./Aman Resume new.pdf"
              download="Aman_Sharma_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-full font-medium transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              Resume <Download size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-slate-900 dark:text-white hover:text-primary-700 font-medium transition-all flex items-center justify-center gap-2"
            >
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
