"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);
  const [showOverlays, setShowOverlays] = useState(true);

  useEffect(() => {
    // Show content after a short delay
    const contentTimeout = setTimeout(() => setShowContent(true), 800);

    // Remove overlays completely after animations finish
    const overlayTimeout = setTimeout(() => setShowOverlays(false), 1500);

    return () => {
      clearTimeout(contentTimeout);
      clearTimeout(overlayTimeout);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated overlays - only present during initial load */}
      <AnimatePresence>
        {showOverlays && (
          <>
            {/* First overlay - fade and scale */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-[#192F6E] z-50 pointer-events-none"
            />

            {/* Second overlay - fade with blur */}
            <motion.div
              initial={{ opacity: 1, filter: "blur(0px)" }}
              animate={{ opacity: 0, filter: "blur(8px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-[#F43F5E] z-40 pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>

      {/* Show content with a nice fade in */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
