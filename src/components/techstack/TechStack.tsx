import type { TechnologyStack, TechStackProps } from "../../types/types";

const TechStack = ({
  technologies,
  selectedTechnologies,
  addToStack,
}: TechStackProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech: TechnologyStack) => {
        const isAdded = selectedTechnologies.some(
          (item: TechnologyStack) => item.id === tech.id,
        );

        return (
          <div
            key={tech.id}
            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {tech.badge && (
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 tracking-wide">
                  {tech.badge}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {tech.name}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
              {tech.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-6 font-medium">
              <span className="bg-gray-100 px-3 py-1.5 rounded-lg text-gray-600">
                {tech.category}
              </span>
              <span>{tech.difficulty}</span>
              <span className="flex items-center text-orange-500 font-bold">
                <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {tech.rating}
              </span>
            </div>

            <button
              onClick={() => addToStack(tech)}
              disabled={isAdded}
              className={`w-full py-3 rounded-xl text-sm transition-all ${
                isAdded
                  ? "bg-[#0A0F1D] text-white cursor-not-allowed opacity-90"
                  : "bg-[#0A0F1D] text-white hover:bg-gray-800 shadow-md"
              }`}
            >
              {isAdded ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
