import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Server,
  GitBranch,
  Languages,
  Boxes
} from 'lucide-react';

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

const getIconForCategory = (category: string) => {
  switch (category) {
    case 'Frontend':
      return <Globe className="w-6 h-6 text-blue-600" />;
    case 'Backend':
      return <Server className="w-6 h-6 text-green-600" />;
    case 'Database':
      return <Database className="w-6 h-6 text-purple-600" />;
    case 'Tools':
      return <GitBranch className="w-6 h-6 text-orange-600" />;
    case 'Languages':
      return <Languages className="w-6 h-6 text-red-600" />;
    default:
      return <Boxes className="w-6 h-6 text-gray-600" />;
  }
};

const getLogoForSkill = (skill: string) => {
  const logos: { [key: string]: string } = {
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  };
  
  return logos[skill] || null;
};

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
    >
      <div className="flex items-center mb-4">
        {getIconForCategory(category)}
        <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-white">{category}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            {getLogoForSkill(skill) ? (
              <img
                src={getLogoForSkill(skill)}
                alt={skill}
                className="w-6 h-6 mr-2"
              />
            ) : (
              <Code2 className="w-6 h-6 mr-2 text-gray-500" />
            )}
            <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;