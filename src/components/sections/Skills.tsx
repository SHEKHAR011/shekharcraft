import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { skillsData } from '../../data/skills';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 transition-colors duration-500 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <h2
            className={`text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Skills & Technologies
          </h2>
          <p
            className={`mx-auto mt-4 max-w-3xl text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            I've worked with a variety of technologies and tools throughout my career.
            Here are some of the skills I've developed along the way.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              className={`rounded-xl p-6 transition-transform duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.03 }}
            >
              <h3
                className={`mb-8 flex items-center gap-4 text-2xl font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {category.icon}
                </span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="flex justify-between items-center"
                  >
                    <span
                      className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}
                    >
                      {skill.name}
                    </span>

                    <div
                      className={`relative w-24 h-8 rounded-full overflow-hidden ${
                        isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className={`absolute top-0 left-0 h-full rounded-full ${
                          category.color || 'bg-gradient-to-r from-blue-500 to-indigo-600'
                        } shadow-lg`}
                        style={{ boxShadow: '0 0 8px rgba(59,130,246,0.7)' }}
                      />
                      <span
                        className={`relative z-10 block w-full text-center font-semibold ${
                          isDarkMode ? 'text-indigo-300' : 'text-white'
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
