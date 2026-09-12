import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import TechSection from "./components/TechSection";
import ToastProvider from "./components/tost/ToastProvider";
import { useStackManager } from "./hooks/useStackManager";

function App() {
  const { 
    technologies, 
    selectedTechnologies, 
    addToStack, 
    removeFromStack, 
    removeAll 
  } = useStackManager();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />
      <HeroSection />
      <TechSection 
        technologies={technologies}
        selectedTechnologies={selectedTechnologies}
        addToStack={addToStack}
        removeFromStack={removeFromStack}
        removeAll={removeAll}
      />

      <ToastProvider />
    </div>
  );
}

export default App;