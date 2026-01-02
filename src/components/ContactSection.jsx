import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageCircle, X } from "lucide-react";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFabVisible, setIsFabVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Track scroll position to show/hide FAB
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 300);
      
      // Hide FAB when user is at the contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactTop = contactSection.offsetTop;
        const contactBottom = contactTop + contactSection.offsetHeight;
        const isAtContactSection = 
          scrollPosition + window.innerHeight > contactTop && 
          scrollPosition < contactBottom;
        
        setIsFabVisible(!isAtContactSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first input field after scrolling
      setTimeout(() => {
        const firstInput = formRef.current?.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 800);
    }
  };
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '27bab8cc-845b-4ebb-81ba-69db08370fd8');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', 'New Contact From Portfolio');
    formDataToSend.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        // Reset form
        setFormData({ name: "", email: "", message: "" });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("error");
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {isFabVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: isScrolled ? 1 : 0.8, 
              y: 0,
              scale: isScrolled ? 1 : 0.9
            }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className={`fixed bottom-8 right-8 z-50 ${isScrolled ? 'block' : 'hidden md:block'}`}
          >
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              aria-label="Contact me"
            >
              <motion.div
                animate={{ rotate: isFormVisible ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isFormVisible ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <MessageCircle className="h-6 w-6 text-white" />
                )}
              </motion.div>
              <span className="absolute -left-2 -top-2 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-accent"></span>
              </span>
              <motion.span 
                className="absolute right-full mr-3 px-3 py-1.5 bg-white dark:bg-gray-800 text-sm font-medium rounded-full whitespace-nowrap shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : 20 }}
                transition={{ delay: 0.2 }}
              >
                Let's talk! 👋
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <section 
        id="contact" 
        className="relative py-16 md:py-24 overflow-hidden section-3"
        aria-labelledby="contact-heading"
        ref={formRef}
      >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary">Get In Touch</span>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Let's Work <span className="text-gradient gradient-primary">Together</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={item} className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Me</h3>
                <a 
                  href="mailto:siddiqshaik053@gmail.com" 
                  className="mt-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  siddiqshaik053@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 text-secondary">
                <Github className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
                <a 
                  href="https://github.com/siddiq53" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-1 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors"
                >
                  github.com/siddiq53
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 text-accent">
                <Linkedin className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/siddiq05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-1 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                >
                  linkedin.com/in/siddiq05
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden group relative"
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                >
                  {/* Animated background shine effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    animate={status === 'idle' ? { x: '100%' } : { x: '100%' }}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  
                  {/* Button content */}
                  <motion.span className="relative z-10 flex items-center">
                    {status === "loading" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block mr-3"
                        >
                          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.92993 4.93005L7.75993 7.76005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.92993 19.07L7.75993 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.24 7.76001L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.span>
                        <span>Sending your message...</span>
                      </>
                    ) : status === "success" ? (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center"
                      >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <motion.path 
                            d="M20 6L9 17L4 12" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </svg>
                        Message Sent!
                      </motion.span>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        <span>Send Message</span>
                        <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                      </>
                    )}
                  </motion.span>
                </motion.button>
              </form>

              {/* Status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800/50"
                  >
                    <p className="text-sm text-center text-green-700 dark:text-green-300">
                      🎉 Thank you! Your message has been sent successfully. I'll get back to you soon!
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800/50"
                  >
                    <p className="text-sm text-center text-red-700 dark:text-red-300">
                      ❌ Oops! Something went wrong. Please try again later or email me directly at siddiqshaik053@gmail.com
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};
