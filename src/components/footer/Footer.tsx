import logo from '../../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Dev Stack Logo" className="h-8" />
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            <div className="flex items-center space-x-3 pt-2 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
              <span>•</span>
              <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
              <span>•</span>
              <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-8 text-center lg:text-left">
            
            <div className="hidden md:block space-y-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
              </ul>
            </div>

            <div className="hidden md:block space-y-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="hidden md:block space-y-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        <div className="pt-8 flex flex-row items-center justify-between text-[11px] sm:text-xs text-gray-400 gap-2">
          <p className="whitespace-nowrap">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-4 sm:space-x-6 whitespace-nowrap">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;