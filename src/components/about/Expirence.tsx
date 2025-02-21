import React from "react";

export const Experience = () => {
  return (
    <div className="bg-gray-900 p-4 w-full px-6 lg:px-0">
      <h2 className="text-3xl text-white font-bold mb-12 text-center">
        Experience
      </h2>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid lg:w-[80%]">
        {/* Experience 1 - IT Consultant (Freelance) */}
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-lg font-semibold lg:text-xl">
              IT Consultant (Freelance)
            </h3>
            <p className="mt-2 leading-6">
              Specializing in software development, custom software solutions,
              and system installations. Providing hardware and computer repairs,
              network setup, and IT consulting services for clients.
            </p>
            <span className="absolute text-sm text-gray-300 -top-5 left-2 whitespace-nowrap">
              March 2024 - Present
            </span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-500 rounded-t-full bg-gradient-to-b from-gray-400 to-gray-500"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2"></div>
          </div>
        </div>

        {/* Experience 2 - IT Technician & ICT Teacher */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-500"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-lg font-semibold lg:text-xl">
              IT Technician & ICT Teacher
            </h3>
            <p className="mt-2 leading-6">
              Provided technical support, hardware maintenance, and network
              setup. Taught ICT fundamentals, programming, and safe technology
              practices.
            </p>
            <span className="absolute text-sm text-gray-300 -top-5 left-2 whitespace-nowrap">
              Jan 2021 - 2025
            </span>
          </div>
        </div>

        {/* Experience 3 - Software Developer & IT Technician */}
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-lg font-semibold lg:text-xl">
              Software Developer & IT Technician
            </h3>
            <p className="mt-2 leading-6">
              Developed and maintained web applications, optimized system
              performance, and managed both software and hardware
              troubleshooting.
            </p>
            <span className="absolute text-sm text-gray-300 -top-5 left-2 whitespace-nowrap">
              Oct 2019 - Feb 2020
            </span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-500 rounded-t-full bg-gradient-to-b from-gray-400 to-gray-500"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2"></div>
          </div>
        </div>

        {/* Experience 4 - Library Assistant */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-500"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-lg font-semibold lg:text-xl">IT Technician</h3>
            <p className="mt-2 leading-6">
              Provided software development, system installations, hardware
              repairs, network setup, and custom IT solutions for the clients.
            </p>

            <span className="absolute text-sm text-gray-300 -top-5 left-2 whitespace-nowrap">
              2020
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
