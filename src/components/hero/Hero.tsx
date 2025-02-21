"use client";

import { useEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";

export const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "",
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
    <div className="w-full h-screen bg-[#111827] dark:bg-[#111827] flex justify-center items-center">
      {/* Hero Section */}
      <div className="h-full w-full mx-auto xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center ">
        {/* Profile Image */}
        <div className="w-full relative flex justify-center lg:mt-0 md:mt-12">
          <Image
            src="/images/heroimages.png"
            alt="My Image"
            width={300}
            height={300}
            className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute rounded-full lg:max-w-[70%] max-w-[60%]"
          /> 
          <Image
            src="/images/heroimages.png"
            alt="My Image"
            width={300}
            height={300}
            className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
          />
        </div>

        {/* Hero Text */} 
        <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800">
          <h1 className="md:text-3xlm lg:text-5xl lg:mt-0 sm:text-3xl text-3xl font-semibold font-serif text-white mt-4 md:mt-14">
            Hello, My name is Francis Awiti
          </h1>
          <h3 className="capitalize text-rose-400 text-2xl">
            I&apos;m{" "}
            <span className="typing text-green-500 dark:text-green-700 text-2xl">
              Fullstack Developer
            </span>
          </h3>
          <p className="text-2xl text-white">
            Experienced full-stack developer with 5+ years of expertise in
            JavaScript, React.js, Next.js, Node.js, Nest.js, PostgreSQL and
            MSSQL Server.
          </p>
          <div className="sm:mt-4 lg:mt-2 mt-2 md:mb-5 md:mt-1 flex flex-col sm:flex-row gap-3">
            <Link href="mailto:aetortech@gmail.com" target="_blank">
              <button className="px-6 py-2 bg-rose-500 text-white rounded-sm hover:bg-rose-600 transition">
                Hire Me
              </button>
            </Link>

            <Link href="/images/cv.pdf" download="My_CV.pdf" target="_blank" >
              <button className="px-6 py-2 bg-green-700 hover:bg-green-800 rounded text-white font-bold">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
