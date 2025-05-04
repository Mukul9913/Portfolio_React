import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight"
              variants={itemVariants}
            >
              MUKUL DIXIT
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mb-6"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              A solution-oriented Full Stack Developer with 2+ years of experience building scalable web applications. Passionate about crafting responsive UIs, secure backends, and seamless user experiences.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              variants={itemVariants}
            >
              <a
                href="http://github.com/Mukul9913"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="http://www.linkedin.com/in/mukul-dixit-in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mukuldixit931@gmail.com"
                className="p-3 bg-red-500 dark:bg-red-400 text-white rounded-full hover:bg-red-600 dark:hover:bg-red-500 transition-all transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+919131680911"
                className="p-3 bg-green-500 dark:bg-green-400 text-white rounded-full hover:bg-green-600 dark:hover:bg-green-500 transition-all transform hover:scale-110"
              >
                <Phone size={24} />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 relative"
            variants={imageVariants}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 opacity-50 blur-2xl"
              variants={glowVariants}
            />
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQF4bceXA2gekg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709313561837?e=1752105600&v=beta&t=xRO2pD7r0kgTNcpFgRZ4mLZKSr21j0F4G9MXhMfMzm4"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500 dark:border-blue-400 opacity-50"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;