import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:amansharmacs11@gmail.com?subject=${subject}&body=${body}`;
    
    setStatus({ type: 'success', msg: 'Opening your email client...' });
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus({ type: '', msg: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:amansharmacs11@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                  <div className="text-sm">amansharmacs11@gmail.com</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/amansharmacs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">LinkedIn</div>
                  <div className="text-sm">linkedin.com/in/amansharmacs</div>
                </div>
              </a>
              <a href="https://github.com/amansharmacs1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">GitHub</div>
                  <div className="text-sm">github.com/amansharmacs1</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-900 dark:text-white resize-none"
                  placeholder="Hello Aman, I'd like to discuss..."
                ></textarea>
              </div>
              
              {status.msg && (
                <div className={`p-3 rounded-xl text-sm font-medium ${status.type === 'error' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'}`}>
                  {status.msg}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status.type === 'loading'}
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
