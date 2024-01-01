import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../constants';

const Skills = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="skills-slider mx-auto max-w-6xl"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">My Skills</h2>
      <Slider {...sliderSettings} className='custom-slider'>
        {skills.map(skill => (
          <motion.div 
            key={skill.name} 
            className="p-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img 
              src={skill.Image} 
              alt={skill.name} 
              className="mx-auto transition duration-300 ease-in-out" 
            />
            <p className="text-center mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Skills;
