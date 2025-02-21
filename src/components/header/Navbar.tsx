"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Menu, X } from "@/components/icons";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/"); // Track active menu item

  const socialLinks = [
    { Icon: Facebook, url: "https://facebook.com/your-profile" },
    { Icon: Instagram, url: "https://instagram.com/your-profile" },
    { Icon: Github, url: "https://github.com/aetornam" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/francis-awiti-203778213/" },
    { Icon: X, url: "https://twitter.com/your-profile" }, // X (Twitter)
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-2 flex justify-between items-center bg-[#111827]">
        
        {/* Left Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/project" },
          ].map(({ name, path }, index) => (
            <Link key={index} href={path} onClick={() => setActiveItem(path)} passHref>
              <motion.span
                className="relative text-lg font-semibold text-white transition-all duration-300 cursor-pointer group"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {name}
                <motion.div
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left transition-transform duration-300 ${
                    activeItem === path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center">
          <motion.div
            className="w-12 h-12 flex items-center justify-center bg-white text-[#192F6E] font-bold text-xl rounded-full shadow-lg 
            border-4 border-[#0F1B4C]"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            AF
          </motion.div>
        </div>

        {/* Right Social Media Icons */}
        <div className="hidden lg:flex items-center space-x-4">
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="flex items-center text-white p-1"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <MobileNavbar
          onClose={() => setMobileMenuOpen(false)}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
    </>
  );
};
