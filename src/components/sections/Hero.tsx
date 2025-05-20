import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Smartphone, Code2, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      } transition-colors duration-500`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Circles */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl top-10 left-10 z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1.2, 
            opacity: 1,
            transition: {
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/10 blur-3xl bottom-10 right-10 z-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: 1.3, 
            opacity: 1,
            transition: {
              duration: 14,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 3
            }
          }}
        />

        {/* Floating Icons - Fixed animation */}
        <motion.div
          className="absolute top-20 right-20 text-blue-400/30 z-10"
          initial={{ y: 0 }}
          animate={{
            y: [0, -15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Smartphone size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-purple-400/30 z-10"
          initial={{ y: 0 }}
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
        >
          <Code2 size={40} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-16 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          {/* Badge with refined animation */}
          <motion.div
            variants={item}
            className="mb-6"
          >
            <motion.span 
              className="text-sm md:text-base px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 inline-flex items-center gap-2"
              whileHover={{ 
                scale: 1.04,
                boxShadow: isDarkMode ? '0 0 12px rgba(96, 165, 250, 0.3)' : '0 0 12px rgba(59, 130, 246, 0.2)'
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 500, 
                damping: 15 
              }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.span>
              Fresher Android Developer
            </motion.span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Building{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Android apps that matter
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            I'm a passionate Android developer creating native mobile applications with a focus on user experience and performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 text-center min-w-[160px] shadow-lg hover:shadow-l hover:shadow-blue-500/30"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact"
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 text-center min-w-[160px] border ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700' 
                  : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-200'
              } shadow-lg hover:shadow-xl hover:shadow-gray-500/10`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
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
