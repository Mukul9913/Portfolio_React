import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ABDM Healthcare Integration",
      description: "Developed secure APIs in Node.js for ABDM Milestones 2 & 3, handling encrypted health record linking and patient consent flow. Integrated Fedilus CLI for data encryption and Swagger for documentation, reducing data breaches by 30%.",
      skills: ["Node.js", "Express.js", "Swagger", "Fedilus CLI"],
      year: "2023-2024",
      role: "Backend Developer",
      image: "https://www.india.gov.in/sites/upload_files/npi/files/spotlights/abdm.jpg",
      links: {
        demo: "https://abdm-demo.example.com",
        github: "https://github.com/Mukul9913"
      }
    },
    {
      title: "Hair Treatment & Transplant CMS",
      description: "Created a MERN-based CMS managing blogs, banners, feedback, and support tickets with PostgreSQL and AWS S3 integration. Built role-based dashboards for Admin, Doctor, and Patient using React and Node.js.",
      skills: ["MERN Stack", "PostgreSQL", "AWS S3", "React.js", "Node.js"],
      year: "2023-2024",
      role: "Full Stack Developer",
      image: "https://media.istockphoto.com/id/1297765386/photo/middle-aged-man-having-hair-treatment-at-beauty-salon.jpg?s=2048x2048&w=is&k=20&c=nSdNHO2fcgH0nJ5ayD-Rjv_Ohqr50b2xEDZ4K0jo_XY=",
      links: {
        demo: "https://hair-cms.example.com",
        github: "https://github.com/Mukul9913"
      }
    },
    {
      title: "Import-Export Analytics Platform",
      description: "Developed admin and user modules for global trade insights and real-time collaboration. Integrated Stripe for subscriptions, handling frontend, backend APIs, and secure payment gateway setup.",
      skills: ["MERN Stack", "Stripe", "React.js", "Node.js"],
      year: "2023-2024",
      role: "Full Stack Developer",
      image: "https://img.freepik.com/premium-photo/container-cargo-import-export-business-logistic-3d-rendering_35761-570.jpg",
      links: {
        demo: "https://trade-analytics.example.com",
        github: "https://github.com/Mukul9913"
      }
    },
    {
      title: "Salon Management System",
      description: "Built modular UIs for customer, salon owner, and super admin roles using Vue.js. Integrated QR code scanning for appointment and gift card functionality.",
      skills: ["Vue.js", "Node.js"],
      year: "2023-2024",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      links: {
        demo: "https://salon-demo.example.com",
        github: "https://github.com/Mukul9913"
      }
    },
    {
      title: "Marketing Application",
      description: "Developed a business management system supporting Admin, Distributor, Customer, and Marketing Executive roles. Handled frontend UI, API integrations, and invoice/payment tracking using Vue.js.",
      skills: ["Vue.js", "Node.js"],
      year: "2023-2024",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      links: {
        demo: "https://marketing-app.example.com",
        github: "https://github.com/Mukul9913"
      }
    },
    {
      title: "Multi-Vendor E-Commerce Platform",
      description: "Created a Handicraft Marketplace with role-based functionality, Redux for state management, and Formik for validation. Improved load time by 30% via infinite scroll optimization.",
      skills: ["MERN Stack", "Redux", "Formik"],
      year: "2021-2022",
      role: "Full Stack Developer Intern",
      image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=800&q=80",
      links: {
        demo: "https://handicraft.example.com",
        github: "https://github.com/Mukul9913/Handicraft"
      }
    },
    {
      title: "Single-Vendor E-Commerce",
      description: "Built a responsive platform with EJS-rendered pages, implementing efficient order and inventory management using Express and MySQL.",
      skills: ["Express.js", "MySQL", "EJS"],
      year: "2021-2022",
      role: "Full Stack Developer Intern",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      links: {
        demo: "https://single-vendor.example.com",
        github: "https://github.com/Mukul9913"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (<motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      {/* <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-800" />
                      </a> */}
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{project.role}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Projects;