
import React, { useEffect, useRef } from 'react'
import "./About.css"

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Experience from './journey/Experience'
import Education from './journey/Education'
import Model from './Model'
import MyStack from './stack/MyStack'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

const AboutPage = () => {


  const { t } = useTranslation()
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();

    tl.to(screen, {
      duration: 0.5,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 0.5,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.1,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, .3, {css: {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut
    }}).delay(1);
    return () => {
      TweenMax.to(body, 1, {css: {
        opacity: "0",
        pointerEvents: 'none'
      }});
  }
  });

  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <motion.div data-barba="container" initial={{ x: "100vw" }} animate={{ x: "0%" }} transition={{ duration: 0.65, ease: "easeOut" }} exit={{ opacity: 0, scaleX: "100vh" }} >
        <section ref={(el) => (body = el)} className="about section" id='about' >
          <Model  imageDetails={imageDetails}/>
          <Experience />
          <MyStack />
          <Education />
        </section>
      </motion.div>
    </React.Fragment>
  )
}

export default AboutPage