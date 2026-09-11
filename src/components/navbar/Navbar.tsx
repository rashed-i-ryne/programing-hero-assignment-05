import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import logo from '../../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white mt-5">   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="md:hidden flex items-center flex-1">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo Section (Mobile Center, Desktop Left) */}
          <div className="flex items-center justify-center shrink-0">
            <img src={logo} alt="Brand Logo" className="h-8" />
          </div>

          {/* Links Section (Desktop Only) */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium">Technologies</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium">Projects</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium">Contact</a>
          </div>

        
          <div className="flex items-center justify-end space-x-3 sm:space-x-4 flex-1 md:flex-none">
            <button className="cursor-pointer text-sm md:text-base text-gray-600 font-medium hover:text-pink-600">
              Sign In
            </button>
            <button className="cursor-pointer bg-[#D91B7E] text-white text-sm md:text-base px-4 py-1.5 md:px-5 md:py-2 rounded-full font-medium border border-transparent hover:bg-white hover:border-pink-600 hover:text-slate-800">
              Sign Up
            </button>
          </div>
          
        </div>
      </div>
      
      <MobileNavbar isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;