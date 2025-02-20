"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 1500); // Show content AFTER animations
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Dark Blue Slide (Left to Right) */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-[#192F6E] z-50"
      />

      {/* White Slide (Right to Left) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-screen bg-[#F43F5E] z-40"
      />

      {/* Show content ONLY after animations finish */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
