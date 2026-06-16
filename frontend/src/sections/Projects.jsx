import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const projectsData = [
  {
    title: "AuditAI",
    year: "2026",
    image: "./auditai.png",
    description: "AI-powered spend optimization platform that analyzes subscriptions like ChatGPT, Claude, Gemini, Cursor, and GitHub Copilot to identify unnecessary AI expenses and recommend cost-saving alternatives.",
    features: ["Gemini AI Integration", "Public Shareable Audit URLs", "Passwordless Authentication", "PDF Export", "Audit History Tracking", "Cost Optimization Engine", "REST APIs"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI"],
    live: "https://audit-ai-nu.vercel.app",
    github: "https://github.com/Amansharmacs1/AuditAi"
  },
  {
    title: "WanderStay",
    year: "2025",
    image: "./wanderstay.png",
    description: "Full-stack travel accommodation platform inspired by Airbnb.",
    features: ["JWT Authentication", "Role-Based Access Control", "Property Listings", "REST APIs", "Docker Containerization", "CI/CD using GitHub Actions", "Render Deployment"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Docker"],
    live: "https://wanderstay-ot8f.onrender.com/",
    github: "https://github.com/Amansharmacs1/WanderStay"
  },
  {
    title: "Zerodha Clone",
    year: "2025",
    image: "./zerodha.jpeg",
    description: "Developed a full-stack stock trading platform inspired by Zerodha, providing users with a seamless experience for portfolio management, market tracking, and stock transactions.",
    features: ["Portfolio Dashboard", "Stock Watchlist", "Buy/Sell Order Simulation", "Interactive Charts", "Holdings Tracking"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/Amansharmacs1/Zerodha-Clone"
  },
  {
    title: "EduLife",
    year: "2025",
    image: "./edulife.png",
    description: "AI-powered voice assistant designed for students to improve productivity and automate academic tasks.",
    features: ["Speech Recognition", "NLP-Based Interaction", "Workflow Automation", "Voice Command Processing", "Research Publication"],
    tech: ["Python", "Speech Recognition", "AI/ML"],
    github: "https://github.com/Amansharmacs1/EDULIFE-ai-voice-assistant"
  },
  {
    title: "EventSphere",
    year: "2026",
    image: "./eventsphere.png",
    description: "A comprehensive event management platform to discover, create, and manage events effortlessly.",
    features: ["Event Discovery", "Ticketing System", "User Authentication", "Dashboard Management", "Responsive Design"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    live: "https://event-sphere-gules.vercel.app/",
    github: "https://github.com/Amansharmacs1/EventSphere"
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-3xl overflow-hidden flex flex-col lg:flex-row group"
            >
              <div className="lg:w-2/5 bg-slate-200 dark:bg-slate-800 p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                <div className="w-full aspect-video rounded-xl shadow-2xl bg-white dark:bg-slate-900 overflow-hidden relative z-10 transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top cursor-pointer" 
                      onClick={() => setSelectedImage(project.image)}
                    />
                  ) : (
                    <span className="text-3xl font-heading font-bold text-slate-300 dark:text-slate-700">{project.title}</span>
                  )}
                </div>
              </div>
              <div className="lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white rounded-xl font-medium transition-colors w-fit shadow-md"
                      >
                        <Github size={18} /> View on GitHub
                      </a>
                    )}
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-xl font-medium transition-colors w-fit shadow-md"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
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

export default Projects;
