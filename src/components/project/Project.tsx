import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Getwellshop – Inventory Management System",
    description: "A robust inventory management system.",
    link: "https://getwellshop.vercel.app/",
    technologies: "Next.js, TypeScript, Prisma, Kysely, PostgreSQL, Tailwind CSS",
    image: "/images/getwellshop.png", // Placeholder image, change as needed
  },
  {
    name: "Aetortech – Landing Page",
    description: "A professional landing page for Aetortech.",
    link: "https://aetortech.netlify.app/",
    technologies: "React.js, PHP, Bootstrap, CSS, HTML",
    image: "/images/aetortech.png", // Placeholder image
  },
  {
    name: "Nyansapo – Course Management App",
    description: "A course management system for online learning.",
    link: "https://nyansa-po.com/",
    technologies: "Next.js, TypeScript, Prisma, Kysely, PostgreSQL, Tailwind CSS",
    image: "/images/nyansapo.png", // Placeholder image
  },
  {
    name: "Tech-Tribe – Landing Page",
    description: "A WordPress-based landing page for Tech-Tribe.",
    link: "https://www.tech-tribe.net/",
    technologies: "WordPress, HTML, CSS, jQuery, PHP",
    image: "/images/tech-tribe.png", // Placeholder image
  },
  {
    name: "Lorkartswitz – Landing Page",
    description: "A landing page for Lorkartswitz.",
    link: "http://lorkartswitz.com/",
    technologies: "Bootstrap, HTML, CSS, jQuery, PHP",
    image: "/images/lorkartswitz.png", // Placeholder image
  },
];

export const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16" id="projects">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 mt-10">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg bg-gray-800">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>
              </div>
              <div className="px-6 py-4">
                <Link href={project.link} target="_blank">
                  <h3 className="font-semibold text-lg hover:text-indigo-400 transition duration-500">
                    {project.name}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                <p className="text-gray-500 text-xs mt-2">{project.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
