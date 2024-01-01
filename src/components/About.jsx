import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaFolderOpen, FaGraduationCap } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
  });

  // Hover effect variant for the icon boxes
  const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Narrative text content
  const narrativeText = "With Over 3 Years Of Experience In The Tech Industry, I've Had The Privilege Of Working With Over 20 Clients Worldwide And Completing More Than 30 Projects. I Hold A Bachelor Of Science Degree And Continually Strive To Learn And Grow In My Field.";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="max-w-4xl mx-auto mt-[82px]" id='about'>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-left title-animate">About Me</h2>
          <p className="mb-12 text-[16px] text-left text-gray-500 max-w-[800px]">
            {narrativeText}
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-[-24px]"
          initial="hidden"
          whileInView="visible"
        >
          {/* Icon box with hover and focus styles */}
          {['Experience', 'Clients', 'Projects', 'Education'].map((item, index) => (
            <motion.div
              whileHover="hover"
              variants={hoverEffect}
              className=" rounded-lg flex flex-col items-center p-4 transition ease-in-out duration-300 card"
              key={index}
            >
              {/* Dynamic icon rendering */}
              {index === 0 && <FaLaptopCode className="text-4xl mb-4" />}
              {index === 1 && <FaUsers className="text-4xl mb-4" />}
              {index === 2 && <FaFolderOpen className="text-4xl mb-4" />}
              {index === 3 && <FaGraduationCap className="text-4xl mb-4" />}
              <h3 className="text-lg font-semibold">{item}</h3>
              {/* Dynamic data rendering */}
              <span>
                {index === 0 ? '3+ Years Working' : index === 1 ? '20+ Worldwide' : index === 2 ? '30+ Completed' : 'BSC'}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
