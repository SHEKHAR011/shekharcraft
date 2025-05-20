import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'; // Correct import: Github

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
          <motion.p
            variants={itemVariants}
            className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Feel free to reach out via email, LinkedIn, or GitHub
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 max-w-md mx-auto"
        >
          {/* Email */}
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <Mail className="text-blue-500" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">Email</h4>
              <a
                href="mailto:shekharsingh.dev@gmail.com"
                className={`hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                shekharsingh.dev@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <MapPin className="text-blue-500" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">Location</h4>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                Chandigarh, India
              </p>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <Linkedin className="text-blue-500" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/shekhar-singh-764b0a338/"  // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                linkedin.com
              </a>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div variants={itemVariants} className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <Github className="text-blue-500" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-1">GitHub</h4>
              <a
                href="https://github.com/SHEKHAR011"  // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                github.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
