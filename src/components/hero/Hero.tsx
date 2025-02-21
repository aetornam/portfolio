"use client";

import { useEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";

export const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "FullStack Developer,",
        "Frontend Developer,",
        "Backend Developer,",
        "Mobile Apps Developer.",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#111827] flex justify-center items-center mt-16">
      {/* Hero Section */}
      <div className="h-full w-full max-w-7xl mx-auto px-5 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Profile Image */}
        <div className="relative flex justify-center md:w-1/2 w-full">
          
            <Image
              src="/images/heroimages.png"
              alt="My Image"
              width={250}
              height={250}
              className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute rounded-full md:max-w-[75%] max-w-[65%]"
            />
            <Image
              src="/images/heroimages.png"
              alt="My Image"
              width={250}
              height={250}
              className="relative z-10 rounded-full md:max-w-[75%] max-w-[65%] outline outline-[.5rem] outline-offset-[.1rem] outline-rose-400/30"
            />
         
        </div>

        {/* Hero Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif text-white">
            Hello, My name is <br className="sm:hidden" /> Francis Awiti
          </h1>
          <h3 className="capitalize text-rose-400 text-lg sm:text-xl md:text-2xl mt-2">
            I&apos;m{" "}
            <span className="typing text-green-500 text-lg sm:text-xl md:text-2xl"></span>
          </h3>
          <p className="text-sm sm:text-lg md:text-xl text-white mt-2">
            Experienced full-stack developer with 5+ years of expertise in
            JavaScript, React.js, Next.js, Node.js, Nest.js, PostgreSQL, and MSSQL Server.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link href="mailto:aetortech@gmail.com" target="_blank">
              <button className="px-5 py-2 bg-rose-500 text-white rounded-sm hover:bg-rose-600 transition text-sm sm:text-base">
                Hire Me
              </button>
            </Link>

            <Link href="/images/cv.pdf" download="My_CV.pdf" target="_blank">
              <button className="px-5 py-2 bg-green-700 hover:bg-green-800 rounded text-white font-bold text-sm sm:text-base">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
