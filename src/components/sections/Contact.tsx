import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
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
      id="contact" 
      ref={ref} 
      className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss a potential collaboration? 
            I'd love to hear from you! Here's how you can reach me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <Phone className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+11234567890" 
                    className={`hover:text-blue-500 transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm currently available for freelance work and interesting projects. 
                Feel free to reach out through any of the provided contact methods.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-300"
                >
                  View My Work
                </a>
                <a 
                  href="#" 
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;