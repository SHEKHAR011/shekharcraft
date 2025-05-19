import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDarkMode && (
          <>
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 blur-3xl"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <span className="text-sm md:text-base px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 inline-block mb-6">
              Android Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight tracking-tight"
          >
            Building <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Android apps</span> that matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            I'm a passionate Android developer creating native mobile applications with a focus on user experience and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-300 text-center min-w-[160px]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-full font-medium transition-colors duration-300 text-center min-w-[160px] ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Scroll down</span>
          <ArrowDown className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;