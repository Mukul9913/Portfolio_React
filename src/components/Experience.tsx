import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Web N Soft Solution",
      position: "Full Stack Developer",
      duration: "JAN 2023 - PRESENT",
      description: [
        "Built secure APIs in Node.js for ABDM Healthcare Integration, handling encrypted health record linking and patient consent flow, reducing data breaches by 30%.",
        "Developed a MERN-based CMS for Hair Treatment & Transplant, managing blogs, banners, feedback, and support tickets with PostgreSQL and AWS S3 integration.",
        "Created an Import-Export Analytics Platform with admin/user modules, real-time collaboration, and Stripe integration for subscriptions.",
        "Built modular UIs for a Salon Management System using Vue.js, integrating QR code scanning for appointments and gift cards.",
        "Developed a Marketing Application supporting multiple roles, handling frontend UI, API integrations, and invoice/payment tracking."
      ]
    },
    {
      company: "InfoBean Foundation",
      position: "Full Stack Developer Intern",
      duration: "OCT 2021 - SEPT 2022",
      description: [
        "Developed a Multi-Vendor E-Commerce Platform for handicrafts with role-based functionality, Redux for state management, and Formik for validation, improving load time by 30% via infinite scroll optimization.",
        "Built a Single-Vendor E-Commerce platform with EJS-rendered pages, implementing efficient order and inventory management using Express and MySQL."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <Briefcase className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                    <p className="text-blue-600 font-medium dark:text-blue-300">{exp.position}</p>
                    <p className="text-gray-500 dark:text-gray-200 text-sm mb-4">{exp.duration}</p>
                    <ul className="list-disc list-inside dark:text-gray-300 text-gray-600 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;