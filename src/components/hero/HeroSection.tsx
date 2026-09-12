import bannerStack from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.2] lg:leading-[1.1] tracking-tight">
          Build Your Ideal <br />
          <span className="whitespace-nowrap bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <button className="cursor-pointer bg-linear-to-r from-orange-500 to-pink-500 px-7 py-3 rounded-lg font-semibold text-white border border-transparent hover:bg-none hover:bg-white hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
            Explore Technologies
          </button>

          <button className="cursor-pointer bg-white border border-gray-200 px-7 py-3 rounded-lg font-semibold text-gray-700 hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-lg">
          <img
            src={bannerStack}
            alt="Hero Tech Stack"
            className="w-full h-auto drop-shadow-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <div className="hidden w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 border border-gray-200">
            banner-stack.png placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
