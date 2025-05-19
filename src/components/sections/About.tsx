import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="about" 
      ref={ref} 
      className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pr-12"
          >
            <div 
              className={`relative rounded-2xl overflow-hidden shadow-xl ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <img
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
                alt="Professional portrait"
                className="w-full h-auto object-cover"
              />
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-500/10'}`}></div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Shekhar</span>
            </h3>
            <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate Android Developer with a strong foundation in programming languages like C++, Python, and Kotlin.
              I specialize in creating native Android applications that provide exceptional user experiences and solve real-world problems.
            </p>
            <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey in software development began with a deep interest in mobile technology and app development.
              I'm constantly learning and exploring new Android development technologies and best practices to create
              better, more efficient applications.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <User size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personal Info</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Android Developer
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <Briefcase size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Fresher Android Developer
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <GraduationCap size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Computer Science Graduate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;