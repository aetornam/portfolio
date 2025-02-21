import React from "react";

interface EducationItem {
  school: string;
  location: string;
  qualification: string;
  date: string;
  bgColor: string;
}

const educationData: EducationItem[] = [
  {
    school: "IPMC",
    location: "Accra, Ghana",
    qualification: "Diploma in Software Engineering, Hardware & Network",
    date: "Aug. 2019",
    bgColor: "bg-rose-500",
  },
  {
    school: "Data Link Pre-University",
    location: "Volta, Ghana",
    qualification: "Diploma in Information Technology",
    date: "June 2017",
    bgColor: "bg-orange-500",
  },
  {
    school: "Hohoe E.P Senior High School",
    location: "Volta, Ghana",
    qualification: "W.A.S.S.C.E",
    date: "May 2015",
    bgColor: "bg-blue-500",
  },
  {
    school: "Mawuli E.P Junior High School",
    location: "Volta, Ghana",
    qualification: "B.E.C.E",
    date: "May 2012",
    bgColor: "bg-purple-500",
  },
];

export const Education: React.FC = () => {
  return (
    <div className="p-4 pt-20 bg-[#0f172a] text-white shadow-lg">
      <h1 className="text-4xl text-center font-semibold mb-6 text-rose-500">
        Education
      </h1>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-12">
          {educationData.map((item, index) => (
            <div key={index} className="flex md:contents">
              {/* Timeline Line */}
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full ${item.bgColor} shadow text-center`}>
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>

              {/* Education Card */}
              <div className={`${item.bgColor} col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full`}>
                <h3 className="font-semibold text-lg mb-1">{item.school} | {item.location}</h3>
                <p className="leading-tight">{item.qualification}</p>
                <p className="text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
