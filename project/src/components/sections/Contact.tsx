import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
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
            I'd love to hear from you! Fill out the form below or reach out through my contact details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Mail className="text-blue-500" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <a 
                  href="mailto:hello@example.com" 
                  className={`hover:text-blue-500 transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  hello@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <MapPin className="text-blue-500" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Location</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  San Francisco, California
                </p>
              </div>
            </div>
            
            <div className="pt-10">
              <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <h4 className="text-lg font-semibold mb-4">Need a project done or want to collaborate?</h4>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I'm currently available for freelance work. If you have a project that you want to get started or need help with, feel free to get in touch.
                </p>
                <a 
                  href="#contact-form" 
                  className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-300 inline-block"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="contact-form"
          >
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/10 text-green-500 flex items-center">
                  <span className="mr-2">✓</span> Your message has been sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 text-red-500">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                  placeholder="Hello, I'm interested in discussing a project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 w-full rounded-full flex justify-center items-center gap-2 font-medium transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;