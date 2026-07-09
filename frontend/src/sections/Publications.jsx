import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const Publications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="publications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Publications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          {/* Small Corner Image Thumbnail */}
          <div className="hidden sm:block absolute top-8 right-8 z-20">
            <div className="w-32 aspect-[3/4] rounded-lg shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500">
              <img 
                src="./publication.png" 
                alt="EduLife Publication" 
                className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => setSelectedImage("./publication.png")}
              />
            </div>
          </div>

          <div className="relative z-10 sm:pr-40">
            {/* Mobile Image (Visible only on very small screens) */}
            <div className="sm:hidden mb-6 w-32 aspect-[3/4] rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700/50">
              <img 
                src="./publication.png" 
                alt="EduLife Publication" 
                className="w-full h-full object-cover object-top cursor-pointer" 
                onClick={() => setSelectedImage("./publication.png")}
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">
              EduLife – AI Powered Voice Assistant
            </h3>
            <p className="text-primary-500 font-medium mb-8">Research Publication</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Research Summary</h4>
                <p className="text-slate-600 dark:text-slate-300">Exploration of AI-driven voice interaction to streamline academic tasks and improve student productivity.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Architecture Overview</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Integration of speech recognition models with NLP processing pipelines.</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">AI Workflow</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">From audio capture to intent extraction and automated action execution.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <a href="https://tmg.chitkara.edu.in/2025/bridging-the-gap-a-unified-ai-assistant-for-health-education-and-well-being-through-conversational-ai-and-personalized-support/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-primary-500 hover:bg-black dark:hover:bg-white dark:hover:text-black px-6 py-3 rounded-xl font-medium transition-colors shadow-md w-fit">
                View Full Publication <ExternalLink size={18} />
              </a>
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

export default Publications;
