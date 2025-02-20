import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black relative flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      {/* Hero Content */}
      <div className="lg:px-16 pb-4 h-full flex flex-col sm:flex-row sm:items-center justify-center text-white relative z-10 pt-24 sm:pt-16 md:pt-12">
        {/* Left Column */}
        <div className="w-full flex flex-col text-center sm:text-left">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold relative z-20 mt-12">
            Hey There
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif mt-2">
            I'm <span className="text-rose-500">Francis</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif">Awiti</h1>
          <h4 className="text-rose-500 mt-4 text-md sm:text-xl md:text-2xl">
            -- FullStack Developer
          </h4>

          <p className="lg:w-[70%] w-full text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
            Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, 
            Next.js, Android, and some Flutter experience.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mt-6">
            <button className="px-6 py-2 bg-rose-500 text-md sm:text-lg md:text-xl text-white rounded-lg shadow-md hover:bg-rose-600 transition">
              Resume
            </button>
            <button className="px-6 py-2 bg-rose-500 text-md sm:text-lg md:text-xl text-white rounded-lg shadow-md hover:bg-rose-600 transition">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="w-full flex flex-col items-center sm:items-end mt-8 sm:mt-0 gap-6 p-4 rounded-lg bg-gray-700/60 sm:bg-transparent">
          <StatItem value="5" label="Years of Experience" />
          <StatItem value="10" label="Projects Completed" />
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute hidden sm:block md:top-20 sm:top-[10%] top-[12%] xl:top-4 xl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] left-[10%] overflow-hidden">
        <Image
          className="2xl:h-[760px] xl:h-[600px] md:h-[450px] sm:h-[480px]"
          src="/images/heroimage.png"
          alt="Hero Image"
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

// Reusable Stat Item Component
const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center sm:items-end">
      <div className="inline-flex gap-1 items-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold">{value}</h2>
        <h2 className="text-rose-500 text-4xl sm:text-6xl md:text-7xl font-extrabold">+</h2>
      </div>
      <h4 className="text-md sm:text-xl md:text-2xl text-center">{label}</h4>
    </div>
  );
};

export default Hero;
