"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Instagram, Linkedin, X as TwitterX, Close } from "@/components/icons";

interface MobileNavbarProps {
  onClose: () => void;
  activeItem: string; // Track active item from parent
  setActiveItem: (path: string) => void; // Function to update active item
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ onClose, activeItem, setActiveItem }) => {
  const socialLinks = [
    { Icon: Github, url: "https://github.com/aetornam" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/francis-awiti-203778213/" },
    { Icon: Instagram, url: "https://instagram.com/your-profile" },
    { Icon: TwitterX, url: "https://twitter.com/your-profile" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
  ];

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.1 } }
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0.5 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.4
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      className="fixed z-50 inset-0 backdrop-blur-sm flex justify-end"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => {
        // Close when clicking outside the menu
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.nav
        className="bg-gradient-to-b from-[#0a101f] to-[#111827] text-white w-full sm:w-4/5 max-w-sm h-full py-8 px-6 shadow-xl flex flex-col"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-rose-500 to-indigo-600 text-white font-bold text-xl rounded-full shadow-lg">
              AF
            </div>
            <span className="text-xl font-bold">Francis Awiti</span>
          </motion.div>
          <motion.button
            onClick={onClose}
            className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Close />
          </motion.button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-5">
          {navItems.map(({ name, path }, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link href={path} passHref>
                <div
                  onClick={() => {
                    setActiveItem(path);
                    onClose(); // Close menu after clicking a link
                  }}
                  className={`relative group py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeItem === path
                      ? "bg-gray-800 text-rose-400"
                      : "text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-lg font-medium">{name}</span>
                  {activeItem === path && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-rose-400 rounded-r-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer - Social Media Icons */}
        <div className="mt-auto pt-10">
          <motion.p
            className="text-gray-400 mb-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Connect with me
          </motion.p>
          <div className="flex justify-start space-x-5">
            {socialLinks.map(({ Icon, url }, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link href={url} target="_blank" rel="noopener noreferrer" passHref>
                  <motion.div
                    className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
};
