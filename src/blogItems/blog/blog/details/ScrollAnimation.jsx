import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion"
import "./Details.css"

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div style={{ scaleX}} className="progressive__bar">

    </motion.div>
  )
}

export default ScrollAnimation


// background: "#6f988a"