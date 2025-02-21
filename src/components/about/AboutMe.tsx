"use client"

import { Education } from "./Education";
import { Experience } from "./Expirence";

export const AboutMe = () => {
//   const [loading, setLoading] = useState(false);

//   const handleDownload = () => {
//     setLoading(true);

//     // Simulate a delay for a better user experience
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Adjust time as needed
//   };

  return (
    <>
      <div className="w-full min-h-screen flex items-center bg-[#111827] text-white px-6 lg:px-0 pt-20 overflow-y-auto">
        <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-6 pb-20">
          {/* Title */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-4xl font-serif font-semibold text-rose-400 mt-2">
              About Me
            </h2>
            <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
            <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
          </div>

          <h4 className="capitalize text-xl font-semibold text-center md:text-left">
            I&apos;m a{" "}
            <span className="text-green-700">
              Software Developer & IT Specialist
            </span>
          </h4>

          <p className="text-gray-300 leading-relaxed">
            I am a results-driven Software Developer and IT Specialist with over
            5 years of experience in software development, hardware
            troubleshooting, and network management. I specialize in building
            scalable and efficient applications using JavaScript, React.js,
            Next.js, Node.js, Python, and MSSQL Server. My expertise extends to
            hardware repair, network setup, and cross-platform system
            optimization across Windows, macOS, and Linux.
          </p>

          <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
            {/* Personal Info */}
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-between font-serif">
                {/* Left Column */}
                <ul className="w-full text-gray-300">
                  <li className="py-2 border-b border-gray-600">
                    <span className="font-bold">Diploma :</span> Software
                    Engineering
                  </li>
                  <li className="py-2 border-b border-gray-600">
                    <span className="font-bold">Location :</span> Ho, Volta
                    Ghana
                  </li>
                  <li className="py-2 border-b border-gray-600">
                    <span className="font-bold">Employment :</span> Remote / On
                    Site
                  </li>
                </ul>

                {/* Right Column */}
                <ul className="w-full text-gray-300 font-serif">
                  <li className="py-2 border-b border-gray-600">
                    <span className="font-bold">Email :</span>{" "}
                    aetortech@gmail.com
                  </li>
                  <li className="py-2 border-b border-gray-600">
                    <span className="font-bold">Phone No :</span> +233 238141505
                  </li>
                  <li className="py-2 border-b border-gray-600">
                    <span className="font-bold">Freelance :</span> Available
                  </li>
                </ul>
              </div>

              {/* Buttons */}
              {/* <div className="flex gap-4 justify-center sm:justify-start">
                <Link href="mailto:aetortech@gmail.com" target="_blank">
                  <button className="px-6 py-2 bg-rose-500 text-white rounded-sm hover:bg-rose-600 transition">
                    Hire Me
                  </button>
                </Link>
                <Link
                  href="/images/cv.pdf"
                  download="My_CV.pdf"
                  target="_blank"
                >
                  <button
                    onClick={handleDownload}
                    disabled={loading}
                    className="px-5 py-2 bg-green-700 hover:bg-green-800 rounded text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition disabled:bg-gray-500"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                        Downloading...
                      </>
                    ) : (
                      "Download CV"
                    )}
                  </button>
                </Link>
              </div> */}
            </div>

            {/* Skills & Progress Bars */}
            <div className="w-full flex flex-col gap-4">
              {/* Skill - JavaScript/React.js */}
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between font-semibold">
                  <span>JavaScript/React.js</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full">
                  <div className="w-[95%] h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Skill - Next.js/Node.js */}
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between font-semibold">
                  <span>Next.js/Node.js</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full">
                  <div className="w-[90%] h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Skill - NestJS */}
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between font-semibold">
                  <span>NestJS</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full">
                  <div className="w-[85%] h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Skill - PostgreSQL & Database Management */}
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between font-semibold">
                  <span>PostgreSQL & Database Management</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full">
                  <div className="w-[80%] h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              {/* Skill - Hardware & Network Management */}
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between font-semibold">
                  <span>Hardware & Network Management</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full">
                  <div className="w-[90%] h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Education />
    </>
  );
};
