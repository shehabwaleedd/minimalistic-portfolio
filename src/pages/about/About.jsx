import React, { useEffect, useRef } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import MobileAbout from './aboutResponsive/mobileAbout/MobileAbout';
import DesktopAbout from './aboutResponsive/desktopAbout/DesktopAbout';
import RunAnimations from '../../animation/RunAnimations';

const AboutPage = ({ isMobile, language}) => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    const hasAboutShown = sessionStorage.getItem('hasAboutShown');
    if (!hasAboutShown) {
      RunAnimations(screen, body);
      sessionStorage.setItem('hasAboutShown', 'true');
    }
  }, []);
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