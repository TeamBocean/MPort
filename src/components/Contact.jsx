import { FaEnvelope, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
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
    <section className="contact-section text-center py-12" id='contact'>
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="mb-8">Drop Me A Message Via Any Of The Links Below To Get Started!</p>
      <div className="flex justify-center gap-8">
        <a href="mailto:your-email@example.com" className="contact-icon">
          <FaEnvelope className="text-4xl" />
        </a>
        <a href="https://t.me/yourusername" className="contact-icon">
          <FaTelegramPlane className="text-4xl" />
        </a>
        <a href="https://wa.me/yourphonenumber" className="contact-icon">
          <FaWhatsapp className="text-4xl" />
        </a>
      </div>
    </section>

    </motion.div>
    
  );
}

export default Contact;
