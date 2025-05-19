import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sections = navigation.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          name: item.name,
          top: rect.top + window.scrollY,
        };
      });

      const current = sections
        .filter(Boolean)
        .reverse()
        .find((section) => window.scrollY + 80 >= (section as any).top);

      if (current) setActiveSection((current as any).name);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? isDarkMode
        ? 'bg-gray-900/80 backdrop-blur-md shadow-md'
        : 'bg-white/80 backdrop-blur-md shadow-md'
      : 'bg-transparent'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              ShekharCrafts
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-700 hover:text-blue-500'
              } ${
                activeSection === item.name
                  ? 'text-blue-500 dark:text-blue-400'
                  : ''
              }`}
            >
              <span className="group-hover:text-blue-500 transition-colors duration-300">
                {item.name}
              </span>
              <span
                className={`absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 scale-x-0 origin-left transition-transform duration-300 ${
                  activeSection === item.name ? 'scale-x-100' : 'group-hover:scale-x-100'
                }`}
              />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-4 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}
          >
            <div className="px-6 pt-2 pb-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors duration-300 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-500'
                  } ${activeSection === item.name ? 'text-blue-500 dark:text-blue-400' : ''}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
