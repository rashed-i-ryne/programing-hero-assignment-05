interface Props { 
  isOpen: boolean; 
  onClose: () => void;
}

const MobileNavbar = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  
  return (
    <div 
      id="mobile-navigation" 
      className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t shadow-md absolute w-full left-0 top-full"
    >
      <a href="#" onClick={onClose} className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Home</a>
      <a href="#" onClick={onClose} className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Technologies</a>
      <a href="#" onClick={onClose} className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Projects</a>
      <a href="#" onClick={onClose} className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">About</a>
      <a href="#" onClick={onClose} className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Contact</a>
    </div>
  );
};

export default MobileNavbar;