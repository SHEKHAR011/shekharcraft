import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-l font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ShekharCraftssss
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h4 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Connect
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className={`hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className={`hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className={`hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:hello@example.com" 
                  className={`hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </footer>
  );
};

export default Footer;