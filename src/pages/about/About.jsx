import React, { useEffect, useRef } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import Model from './Model'
import MyStack from './stack/MyStack'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";


const AboutPage = () => {

  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    runAnimation();
  }, []);


  
  const runAnimation = () => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 0.5,
      height: "100%",
      top: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 0.5,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.1,
    });
    tl.set(screen, { top: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(1);
  };

  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <React.Fragment className="smooth-scroll-wrapper">
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <motion.div>
        <section ref={(el) => (body = el)} className="about section" id='about' >
          <Model  imageDetails={imageDetails}/>
          <MyStack />
        </section>

      </motion.div>
    </React.Fragment>
  )
}

export default AboutPage