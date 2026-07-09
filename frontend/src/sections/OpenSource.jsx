import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Package, Github } from 'lucide-react';

const OpenSource = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="opensource" className="py-20 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Open Source Contributions</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-slate-200 dark:border-slate-800"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            
            {/* Image Thumbnail */}
            <div className="w-full md:w-1/3 aspect-square rounded-2xl shadow-xl overflow-hidden bg-slate-900 flex-shrink-0 border border-slate-200 dark:border-slate-700/50 transform group-hover:scale-105 transition-transform duration-500">
              <img 
                src="./otpcraft.png" 
                alt="otpcraft npm package" 
                className="w-full h-full object-contain object-center cursor-pointer p-4" 
                onClick={() => setSelectedImage("./otpcraft.png")}
              />
            </div>

            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-2">
                <Package className="text-primary-500" size={28} />
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                  otpcraft
                </h3>
              </div>
              <p className="text-primary-500 font-medium mb-6">Published npm Package</p>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                A modern, secure, and zero-dependency OTP (One-Time Password) toolkit for Node.js. It features secure generation using native cryptography, timing-safe validation, timed tokens, and built-in SHA-256 hashing.
              </p>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {["Secure Random Generation", "Timing-Safe Validation", "Zero Dependencies", "Custom Formatting", "SHA-256 Hashing"].map((feature, idx) => (
                    <span key={idx} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href="https://www.npmjs.com/package/otpcraft" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-[#CB3837] hover:bg-[#ab2b2a] px-6 py-3 rounded-xl font-medium transition-colors shadow-md w-fit">
                  <Package size={18} /> View on npm
                </a>
                <a href="https://github.com/Amansharmacs1/otpcraft" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 py-3 rounded-xl font-medium transition-colors shadow-sm w-fit">
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
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
