import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import TechSection from "./components/TechSection";
import ToastProvider from "./components/toasts/ToastProvider";
import { useStackManager } from "./hooks/useStackManager";
import Footer from "./components/footer/Footer";

function App() {
  const {
    technologies,
    selectedTechnologies,
    addToStack,
    removeFromStack,
    removeAll,
    loading,
  } = useStackManager();

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar />

      <HeroSection />

      {loading ? (
        <main className="flex-1 flex items-center justify-center py-20">
          <p className="text-lg font-semibold text-gray-500">
            Loading technologies...
          </p>
        </main>
      ) : (
        <TechSection
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          addToStack={addToStack}
          removeFromStack={removeFromStack}
          removeAll={removeAll}
        />
      )}

      <Footer />

      <ToastProvider />
    </div>
  );
}

export default App;