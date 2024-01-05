import { useState } from "react";
import ArabicIreland from "../assets/imgs/ArabicIrelandHero.png";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

const portfolioItems = [
  {
    id: 1,
    title: "Arabic Ireland",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempore quod omnis, distinctio aliquam nesciunt facilis officia blanditiis esse velit ullam vel ipsa, voluptas dolorem eius fugiat molestiae quisquam quidem?",
    imageUrl: ArabicIreland,
    category: "website",
  },
  {
    id: 2,
    title: "BodyBuddies Ireland",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempore quod omnis, distinctio aliquam nesciunt facilis officia blanditiis esse velit ullam vel ipsa, voluptas dolorem eius fugiat molestiae quisquam quidem?",
    imageUrl: ArabicIreland,
    category: "app",
  },
  {
    id: 3,
    title: "Kanafeh Kingz",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempore quod omnis, distinctio aliquam nesciunt facilis officia blanditiis esse velit ullam vel ipsa, voluptas dolorem eius fugiat molestiae quisquam quidem?",
    imageUrl: ArabicIreland,
    category: "website",
  },
];
const PortfolioItem = ({ title, description, imageUrl }) => {
  const handleClick = () => {
    console.log(`Clicked on ${title}`);
  };
  return (
    <div
      className="relative bg-white rounded-lg shadow-md overflow-hidden"
      id="projects"
    >
      <div className="relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-white text-sm font-bold">Visit Page</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm mb-2">{description}</p>

        <div className="flex gap-2">
          
          <button className="border p-3 pl-4 text-center rounded-[5px] text-black flex gap-2 items-center font-semibold">
          <FaGithub/> Github
          </button>

          <button className=" border p-3 pl-4 text-center rounded-[5px] text-black flex gap-2 items-center font-semibold">
            Live Demo
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredItems = portfolioItems.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });
  return (
    <section className="container mx-auto p-6" id="portfolio">
      <h3 className=" font-semibold text-center text-blue-500 mb-2 uppercase text-[14px]">
        Portfolio
      </h3>
      <h2 className="text-2xl text-center text-gray text-black mb-2 font-semibold">
        Recent Work
      </h2>
      <div className="text-center mb-4 font-semibold text-[18px] ">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "all"
              ? "bg-blue-500 text-white border rounded-[5px]"
              : "bg-white text-black border rounded-[5px]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory("website")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "website"
              ? "bg-blue-500 text-white border rounded-[5px]"
              : "bg-white text-black border rounded-[5px] "
          }`}
        >
          Website
        </button>
        <button
          onClick={() => setActiveCategory("app")}
          className={`px-4 py-2 m-2 ${
            activeCategory === "app"
              ? "bg-blue-500 text-white border rounded-[5px]"
              : "bg-white text-black border rounded-[5px]"
          }`}
        >
          Apps
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Work;
