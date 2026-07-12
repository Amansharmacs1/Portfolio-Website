import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Package, Github } from 'lucide-react';

const packages = [
  {
    name: "otpcraft",
    subtitle: "PUBLISHED NPM PACKAGE",
    image: "./otpcraft.png",
    description: "A modern, secure, and zero-dependency OTP (One-Time Password) toolkit for Node.js. It features secure generation using native cryptography, timing-safe validation, timed tokens, and built-in SHA-256 hashing.",
    features: ["Secure Random Generation", "Timing-Safe Validation", "Zero Dependencies", "Custom Formatting", "SHA-256 Hashing"],
    tech: ["Node.js", "JavaScript", "NPM"],
    npmLink: "https://www.npmjs.com/package/otpcraft",
    githubLink: "https://github.com/Amansharmacs1/otpcraft"
  },
  {
    name: "validatorcraft",
    subtitle: "PUBLISHED NPM PACKAGE",
    image: "./validatorcraft-logo.jpg",
    description: "A lightweight and robust open-source data validation utility for Node.js, ensuring clean, typed, and secure input handling.",
    features: ["Data Validation", "Type Safety", "Lightweight", "Zero Dependencies"],
    tech: ["Node.js", "JavaScript", "NPM"],
    npmLink: "https://www.npmjs.com/package/validatorcraft",
    githubLink: "https://github.com/Amansharmacs1/validatorcraft"
  }
];

const OpenSource = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="opensource" className="py-24 relative bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Open Source Contributions</h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-[#00d8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.1] rounded-[2rem] p-5 sm:p-7 flex flex-col h-full group hover:bg-slate-50 dark:hover:bg-[#0f1115] transition-all duration-300 shadow-xl dark:shadow-2xl relative overflow-hidden"
            >
              {/* Subtle hover glow effect (Dark mode only) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 dark:bg-[#00d8ff] opacity-0 group-hover:opacity-[0.03] blur-[80px] rounded-full transition-opacity duration-500 pointer-events-none"></div>

              {/* Header Row */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] sm:text-xs font-bold text-primary-600 dark:text-[#00d8ff] uppercase tracking-widest w-3/4 leading-relaxed">
                  {pkg.subtitle}
                </span>
                {pkg.githubLink && (
                  <a 
                    href={pkg.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#161616] flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.2] flex-shrink-0 relative z-10"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              {/* Title & Image */}
              <div className="flex items-center gap-5 mb-6">
                {pkg.image ? (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/[0.05] p-2 relative z-10 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => setSelectedImage(pkg.image)}>
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/[0.05] flex items-center justify-center relative z-10">
                    <Package className="text-slate-400 dark:text-slate-600" size={32} />
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {pkg.name}
                </h3>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow relative z-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <svg className="w-5 h-5 text-primary-500 dark:text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack & NPM Link */}
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/[0.05] relative z-10">
                <h4 className="text-[10px] font-bold text-slate-500 mb-4 flex items-center gap-2">
                  <span className="font-mono">{'</>'}</span> TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pkg.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/[0.05] text-[10px] font-semibold tracking-wider text-slate-600 dark:text-slate-400 rounded-lg">
                      {t.toUpperCase()}
                    </span>
                  ))}
                  {pkg.npmLink && (
                    <a 
                      href={pkg.npmLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 bg-[#CB3837]/10 border border-[#CB3837]/20 text-[10px] font-bold tracking-wider text-[#CB3837] rounded-lg hover:bg-[#CB3837]/20 transition-colors ml-auto flex items-center gap-1"
                    >
                      VIEW ON NPM <ExternalLink size={12} />
                    </a>
                  )}
                </div>
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

export default OpenSource;
