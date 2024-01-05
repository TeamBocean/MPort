import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../constants";

const Skills = () => {
  const sliderSettings = {
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderSetting = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="skills-slider mx-auto max-w-screen-xl p-10"
    >
      <h3 className=" font-semibold text-center text-blue-500 mb-2 uppercase text-[18px]">
        My Talent
      </h3>
      <h2 className="text-2xl text-center text-gray text-black mb-2 font-semibold">
        Professional Skills
      </h2>
      <Slider {...sliderSettings} className="custom-slider">
        {skills.map((skill) => (
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
            <p className="text-center mt-2 font-semibold text-[18px]">{skill.name}</p>
          </motion.div>
        ))}
      </Slider>

      <Slider {...sliderSetting} className="custom-slider">
        {skills.map((skill) => (
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
            <p className="text-center mt-2 font-semibold text-[18px]">{skill.name}</p>
          </motion.div>
        ))}
      </Slider>

    </motion.div>
  );
};

export default Skills;
