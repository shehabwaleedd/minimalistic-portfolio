import React, { useState } from "react"
import About from "../../components/about/About"
import Home from "../../components/home/Home"
import Nav from "../../components/nav/Nav"
import Qualifications from "../../components/qualifications/Qualifications"
import Skills from "../../components/skills/Skills"
import Testimonials from "../../components/testimonials/Testimonials"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import { motion } from "framer-motion"
import ParallaxTextAnimation from "../../components/parralexTextAnimation/ParralexTextAnimation.tsx"
import Services from "../../components/services/Services"
import AnimatedLayout from "../../components/services/animatedLayout/AnimatedLayout"
import Faq from "../../components/faq/Faq"


export const BlogHome = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const [animationComplete, setAnimationComplete] = useState(false);
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div>
        <motion.div>
          <Home imageDetails={imageDetails} />
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0, transition: { delay: 1, ...transition } }} exit={{ opacity: 1 }} transition={transition}>
            {/* <Nav />
            <ParallaxTextAnimation />
            <AnimatedLayout />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer /> */}
          </motion.div>
        </motion.div>
    </div>
  )
}


