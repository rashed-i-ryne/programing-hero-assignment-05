interface Props { 
  isOpen: boolean; 
}

const MobileNavbar = ({ isOpen }: Props) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t shadow-md absolute w-full left-0">
      <a href="#" className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md">Home</a>
      <a href="#" className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md">Technologies</a>
      <a href="#" className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md">Projects</a>
      <a href="#" className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md">About</a>
      <a href="#" className="block px-3 py-2 text-gray-600 font-medium hover:bg-pink-50 hover:text-pink-600 rounded-md">Contact</a>
    </div>
  );
};

export default MobileNavbar;