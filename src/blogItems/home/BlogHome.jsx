import React from "react"
import About from "../../components/about/About"
import Home from "../../components/home/Home"
import Nav from "../../components/nav/Nav"
import Qualifications from "../../components/qualifications/Qualifications"
import Skills from "../../components/skills/Skills"
import Testimonials from "../../components/testimonials/Testimonials"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"

export const BlogHome = () => {
  return (
    <>  
      <Home />
      <Nav />
      <About />
      <Skills />
      <Qualifications />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
