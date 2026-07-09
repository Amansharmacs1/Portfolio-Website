import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const experienceData = [
  {
    role: "Joint Secretary",
    company: "ISTE Student Chapter",
    period: "2025 – Present",
    responsibilities: [
      "Organized technical workshops",
      "Managed student engagement",
      "Coordinated events"
    ],
    images: ["./iste1.jpeg", "./iste2.jpeg", "./iste3.jpeg", "./iste4.jpeg"]
  },
  {
    role: "Campus Ambassador",
    company: "Unstop",
    period: "Jan 2026 – June 2026",
    responsibilities: [
      "Promoted hackathons and competitions",
      "Built student communities",
      "Increased participation in career opportunities"
    ],
    images: ["./unstop1.jpeg", "./unstop2.jpeg", "./unstop3.jpeg", "./unstop4.jpeg"]
  }
];

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Experience & Leadership</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-950"></span>
              
              <div className="glass p-6 sm:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-primary-500 font-medium text-lg mt-1">{exp.company}</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
                    {exp.period}
                  </div>
                </div>
                
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-6 mb-3 uppercase tracking-wider">Responsibilities</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <span className="text-primary-500 mt-1">✓</span> {task}
                    </li>
                  ))}
                </ul>

                {exp.images && exp.images.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Gallery</h4>
                    <div 
                      className="flex gap-4 overflow-x-auto pb-4 snap-x"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {exp.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="flex-none w-56 sm:w-64 aspect-video rounded-xl overflow-hidden shadow-md snap-center">
                          <img 
                            src={img} 
                            alt={`${exp.company} gallery ${imgIdx + 1}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" 
                            onClick={() => setSelectedImage(img)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-lg transition-all z-[60]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
