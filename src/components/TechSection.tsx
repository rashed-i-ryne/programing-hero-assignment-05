
import TechStack from "./techStack/TechStack";
import SelectedStack from "./selectedStack/SelectedStack";
import type { TechSectionProps } from "../types/types";



const TechSection = ({
  technologies,
  selectedTechnologies,
  addToStack,
  removeFromStack,
  removeAll,
}: TechSectionProps) => {
  return (
    <main className="max-w-7xl mx-auto w-full px-4 py-16 flex-1">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-slate-500 text-lg font-medium">Pick one technology per category to build your ideal stack.</p>
      </div> 

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full">
          <TechStack 
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            addToStack={addToStack}
          />
        </div>

        <div className="w-full lg:w-85 shrink-0 sticky top-24">
          <SelectedStack 
            selectedTechnologies={selectedTechnologies}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />
        </div>
      </div>
    </main>
  );
};

export default TechSection;