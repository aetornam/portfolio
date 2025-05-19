import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  school: string;
  location: string;
  qualification: string;
  date: string;
  description?: string;
  courses?: string[];
  color: string;
}

const educationData: EducationItem[] = [
  {
    school: "IPMC",
    location: "Accra, Ghana",
    qualification: "Diploma in Software Engineering, Hardware & Network",
    date: "Aug. 2019",
    description: "Specialized in software development with focus on TypeScript, JavaScript, and web technologies.",
    courses: ["TypeScript & JavaScript Programming", "Web Development", "Database Management", "Network Administration"],
    color: "from-rose-500 to-rose-600",
  },
  {
    school: "Data Link Pre-University",
    location: "Volta, Ghana",
    qualification: "Diploma in Information Technology",
    date: "June 2017",
    description: "Studied fundamental IT concepts and programming principles.",
    courses: ["Programming Fundamentals", "Computer Systems", "IT Infrastructure"],
    color: "from-orange-500 to-amber-600",
  },
  {
    school: "Hohoe E.P Senior High School",
    location: "Volta, Ghana",
    qualification: "W.A.S.S.C.E",
    date: "May 2015",
    color: "from-blue-500 to-indigo-600",
  },
  {
    school: "Mawuli E.P Junior High School",
    location: "Volta, Ghana",
    qualification: "B.E.C.E",
    date: "May 2012",
    color: "from-purple-500 to-violet-600",
  },
];

export const Education: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-[#0a101f] to-[#111827] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-500 mb-4">
            Education & Training
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-indigo-500 rounded"></span>
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
            <span className="w-16 h-1 bg-rose-500 rounded"></span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic background and professional development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${item.color} p-6 relative`}>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.school}</h3>
                <p className="text-white/80 text-sm">{item.location}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-rose-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-white">{item.qualification}</h4>
                </div>

                {item.description && (
                  <p className="text-gray-300 mb-4">{item.description}</p>
                )}

                {item.courses && (
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-indigo-400 mb-2">Key Courses</h5>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-gray-900/70 text-gray-300 px-2.5 py-1 rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
