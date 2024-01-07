import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience, isDarkMode }) => {
  const contentStyle = {
  };

  const contentArrowStyle = {
  };
  
  return (
    <VerticalTimelineElement
      contentStyle= {contentStyle}
      contentArrowStyle= {contentArrowStyle}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold dark:text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold dark:text-white"
          style={{ margin: 0 }}
        >
          {experience.company_name} 
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider dark:text-white"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};





const Experience = ({ isDarkMode }) => {
  return (
    <Element name="experiences">
    <div className="">
      <motion.div variants={textVariant()}>
        <h3 className="font-semibold text-center text-blue-500 mb-2 uppercase text-[18px]">
          My Journey
        </h3>
        <h2 className="text-2xl text-center text-gray text-black mb-2 font-semibold dark:text-white">
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-4 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isDarkMode={isDarkMode}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
    </Element>
  );
};

export default SectionWrapper(Experience, "Experience");
