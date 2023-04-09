import React from "react"
import About from "../../components/about/About"
import Home from "../../components/home/Home"
import Nav from "../../components/nav/Nav"
import Qualifications from "../../components/qualifications/Qualifications"
import Skills from "../../components/skills/Skills"
import Testimonials from "../../components/testimonials/Testimonials"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import { motion } from "framer-motion"

export const BlogHome = () => {
  return (
    <motion.div initial={{ x: "-100vw", opacity: 1}} animate={{ x: "0%" }} transition={{ duration: 0.4, ease: "easeOut" }} exit={{ opacity: 0 , scaleX: "-100vh"}}>  
      <Home />
      <Nav />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  )
}
