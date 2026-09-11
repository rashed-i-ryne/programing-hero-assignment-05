import heroImg from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">

      {/* Left Side of Hero Section */}
      
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.2] lg:leading-[1.1] tracking-tight">
          Build Your Ideal <br />
          <span className="whitespace-nowrap bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        {/* Added mx-auto lg:mx-0 to center the max-width block on mobile */}
        <p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        {/* Buttons Row: Centered on mobile, left-aligned on desktop */}
        <div className="flex flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
          <button className="cursor-pointer bg-linear-to-r from-orange-500 to-pink-500 px-5 sm:px-7 py-3 rounded-lg font-semibold text-white shadow-md border border-transparent hover:bg-none hover:bg-white hover:border-pink-600 hover:text-slate-800">
            Explore Technologies
          </button>
          <button className="cursor-pointer border border-gray-700 px-5 sm:px-7 py-3 rounded-lg font-semibold text-gray-700 hover:border-pink-600 hover:text-slate-800">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src={heroImg}
            alt="Hero Tech Stack"
            className="w-full h-auto drop-shadow-2xl"
          
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
