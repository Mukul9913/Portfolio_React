import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Me</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.a
                href="mailto:mukuldixit931@gmail.com"
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
              >
                <Mail className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">mukuldixit931@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919131680911"
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
              >
                <Phone className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 9131680911</p>
                </div>
              </motion.a>

              <motion.div
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
              >
                <MapPin className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Indore, M.P</p>
                </div>
              </motion.div>

              <motion.a
                href="http://www.linkedin.com/in/mukul-dixit-in"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
              >
                <Linkedin className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
                </div>
              </motion.a>

              <motion.a
                href="http://github.com/Mukul9913"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
              >
                <Github className="text-blue-600 dark:text-blue-400 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400">Explore my projects</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;