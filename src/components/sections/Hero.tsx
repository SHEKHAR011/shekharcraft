import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Smartphone, Code2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}
    >
      {/* Subtle Floating Circles */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl top-10 left-10 z-0 animate-pulse" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/10 blur-3xl bottom-10 right-10 z-0 animate-pulse" />

      {/* Icons floating */}
      <motion.div
        className="absolute top-20 right-20 text-blue-400/40"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Smartphone size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-purple-400/40"
        initial={{ y: 0 }}
        animate={{ y: [-10, 0, -10] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Code2 size={40} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.2 },
            },
          }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-6"
          >
            <span className="text-sm md:text-base px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 inline-block">
              Android Developer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Building{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Android apps that matter
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            I'm a passionate Android developer creating native mobile applications with a focus on user experience and performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
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
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Scroll down
          </span>
          <ArrowDown className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
