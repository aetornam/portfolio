import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company?: string;
  period: string;
  description: string;
  skills: string[];
  side: "left" | "right";
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "IT Consultant",
      company: "Freelance",
      period: "March 2024 - Present",
      description: "Specializing in full-stack development with TypeScript, React, and Node.js. Building custom software solutions and providing IT consulting services for clients.",
      skills: ["TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL"],
      side: "right"
    },
    {
      title: "IT Technician & ICT Teacher",
      company: "Educational Institution",
      period: "Jan 2021 - 2025",
      description: "Provided technical support and taught programming fundamentals including JavaScript and TypeScript. Maintained network infrastructure and implemented educational software solutions.",
      skills: ["JavaScript", "TypeScript", "Web Development", "Network Management", "Education"],
      side: "left"
    },
    {
      title: "Software Developer & IT Technician",
      company: "Tech Solutions",
      period: "Oct 2019 - Feb 2020",
      description: "Developed and maintained web applications using JavaScript and Node.js. Implemented Express.js backends and optimized database performance.",
      skills: ["JavaScript", "Node.js", "Express.js", "MongoDB", "System Administration"],
      side: "right"
    },
    {
      title: "IT Technician",
      company: "Client Services",
      period: "2020",
      description: "Provided software development with JavaScript and TypeScript, system installations, hardware repairs, and custom IT solutions for clients.",
      skills: ["JavaScript", "TypeScript", "Hardware Repair", "Network Setup", "Customer Support"],
      side: "left"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-[#111827] to-[#0a101f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-500 mb-4">
            Professional Experience
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="w-16 h-1 bg-rose-500 rounded"></span>
            <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
            <span className="w-8 h-1 bg-indigo-500 rounded"></span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey as a developer and IT specialist
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-500 rounded"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-rose-500 to-indigo-600 shadow-lg z-10 mt-${8 + index * 48}`}></div>
                </div>

                {/* Content */}
                <div className={`md:w-5/12 ${exp.side === 'right' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 relative">
                    {/* Period tag */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-rose-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-white mt-3 mb-1 flex items-center gap-2">
                      {exp.title}
                      {exp.company && (
                        <>
                          <span className="text-gray-400 text-sm">|</span>
                          <span className="text-indigo-400 text-lg font-medium">{exp.company}</span>
                        </>
                      )}
                    </h3>

                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-gray-900/70 text-gray-300 px-2.5 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
