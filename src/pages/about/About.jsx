import React, { useEffect, useRef } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import { gsap } from "gsap";
import MobileAbout from './aboutResponsive/mobileAbout/MobileAbout';
import DesktopAbout from './aboutResponsive/desktopAbout/DesktopAbout';

const AboutPage = ({ isMobile, language}) => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    const hasAboutShown = sessionStorage.getItem('hasAboutShown');
    if (!hasAboutShown) {
      runAnimation();
      sessionStorage.setItem('hasAboutShown', 'true');
    }
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
  return (
    <motion.div>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <motion.section ref={(el) => (body = el)} className="about section" id='about' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7, duration: 2, ease: "easeInOut" }}}  exit={{ opacity: 0, transition: { delay: 0.4, duration: 1, ease: "easeInOut" }}}>
        {isMobile ? (
          <MobileAbout language={language} />
        ) : (
          <DesktopAbout language={language} />
        )}
      </motion.section>
    </motion.div>
  )
}

export default AboutPage