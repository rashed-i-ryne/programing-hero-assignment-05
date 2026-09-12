 interface Props { 
  isOpen: boolean; 
  onClose: () => void;
}
 interface TechnologyStack {
  id: string,
  name: string,
  category: string,
  description: string,
  icon: string,
  rating: number,
  difficulty: string,
  badge: string,
   
}

interface SelectedStackProps {
  selectedTechnologies: TechnologyStack[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

interface TechStackProps {
  technologies: TechnologyStack[];
  selectedTechnologies: TechnologyStack[];
  addToStack: (tech: TechnologyStack) => void;
}
interface TechSectionProps {
  technologies: TechnologyStack[];
  selectedTechnologies: TechnologyStack[];
  addToStack: (tech: TechnologyStack) => void;
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

export type { Props, TechnologyStack, SelectedStackProps, TechStackProps, TechSectionProps};