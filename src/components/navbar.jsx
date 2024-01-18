import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../style/navbar.css';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.2,
      color: '#00ffa2',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <motion.a
        href="#home"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        custom={0}
        variants={variants}
      >
        Home
      </motion.a>
      <motion.a
        href="#projects"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        custom={3}
        variants={variants}
      >
        Projects
      </motion.a>
      <motion.a
        href="#contact"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        custom={7} 
        variants={variants}
      >
        Contact
      </motion.a>
    </nav>
  );
};

export default Navbar;
