import React, { useEffect, useRef } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import Model from './Model'
import MyStack from './stack/MyStack'
import { gsap} from "gsap";


const AboutPage = (Props) => {

  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    runAnimation();
  }, []);



  const runAnimation = () => {
    const tl = gsap.timeline();
    tl.to(screen, {
      duration: 0.5,
      height: "100%",
      top: "0%",
      ease: "power3.inOut",
    });
    tl.to(screen, {
      duration: 0.5,
      top: "100%",
      ease: "power3.inOut",
      delay: 0.1,
    });
    tl.set(screen, { top: "-100%" });
    gsap.to(body, {
      opacity: 1,
      duration: 0.3,
      pointerEvents: "auto",
      ease: "power4.inOut",
      delay: 1,
    });
  };

  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
      <motion.div>
            <div className="load-container">
              <div className="load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <motion.section ref={(el) => (body = el)} className="about section" id='about' >
              <Model isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} isAbout={Props.isAbout} setIsAbout={Props.setIsAbout} imageDetails={imageDetails} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
              <MyStack isMobile={Props.isMobile} setIsMobile={Props.setIsMobile}/>
            </motion.section>
      </motion.div>
  )
}

export default AboutPage