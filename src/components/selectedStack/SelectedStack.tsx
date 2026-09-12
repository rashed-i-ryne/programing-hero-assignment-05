import type { TechnologyStack, SelectedStackProps } from "../../types/types";

const SelectedStack = ({
  selectedTechnologies,
  removeFromStack,
  removeAll,
}: SelectedStackProps) => {
  const count = selectedTechnologies.length;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
      <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
      <p className="text-gray-400 text-sm mb-6">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-2xl p-10 text-center bg-gray-50/50">
          <p className="text-gray-400 text-sm font-medium">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {selectedTechnologies.map((tech: TechnologyStack) => (
            <div
              key={tech.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-sm text-gray-900">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mt-0.5">
                    {tech.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromStack(tech.id)}
                className="cursor-pointer text-gray-400 hover:text-gray-600 transition p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {count > 0 && (
        <button
          onClick={removeAll}
          className="cursor-pointer w-full py-3 border border-red-200 text-red-500 rounded-xl hover:bg-red-50 transition font-semibold text-sm"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStack;
