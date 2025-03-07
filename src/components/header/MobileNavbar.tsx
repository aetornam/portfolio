"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, X as TwitterX, Close } from "@/components/icons";

interface MobileNavbarProps {
  onClose: () => void;
  activeItem: string; // Track active item from parent
  setActiveItem: (path: string) => void; // Function to update active item
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ onClose, activeItem, setActiveItem }) => {
    const socialLinks = [
        { Icon: Facebook, url: "https://facebook.com/your-profile" },
        { Icon: Instagram, url: "https://instagram.com/your-profile" },
        { Icon: Github, url: "https://github.com/aetornam" },
        { Icon: Linkedin, url: "https://www.linkedin.com/in/francis-awiti-203778213/" },
        { Icon: TwitterX, url: "https://twitter.com/your-profile" }, // X (Twitter)
      ];
  return (
    <motion.div
      className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex justify-end"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.nav
        className="bg-[#111827] text-white w-4/5 max-w-sm h-full py-6 px-6 shadow-lg flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-2xl font-bold">AF</span>
          <button onClick={onClose} className="text-white text-2xl">
            <Close />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/project" },
          ].map(({ name, path }, index) => (
            <Link key={index} href={path} passHref>
              <span
                onClick={() => {
                  setActiveItem(path);
                  onClose(); // Close menu after clicking a link
                }}
                className={`text-lg font-semibold transition-all duration-300 cursor-pointer ${
                  activeItem === path ? "text-gray-300" : "text-white"
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer - Social Media Icons */}
        <div className="mt-auto">
          <div className="flex justify-between mt-6">
          {socialLinks.map(({ Icon, url }, index) => (
            <Link key={index} href={url} target="_blank" rel="noopener noreferrer" passHref>
              <motion.span
                className="text-white text-2xl hover:text-gray-300 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Icon />
              </motion.span>
            </Link>
          ))}
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
};
