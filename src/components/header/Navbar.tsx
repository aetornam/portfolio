"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Menu, X } from "@/components/icons";
import { MobileNavbar } from "./MobileNavbar";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname); // Track active menu item

  // Update active item when pathname changes
  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { Icon: Github, url: "https://github.com/aetornam" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/francis-awiti-203778213/" },
    { Icon: Instagram, url: "https://instagram.com/your-profile" },
    { Icon: X, url: "https://twitter.com/your-profile" },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#0a101f] shadow-lg backdrop-blur-sm bg-opacity-90"
            : "bg-[#111827]"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo (Left on mobile, center on desktop) */}
        <Link href="/" className="flex items-center">
          <div className="relative">
            {/* Glow effect */}
            <div className={`absolute inset-0 ${
              scrolled ? "w-10 h-10" : "w-12 h-12"
            } bg-gradient-to-br from-rose-500 to-indigo-600 rounded-full blur-md opacity-70`}></div>

            <motion.div
              className={`relative flex items-center justify-center ${
                scrolled ? "w-10 h-10" : "w-12 h-12"
              } transition-all duration-300 bg-gradient-to-br from-rose-500 to-indigo-600 text-white font-bold text-xl rounded-full shadow-lg border border-white/10`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(244, 63, 94, 0.5)",
                rotate: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-200">AF</span>
            </motion.div>
          </div>
        </Link>

        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex items-center justify-center space-x-2">
          {navItems.map(({ name, path }, index) => (
            <Link key={index} href={path} passHref>
              <motion.div
                className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeItem === path
                    ? "bg-gradient-to-r from-rose-500/20 to-indigo-600/20 backdrop-blur-sm"
                    : "hover:bg-gray-800/30"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {/* Glow effect for active item */}
                {activeItem === path && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-500/20 to-indigo-600/20 blur-md -z-10"
                    layoutId="navGlow"
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  />
                )}

                <span
                  className={`text-base font-medium transition-all duration-300 cursor-pointer ${
                    activeItem === path
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {name}
                </span>

                {/* Animated underline */}
                <div className="relative h-0.5 w-full mt-1 overflow-hidden">
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 to-indigo-400 rounded-full`}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{
                      scaleX: activeItem === path ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 to-indigo-400 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: activeItem === path ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Right Social Media Icons */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-full p-1 flex items-center">
            {socialLinks.map(({ Icon, url }, index) => (
              <Link key={index} href={url} target="_blank" rel="noopener noreferrer" passHref>
                <motion.div
                  className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300 relative group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/0 to-indigo-600/0 opacity-0 blur-md -z-10 group-hover:from-rose-500/20 group-hover:to-indigo-600/20 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                  <Icon />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Contact button */}
          <Link href="mailto:aetortech@gmail.com" passHref>
            <motion.button
              className="ml-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(244, 63, 94, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="flex items-center justify-center text-white p-2 rounded-full bg-gray-800/40 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 relative group"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/0 to-indigo-600/0 opacity-0 blur-md -z-10 group-hover:from-rose-500/20 group-hover:to-indigo-600/20 group-hover:opacity-100"
              transition={{ duration: 0.2 }}
            />
            <Menu />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNavbar
            onClose={() => setMobileMenuOpen(false)}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        )}
      </AnimatePresence>
    </>
  );
};
