import React from 'react';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const portfolioItems = [
  {
    id: 1,
    title: 'BoddyBuddies',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/path-to-your-project-image.jpg',
    githubUrl: '#', // Replace with your GitHub URL
    liveDemoUrl: '#' // Replace with your live demo URL
  },

  {
    id: 2,
    title: 'FlashAlgo',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/path-to-your-project-image.jpg',
    liveDemoUrl: '#' // Replace with your live demo URL
  },

  {
    id: 3,
    title: 'MyTaxiIncome',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/path-to-your-project-image.jpg',
    githubUrl: '#', // Replace with your GitHub URL
    liveDemoUrl: '#' // Replace with your live demo URL
  },


  {
    id: 4,
    title: 'Pro Tillz',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/path-to-your-project-image.jpg',
    githubUrl: '#', // Replace with your GitHub URL
    liveDemoUrl: '#' // Replace with your live demo URL
  },

  {
    id: 5,
    title: 'My Bookingz',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/path-to-your-project-image.jpg',
    githubUrl: '#', // Replace with your GitHub URL
    liveDemoUrl: '#' // Replace with your live demo URL
  },

  {
    id: 6,
    title: 'Arabic Ireland',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageUrl: '/path-to-your-project-image.jpg',
    githubUrl: '#', // Replace with your GitHub URL
    liveDemoUrl: '#' // Replace with your live demo URL
  },
 
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
  
    const filteredItems = portfolioItems.filter(item => {
      switch(filter) {
        case 'All':
          return true;
        case 'Apps':
          return ['MyTaxiIncome', 'Pro Tillz', 'My Bookingz'].includes(item.title);
        case 'Websites':
          return ['BoddyBuddies', 'FlashAlgo', 'Arabic Ireland'].includes(item.title);
        default:
          return true;
      }
    });
    
    const { ref, inView } = useInView({
      rootMargin: '-100px 0px',
    });
  
    const variants = {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 50 },
    };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="py-16 px-4" id='projects'>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black mb-4">My Portfolio</h2>
        <p className="mb-12 text-gray-600 max-w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam fugiat atque ipsum vitae iure consequuntur, officia aspernatur ipsam ut repellendus necessitatibus possimus a magnam labore, cupiditate excepturi neque. Ipsum, repellat!</p>
        <div className="mb-10">
          <button onClick={() => setFilter('All')} className="mx-2 px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none">All</button>
          <button onClick={() => setFilter('Websites')} className="mx-2 px-4 py-2 border-2 border-black text-black  rounded-lg focus:outline-none">Websites</button>
          <button onClick={() => setFilter('Apps')} className="mx-2 px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none">Apps</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {filteredItems.map(item => (
    <div key={item.id} className="border-2 border-black rounded-lg p-4">
      <img src={item.imageUrl} alt={item.title} className="w-full h-50 object-cover mb-4 rounded" /> 
      <h3 className="text-xl font-semibold text-left">{item.title}</h3>
      <p className="text-gray-600 mb-4 text-left">{item.description}</p>

      <div className="flex gap-2">
        <a href={item.githubUrl} className="flex items-center gap-2 px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none">
            <FaGithub className="text-lg" /> <span>GitHub</span>
        </a>
        <a href={item.liveDemoUrl} className="flex items-center gap-2 px-4 py-2 border-2 border-black text-black rounded-lg focus:outline-none">
            <span>Live Demo</span> <FaExternalLinkAlt className="text-lg" />
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>

    </motion.div>
    
  );
};

export default Portfolio;
