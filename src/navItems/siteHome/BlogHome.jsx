import React from "react"
import Home from "../../components/home/Home"
import { motion } from "framer-motion"
import ParallaxTextAnimation from "../../components/parralexTextAnimation/ParralexTextAnimation.tsx"
import Testimonials from "../../components/testimonials/Testimonials"
export const BlogHome = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <div>
          <motion.div>
            <Home imageDetails={imageDetails} />
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0, transition: { delay: 1, ...transition } }} exit={{ opacity: 1 }} transition={transition}>
              <ParallaxTextAnimation />
              <Testimonials />
            </motion.div>
          </motion.div>
    </div >
  )
}


