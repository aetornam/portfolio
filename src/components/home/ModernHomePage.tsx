"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Service type definition
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const ModernHomePage = () => {
  const [loading, setLoading] = useState(false);
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [
          "TypeScript Developer",
          "React.js Expert",
          "Node.js Engineer",
          "Full Stack Developer",
          "Express.js Specialist"
        ],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        smartBackspace: true,
      });
    }

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // Featured projects data
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Getwellshop – Inventory Management",
      description: "A robust inventory management system for tracking products and sales.",
      image: "/images/getwellshop.png",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      link: "https://getwellshop.vercel.app/"
    },
    {
      id: 2,
      title: "Nyansapo – Course Management",
      description: "A comprehensive course management system for online learning.",
      image: "/images/nyansapo.png",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      link: "https://nyansa-po.com/"
    },
    {
      id: 3,
      title: "Aetortech – Landing Page",
      description: "A professional landing page for Aetortech showcasing services and portfolio.",
      image: "/images/aetortech.png",
      tags: ["React.js", "PHP", "Bootstrap", "CSS", "HTML"],
      link: "https://aetortech.netlify.app/"
    }
  ];

  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Building modern, responsive web applications with React, Next.js, and TypeScript.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express.js, and databases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 3,
      title: "IT Consulting",
      description: "Providing expert advice on technology solutions, system architecture, and best practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-purple-500 to-indigo-400"
    },
    {
      id: 4,
      title: "Hardware & Network",
      description: "Setting up and maintaining hardware systems and network infrastructure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-rose-500 to-pink-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-b from-[#0a101f] to-[#111827] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-16">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.02]"></div>
        </div>

        {/* Main hero content */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"
          style={{ opacity, scale }}
        >
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left content - Text */}
            <motion.div
              className="w-full lg:w-1/2 pt-8 lg:pt-16"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-rose-500/20 to-indigo-600/20 backdrop-blur-sm text-gray-200 text-sm mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500 mr-2"></span>
                  Available for new projects
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
                  variants={itemVariants}
                >
                  <span className="text-white">Hello, I&apos;m </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-500">
                    Francis Awiti
                  </span>
                </motion.h1>

                <motion.div
                  className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-6"
                  variants={itemVariants}
                >
                  <span>I&apos;m a </span>
                  <span
                    ref={typedElementRef}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500 font-semibold"
                  ></span>
                </motion.div>

                <motion.p
                  className="text-gray-400 text-base sm:text-lg max-w-xl mb-8"
                  variants={itemVariants}
                >
                  With over 5 years of experience, I specialize in building modern, responsive, and
                  high-performance web applications using TypeScript, React.js, Node.js, and Express.js.
                  My expertise extends to database management and system optimization.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={itemVariants}
                >
                  <Link href="mailto:aetortech@gmail.com" target="_blank">
                    <motion.button
                      className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium rounded-lg shadow-lg hover:shadow-rose-500/25 flex items-center justify-center gap-2 min-w-[160px]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Contact Me
                    </motion.button>
                  </Link>

                  <Link href="/images/cv.pdf" download="Francis_Awiti_CV.pdf" target="_blank">
                    <motion.button
                      onClick={handleDownload}
                      disabled={loading}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 min-w-[160px] disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          <span>Download CV</span>
                        </>
                      )}
                    </motion.button>
                  </Link>

                  <Link href="/project" passHref>
                    <motion.button
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 shadow-lg flex items-center justify-center gap-2 min-w-[160px]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                      </svg>
                      View Projects
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right content - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-indigo-600/20 blur-3xl rounded-full"></div>

                {/* Tech stack orbit */}
                <div className="absolute inset-0">
                  {/* Orbit rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-gray-600/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                    ></motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-4 rounded-full border border-gray-600/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                    ></motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-8 rounded-full border border-gray-600/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50"
                    ></motion.div>
                  </motion.div>
                </div>

                {/* Floating tech badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  TypeScript
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg z-10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  Node.js
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg z-10"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  React
                </motion.div>

                <motion.div
                  className="absolute top-1/3 -left-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg z-10"
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  Express.js
                </motion.div>

                {/* Main image container */}
                <div className="absolute inset-[15%] rounded-full bg-gradient-to-r from-rose-500/30 to-indigo-600/30 blur-xl"></div>

                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="w-[70%] h-[70%] rounded-full overflow-hidden border-4 border-gray-800/80 shadow-2xl relative">
                    <Image
                      src="/images/heroimages.png"
                      alt="Francis Awiti"
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-gray-400 text-sm mb-2">Scroll down</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-rose-500 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-500 mb-4">
              My Services
            </h2>
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className="w-16 h-1 bg-rose-500 rounded"></span>
              <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
              <span className="w-8 h-1 bg-indigo-500 rounded"></span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized services tailored to meet your technology needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${service.color} p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a101f]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-500 mb-4">
              Featured Projects
            </h2>
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-indigo-500 rounded"></span>
              <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
              <span className="w-16 h-1 bg-rose-500 rounded"></span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore some of my recent work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-700/70 text-gray-300 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} passHref>
                    <motion.button
                      className="w-full px-4 py-2 bg-gradient-to-r from-indigo-500/80 to-indigo-600/80 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-lg shadow-lg flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/project" passHref>
              <motion.button
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 shadow-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
