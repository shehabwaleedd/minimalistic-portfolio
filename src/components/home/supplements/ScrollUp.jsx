import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './ScrollUp.css'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
    className="scroll-up"
    initial={{ opacity: 0, x: 50 }}
    animate={isVisible ? "visible" : "hidden"}
    variants={buttonVariants}
    transition={{ duration: 0.2 }}
    >
      <div className="home__scroll-up" onClick={scrollToTop}>
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    </motion.div>
  );
}

export default ScrollUp