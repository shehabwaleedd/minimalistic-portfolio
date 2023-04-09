import React from 'react'
import { motion, useScroll } from "framer-motion"

const ScrollAnimation = () => {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress, left: 0, right: 0, top: 0, height: 10, position: "fixed", transformOrigin: "0%", background: "#6f988a"}} >

    </motion.div>
  )
}

export default ScrollAnimation