import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import type { TechnologyStack } from "../types/types";

export const useStackManager = () => {
  const [technologies, setTechnologies] = useState<TechnologyStack[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyStack[]
  >([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const addToStack = (technology: TechnologyStack) => {
    const isAdded = selectedTechnologies.some(
      (tech) => tech.id === technology.id,
    );

    if (isAdded) {
      toast.warn(`${technology.name} is already in your stack!`);
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
      toast.success(`Added ${technology.name} to your stack!`);
    }
  };

  const removeFromStack = (id: string) => {
    const techToRemove = selectedTechnologies.find((tech) => tech.id === id);
    setSelectedTechnologies(
      selectedTechnologies.filter((tech) => tech.id !== id),
    );
    if (techToRemove) {
      toast.info(`${techToRemove.name} removed from your stack!`);
    }
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
    toast.info("Stack cleared.");
  };

  return {
    technologies,
    selectedTechnologies,
    addToStack,
    removeFromStack,
    removeAll,
  };
};
