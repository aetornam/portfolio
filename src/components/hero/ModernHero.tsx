"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";
import { motion } from "framer-motion";

export const ModernHero = () => {
  const [loading, setLoading] = useState(false);
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  const techStack = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Express.js", color: "bg-gray-600" },
    { name: "Next.js", color: "bg-gray-800" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0a101f] to-[#111827] overflow-hidden pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.02]"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
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

              {/* Tech stack */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                variants={itemVariants}
              >
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className={`px-3 py-1 rounded-full ${tech.color}/20 text-gray-300 text-sm border border-gray-700/50 backdrop-blur-sm`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>

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
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 shadow-lg flex items-center justify-center gap-2 min-w-[160px] disabled:bg-gray-700 disabled:cursor-not-allowed"
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
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/20 to-indigo-600/20 blur-2xl"></div>

              {/* Rotating circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-gray-600/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                TypeScript
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Node.js
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                React
              </motion.div>

              {/* Main image with glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-rose-500/30 to-indigo-600/30 blur-xl"></div>

              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-gray-800/80 shadow-2xl">
                <Image
                  src="/images/heroimages.png"
                  alt="Francis Awiti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Orbit elements */}
              <motion.div
                className="absolute inset-0 rounded-full border border-gray-600/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"
                ></motion.div>
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full border border-gray-600/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50"
                ></motion.div>
              </motion.div>
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
      </div>
    </div>
  );
};
