"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Education } from "./Education";
import { Experience } from "./Expirence";

// Define tech stack with proper organization
interface TechItem {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
  color: string;
}

export const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  // Organized tech stack by category
  const techStack: TechItem[] = [
    // Frontend
    { name: "TypeScript", icon: "/images/tech/typescript.svg", category: "frontend", proficiency: 95, color: "bg-blue-500" },
    { name: "JavaScript", icon: "/images/tech/javascript.svg", category: "frontend", proficiency: 95, color: "bg-yellow-500" },
    { name: "React.js", icon: "/images/tech/react.svg", category: "frontend", proficiency: 95, color: "bg-cyan-500" },
    { name: "Next.js", icon: "/images/tech/nextjs.svg", category: "frontend", proficiency: 90, color: "bg-gray-500" },

    // Backend
    { name: "Node.js", icon: "/images/tech/nodejs.svg", category: "backend", proficiency: 90, color: "bg-green-600" },
    { name: "Express.js", icon: "/images/tech/express.svg", category: "backend", proficiency: 90, color: "bg-gray-600" },
    { name: "NestJS", icon: "/images/tech/nestjs.svg", category: "backend", proficiency: 85, color: "bg-red-500" },

    // Database
    { name: "PostgreSQL", icon: "/images/tech/postgresql.svg", category: "database", proficiency: 85, color: "bg-blue-600" },
    { name: "MongoDB", icon: "/images/tech/mongodb.svg", category: "database", proficiency: 80, color: "bg-green-500" },
    { name: "MySQL", icon: "/images/tech/mysql.svg", category: "database", proficiency: 80, color: "bg-blue-400" },
    { name: "MSSQL Server", icon: "/images/tech/mssql.svg", category: "database", proficiency: 75, color: "bg-red-600" },

    // Other
    { name: "Hardware & Network", icon: "/images/tech/hardware.svg", category: "other", proficiency: 90, color: "bg-purple-500" },
  ];

  // Filter tech stack by category
  const getFrontendTech = () => techStack.filter(tech => tech.category === "frontend");
  const getBackendTech = () => techStack.filter(tech => tech.category === "backend");
  const getDatabaseTech = () => techStack.filter(tech => tech.category === "database");
  const getOtherTech = () => techStack.filter(tech => tech.category === "other");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-[#0a101f] to-[#111827] text-white pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-500 mb-4">
              About Me
            </h1>
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className="w-16 h-1 bg-rose-500 rounded"></span>
              <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
              <span className="w-8 h-1 bg-indigo-500 rounded"></span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Software Developer & IT Specialist with expertise in modern web technologies
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Column - Profile */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
                <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-indigo-600 blur-lg opacity-70"></div>
                    <Image
                      src="/images/heroimages.png"
                      alt="Francis Awiti"
                      width={128}
                      height={128}
                      className="rounded-full object-cover border-4 border-gray-800 relative z-10"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Francis Awiti</h2>
                    <p className="text-gray-300 mb-3">Full Stack Developer & IT Specialist</p>
                    <div className="flex gap-3">
                      <Link href="mailto:aetortech@gmail.com" target="_blank">
                        <button className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:from-rose-600 hover:to-rose-700 transition shadow-lg">
                          Hire Me
                        </button>
                      </Link>
                      <Link href="/images/cv.pdf" download="Francis_Awiti_CV.pdf" target="_blank">
                        <button
                          onClick={handleDownload}
                          disabled={loading}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition shadow-lg flex items-center gap-2"
                        >
                          {loading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white"></div>
                              <span>Downloading...</span>
                            </>
                          ) : (
                            <span>Download CV</span>
                          )}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="font-medium">Ho, Volta, Ghana</p>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <p className="text-gray-400 mb-1">Email</p>
                    <p className="font-medium">aetortech@gmail.com</p>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <p className="text-gray-400 mb-1">Phone</p>
                    <p className="font-medium">+233 238141505</p>
                  </div>
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <p className="text-gray-400 mb-1">Availability</p>
                    <p className="font-medium text-green-400">Available for work</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - About & Skills */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Tabs */}
              <div className="flex mb-6 bg-gray-800/30 rounded-lg p-1 backdrop-blur-sm">
                {["overview", "skills", "technologies"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-rose-500/80 to-indigo-600/80 text-white shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-rose-400">Professional Profile</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      I am a results-driven Software Developer and IT Specialist with over 5 years of experience in software development,
                      hardware troubleshooting, and network management. I specialize in building scalable and efficient applications using
                      modern web technologies.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      My core expertise includes TypeScript, JavaScript, React.js, Next.js, Node.js, and Express.js for building
                      full-stack applications. I'm also proficient with database technologies including PostgreSQL, MongoDB, and
                      MSSQL Server.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Beyond software development, my expertise extends to hardware repair, network setup, and cross-platform system
                      optimization across Windows, macOS, and Linux environments.
                    </p>
                  </motion.div>
                )}

                {/* Skills Tab */}
                {activeTab === "skills" && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3 className="text-xl font-bold mb-4 text-rose-400">Technical Skills</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {/* TypeScript */}
                      <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <div className="w-full flex justify-between font-medium">
                          <span className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
                            TypeScript
                          </span>
                          <span>95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 1, delay: 0.1 }}
                          ></motion.div>
                        </div>
                      </motion.div>

                      {/* JavaScript/React.js */}
                      <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <div className="w-full flex justify-between font-medium">
                          <span className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full"></span>
                            JavaScript/React.js
                          </span>
                          <span>95%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                          ></motion.div>
                        </div>
                      </motion.div>

                      {/* Node.js/Express.js */}
                      <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <div className="w-full flex justify-between font-medium">
                          <span className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                            Node.js/Express.js
                          </span>
                          <span>90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            transition={{ duration: 1, delay: 0.3 }}
                          ></motion.div>
                        </div>
                      </motion.div>

                      {/* Next.js */}
                      <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <div className="w-full flex justify-between font-medium">
                          <span className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-gray-500 rounded-full"></span>
                            Next.js
                          </span>
                          <span>90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                          ></motion.div>
                        </div>
                      </motion.div>

                      {/* Database Management */}
                      <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <div className="w-full flex justify-between font-medium">
                          <span className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full"></span>
                            Database Management
                          </span>
                          <span>85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.div>
                        </div>
                      </motion.div>

                      {/* Hardware & Network */}
                      <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <div className="w-full flex justify-between font-medium">
                          <span className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-purple-500 rounded-full"></span>
                            Hardware & Network
                          </span>
                          <span>90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "90%" }}
                            transition={{ duration: 1, delay: 0.6 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Technologies Tab */}
                {activeTab === "technologies" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-rose-400">Technology Stack</h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 text-indigo-400">Frontend</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {getFrontendTech().map((tech, index) => (
                          <div key={index} className="bg-gray-900/70 p-3 rounded-lg text-center">
                            <div className="text-lg font-medium mb-1">{tech.name}</div>
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full ${tech.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.proficiency}%` }}
                                transition={{ duration: 1 }}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3 text-indigo-400">Backend</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {getBackendTech().map((tech, index) => (
                          <div key={index} className="bg-gray-900/70 p-3 rounded-lg text-center">
                            <div className="text-lg font-medium mb-1">{tech.name}</div>
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full ${tech.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.proficiency}%` }}
                                transition={{ duration: 1 }}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-3 text-indigo-400">Database</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {getDatabaseTech().map((tech, index) => (
                          <div key={index} className="bg-gray-900/70 p-3 rounded-lg text-center">
                            <div className="text-lg font-medium mb-1">{tech.name}</div>
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full ${tech.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.proficiency}%` }}
                                transition={{ duration: 1 }}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience and Education Sections */}
      <Experience />
      <Education />
    </>
  );
};
