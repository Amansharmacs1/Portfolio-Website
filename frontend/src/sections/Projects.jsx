import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const projectsData = [
  {
    title: "AuditAI",
    subtitle: "AI-DRIVEN SPEND OPTIMIZATION PLATFORM",
    year: "2026",
    image: "./auditai.png",
    description: "AI-powered spend optimization platform that analyzes subscriptions like ChatGPT, Claude, Gemini, Cursor, and GitHub Copilot to identify unnecessary AI expenses and recommend cost-saving alternatives.",
    features: [
      "Led the development of a full-stack spend optimization platform integrating Gemini AI to identify unnecessary AI subscriptions.",
      "Implemented a secure passwordless authentication system and public shareable audit URLs for easy reporting.",
      "Built a powerful cost optimization engine with real-time PDF exports and audit history tracking."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini AI"],
    live: "https://audit-ai-nu.vercel.app",
    github: "https://github.com/Amansharmacs1/AuditAi"
  },
  {
    title: "DreamNest AI",
    subtitle: "AI-POWERED ARCHITECTURAL DESIGN",
    year: "2026",
    image: "./dreamnest.png",
    description: "An AI-powered design platform that transforms ideas into precise 2D floor plans instantly based on plot dimensions and preferences.",
    features: [
      "Built an AI-powered design platform that instantly generates precise 2D floor plans from user preferences.",
      "Engineered an intelligent layout engine that takes plot dimensions and outputs optimized architectural designs.",
      "Designed a clean, user-friendly interface to make professional floor planning accessible to everyone."
    ],
    tech: ["React.js", "AI/ML", "Node.js", "Tailwind CSS", "Express.js"],
    live: "https://dream-nest-ai-1rdt-xi.vercel.app/",
    github: "https://github.com/Amansharmacs1/DreamNest-AI"
  },
  {
    title: "RentWheels",
    subtitle: "PEER-TO-PEER VEHICLE RENTAL PLATFORM",
    year: "2026",
    image: "./rentwheels.png",
    description: "A premium peer-to-peer vehicle rental platform allowing users to rent vehicles from trusted owners or share their own cars to earn money.",
    features: [
      "Built a comprehensive peer-to-peer vehicle rental platform connecting owners with renters seamlessly.",
      "Implemented a secure user authentication system with dedicated flows for exploring vehicles and managing rentals.",
      "Designed a sleek, responsive user interface emphasizing premium user experience and trust."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://rent-wheels-omega.vercel.app/",
    github: "https://github.com/Amansharmacs1/RentWheels"
  },
  {
    title: "EduLife",
    subtitle: "AI-POWERED VOICE ASSISTANT",
    year: "2025",
    image: "./edulife.png",
    description: "AI-powered voice assistant designed for students to improve productivity and automate academic tasks.",
    features: [
      "Designed and developed a sophisticated AI voice assistant tailored to automate academic tasks for students.",
      "Integrated Natural Language Processing (NLP) and robust speech recognition to process complex voice commands.",
      "Successfully documented and published research findings regarding the implementation and efficiency of the assistant."
    ],
    tech: ["Python", "Speech Recognition", "AI/ML", "NLP"],
    github: "https://github.com/Amansharmacs1/EDULIFE-ai-voice-assistant"
  },
  {
    title: "EventSphere",
    subtitle: "COMPREHENSIVE EVENT MANAGEMENT PLATFORM",
    year: "2026",
    image: "./eventsphere.png",
    description: "A comprehensive event management platform to discover, create, and manage events effortlessly.",
    features: [
      "Built a fully responsive platform for discovering, creating, and managing various large-scale events.",
      "Implemented a complete ticketing system paired with a comprehensive dashboard for event organizers.",
      "Ensured secure user authentication and a highly intuitive user interface leveraging Tailwind CSS."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    live: "https://event-sphere-gules.vercel.app/",
    github: "https://github.com/Amansharmacs1/EventSphere"
  },
  {
    title: "Zerodha Clone",
    subtitle: "FULL-STACK STOCK TRADING PLATFORM",
    year: "2025",
    image: "./zerodha.jpeg",
    description: "Developed a full-stack stock trading platform inspired by Zerodha, providing users with a seamless experience for portfolio management, market tracking, and stock transactions.",
    features: [
      "Developed a full-stack trading simulation platform providing seamless portfolio management and real-time market tracking.",
      "Engineered an interactive dashboard for simulating buy/sell orders and monitoring personal holdings.",
      "Integrated dynamic, interactive charts using Chart.js to visualize historical and live stock movements."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    github: "https://github.com/Amansharmacs1/Zerodha-Clone"
  },
  {
    title: "WanderStay",
    subtitle: "FULL-STACK TRAVEL ACCOMMODATION PLATFORM",
    year: "2025",
    image: "./wanderstay.png",
    description: "Full-stack travel accommodation platform inspired by Airbnb.",
    features: [
      "Built a comprehensive travel accommodation platform inspired by Airbnb with advanced property listing and booking features.",
      "Designed a robust client-server architecture utilizing Docker containerization for reliable deployment.",
      "Implemented JWT authentication, role-based access control, and automated CI/CD pipelines via GitHub Actions."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Docker"],
    live: "https://wanderstay-ot8f.onrender.com/",
    github: "https://github.com/Amansharmacs1/WanderStay"
  },
  {
    title: "TransferHub",
    subtitle: "SECURE PEER-TO-PEER FILE SHARING",
    year: "2026",
    image: "./transferhub.png",
    description: "Fast, secure, browser-based peer-to-peer file sharing powered by WebRTC. No cables, no limits, no hassle.",
    features: [
      "Engineered a high-speed, secure peer-to-peer file transfer platform leveraging modern WebRTC technology.",
      "Designed a sleek, dark-themed user interface to facilitate instant, hassle-free file sharing across devices.",
      "Ensured robust connection handling for secure and reliable direct data transfers without central servers."
    ],
    tech: ["React.js", "WebRTC", "Node.js", "Tailwind CSS", "Socket.io"],
    live: "https://transfer-hub-cyan.vercel.app/",
    github: "https://github.com/Amansharmacs1/TransferHub"
  },
  {
    title: "VisionX-AI",
    subtitle: "AMBIENT WEARABLE AI PLATFORM",
    year: "2026",
    image: "./visionx.png",
    description: "An ambient wearable AI platform that maps the world around you in real-time. Engineered for absolute independence.",
    features: [
      "Built a cutting-edge platform for an ambient wearable device focusing on real-time spatial mapping.",
      "Engineered advanced AI integration to provide seamless environmental awareness and independence.",
      "Designed a sleek, futuristic interface showcasing VisionOS capabilities and live tracking status."
    ],
    tech: ["React.js", "Three.js", "AI/ML", "Node.js", "Tailwind CSS"],
    live: "https://vision-x-ai-pi.vercel.app/",
    github: "https://github.com/Amansharmacs1/VisionX-AI"
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 dark:bg-[#00d8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.1] rounded-[2rem] p-6 sm:p-8 flex flex-col h-full group hover:bg-slate-50 dark:hover:bg-[#0f1115] transition-all duration-300 shadow-xl dark:shadow-2xl relative overflow-hidden"
            >
              {/* Subtle hover glow effect (Dark mode only) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 dark:bg-[#00d8ff] opacity-0 group-hover:opacity-[0.03] blur-[80px] rounded-full transition-opacity duration-500 pointer-events-none"></div>

              {/* Header Row */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] sm:text-xs font-bold text-primary-600 dark:text-[#00d8ff] uppercase tracking-widest w-3/4 leading-relaxed">
                  {project.subtitle}
                </span>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#161616] flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.2] flex-shrink-0 relative z-10"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>

              {/* Title & Image */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {project.title}
                </h3>
                
                {project.image && (
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/[0.05] relative z-10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    />
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <svg className="w-5 h-5 text-primary-500 dark:text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/[0.05] relative z-10">
                <h4 className="text-[10px] font-bold text-slate-500 mb-4 flex items-center gap-2">
                  <span className="font-mono">{'</>'}</span> TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/[0.05] text-[10px] font-semibold tracking-wider text-slate-600 dark:text-slate-400 rounded-lg">
                      {t.toUpperCase()}
                    </span>
                  ))}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 bg-primary-50 dark:bg-[#00d8ff]/10 border border-primary-200 dark:border-[#00d8ff]/20 text-[10px] font-bold tracking-wider text-primary-600 dark:text-[#00d8ff] rounded-lg hover:bg-primary-100 dark:hover:bg-[#00d8ff]/20 transition-colors ml-auto flex items-center gap-1"
                    >
                      LIVE DEMO <ExternalLink size={12} />
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

export default Projects;
