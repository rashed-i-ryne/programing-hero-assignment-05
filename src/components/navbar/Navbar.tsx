import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import logo from '../../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white">   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added 'relative' here to bound the absolute centering */}
        <div className="flex items-center h-16 relative">
          
          {/* Hamburger Menu (Mobile Only) */}
          <div className="md:hidden flex items-center">
            <button 
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen(!isOpen)} 
              className="cursor-pointer text-gray-600 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
            >
              <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo Section (Absolute Center on Mobile, Static Left on Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto flex items-center shrink-0">
            <img src={logo} alt="Brand Logo" className="h-8" />
          </div>

          {/* Links Section (Desktop Only - Absolute Center) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Technologies</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Projects</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">About</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 font-medium px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">Contact</a>
          </div>

          {/* Buttons Section (Right Aligned via ml-auto) */}
          <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
            <button className="cursor-pointer text-sm md:text-base text-gray-600 font-medium hover:text-pink-600 px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600">
              Sign In
            </button>
            <button className="cursor-pointer bg-[#D91B7E] text-white text-sm md:text-base px-4 py-1.5 md:px-5 md:py-2 rounded-full font-medium border border-transparent hover:bg-white hover:border-pink-600 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2">
              Sign Up
            </button>
          </div>
          
        </div>
      </div>
      
      <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;