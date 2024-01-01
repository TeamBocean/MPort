import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa'; // Using Font Awesome for the icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) { // The button will be shown after scrolling down 500px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  // Event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean-up function
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 scroll-to-top-button">
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px', // Set the width and height of the button
            height: '50px',
            borderRadius: '50%', // Make it round
            cursor: 'pointer',
            transition: 'opacity 0.3s ease-in-out',
            backgroundColor: 'white',
          }}
          aria-label="Scroll to top"
        >
          <FaArrowCircleUp size="28" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
