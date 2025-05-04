import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = {
    "Frontend": ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "React.js", "Vue.js"],
    "Backend": ["Node.js", "Express.js", "EJS"],
    "Database": ["MongoDB", "MySQL", "PostgreSQL"],
    "Tools": ["GitHub", "Postman", "Swagger"],
    "Cloud": ["AWS (EC2, S3)"],
    "Languages": ["English", "Hindi"]
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <SkillCard
                key={category}
                category={category}
                skills={skillList}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;