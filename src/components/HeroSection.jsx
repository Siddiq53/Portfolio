import React, { useEffect } from "react";
import { motion, useAnimation, useInView as useFramerInView } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

// Animated text component
const AnimatedText = ({ text, className = "" }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{
            marginRight: letter === " " ? "0.3em" : 0,
            display: "inline-block",
            whiteSpace: "pre"
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Profile photo component
const ProfilePhoto = () => (
  <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto group">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 to-accent-500 p-1 shadow-2xl shadow-primary-100 dark:shadow-primary-900/30 transition-all duration-700 group-hover:shadow-3xl group-hover:shadow-primary-200 dark:group-hover:shadow-primary-800/40">
      <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-800 p-1 overflow-hidden">
        <motion.div 
          className="h-full w-full rounded-full overflow-hidden border-4 border-white/20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative h-full w-full rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/10"></div>
            <img 
              src="/assets/images/profile.jpg"
              alt="Shaik Siddiq Ahamad"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://ui-avatars.com/api/?name=Shaik+Siddiq+Ahamad&background=0ea5e9&color=fff&size=512';
              }}
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-white text-sm font-medium">Full-Stack Developer</span>
        </div>
      </div>
    </div>
    {/* Decorative elements */}
    <div className="absolute -z-10 w-32 h-32 rounded-full bg-primary-100 dark:bg-primary-900/30 -top-8 -right-8 opacity-70 blur-xl"></div>
    <div className="absolute -z-10 w-24 h-24 rounded-full bg-accent-100 dark:bg-accent-900/30 -bottom-6 -left-6 opacity-70 blur-xl"></div>
  </div>
);

// Stats component for the quick stats section
const StatCard = ({ value, label, color = 'primary' }) => {
  // Define gradients for each stat type
  const gradients = {
    primary: 'from-blue-500 to-cyan-400',
    accent: 'from-pink-500 to-rose-400',
    emerald: 'from-emerald-500 to-teal-400',
    purple: 'from-purple-500 to-indigo-400',
  };

  // Get the appropriate gradient based on the color prop
  const gradient = gradients[color] || gradients.primary;

  return (
    <motion.div 
      className={`group relative p-5 rounded-xl bg-white/80 dark:bg-gray-800/90 shadow-sm 
      transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden`}
      whileHover={{ 
        y: -6, 
        scale: 1.03, 
        boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(99, 102, 241, 0.3)'
      }}
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary-50/30 group-hover:to-secondary-50/20 dark:group-hover:from-primary-900/10 dark:group-hover:to-secondary-900/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      <div className="relative z-10">
        <div 
          className={`text-3xl font-extrabold bg-gradient-to-r ${gradient} bg-clip-text text-transparent 
          transition-all duration-700 group-hover:bg-gradient-to-br group-hover:scale-105`}
        >
          {value}
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1.5">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

// Social link component
const SocialLink = ({ href, icon: Icon, label, color = 'primary' }) => {
  // Define color classes explicitly to ensure they're included in the build
  const colorClasses = {
    red: 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    blue: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    gray: 'bg-gray-50 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400',
    primary: 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
    accent: 'bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400',
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`p-1.5 rounded-lg ${colorClasses[color] || colorClasses.primary} transition-colors`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
};

export default function HeroSection() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useFramerInView(ref, {
    amount: 0.2,
    once: true
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden group/hero bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-1000"
      aria-labelledby="hero-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent dark:from-primary-900/10 dark:to-transparent opacity-0 group-hover/hero:opacity-100 transition-opacity duration-1000 -z-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-radial from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent opacity-30 dark:opacity-20 -z-10 group-hover/hero:opacity-40 dark:group-hover/hero:opacity-30 transition-all duration-1000 group-hover/hero:-translate-y-4 group-hover/hero:-translate-x-4"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-radial from-accent-100 to-transparent dark:from-accent-900/20 dark:to-transparent opacity-30 dark:opacity-20 -z-10 group-hover/hero:opacity-40 dark:group-hover/hero:opacity-30 transition-all duration-1000 group-hover/hero:translate-y-4 group-hover/hero:translate-x-4"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-10 dark:opacity-[0.03] group-hover/hero:opacity-20 dark:group-hover/hero:opacity-10 transition-opacity duration-1000 -z-10"></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-0 group-hover/hero:opacity-10 dark:group-hover/hero:opacity-5 transition-opacity duration-1000 -z-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              },
              hidden: { opacity: 0, y: 30 }
            }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              Available for opportunities
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              <motion.div 
                className="inline-block"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <AnimatedText 
                  text="Shaik Siddiq Ahamad" 
                  className="bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent 
                  hover:bg-gradient-to-r hover:from-primary-600 hover:via-accent-600 hover:to-secondary-600
                  transition-all duration-500 bg-size-200 hover:bg-right"
                  style={{
                    backgroundSize: '200% auto',
                  }}
                />
              </motion.div>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              Full-Stack Developer & Problem Solver
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-gray-500 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto lg:mx-0"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              I build exceptional digital experiences with modern web technologies. 
              Passionate about creating efficient, scalable, and user-friendly applications.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-2xl"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.3,
                    staggerChildren: 0.1,
                    when: "beforeChildren"
                  }
                }
              }}
            >
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}>
                <StatCard value="200+" label="DSA Problems" color="primary" />
              </motion.div>
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.1 } }
              }}>
                <StatCard value="1539" label="LeetCode" color="accent" />
              </motion.div>
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
              }}>
                <StatCard value="8.63" label="CGPA" color="emerald" />
              </motion.div>
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.3 } }
              }}>
                <StatCard value="5+" label="Projects" color="purple" />
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.4,
                    staggerChildren: 0.1,
                    when: "beforeChildren"
                  }
                }
              }}
            >
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary-100 dark:shadow-primary-900/30 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </a>
              </motion.div>
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.1 } }
              }}>
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center px-6 py-3.5 font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <span>View My Work</span>
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.5,
                    staggerChildren: 0.1,
                    when: "beforeChildren"
                  }
                }
              }}
            >
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}>
                <SocialLink 
                  href="mailto:siddiqshaik053@gmail.com" 
                  icon={Mail} 
                  label="Email"
                  color="red"
                />
              </motion.div>
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.1 } }
              }}>
                <SocialLink 
                  href="https://www.linkedin.com/in/siddiq05/" 
                  icon={Linkedin} 
                  label="LinkedIn"
                  color="blue"
                />
              </motion.div>
              <motion.div variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
              }}>
                <SocialLink 
                  href="https://github.com/siddiq53" 
                  icon={Github} 
                  label="GitHub"
                  color="gray"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Profile Photo */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [10, 0, -10, -20],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll down</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary-500 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
}
