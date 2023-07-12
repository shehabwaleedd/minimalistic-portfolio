import React, { useEffect, useRef } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import MyStack from './stack/MyStack'
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next'
import { BiDownArrowAlt } from "react-icons/bi"
import cv from "../../assets/Shehab_Waleed.docx"

const AboutPage = (Props) => {

  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    const hasAboutShown = sessionStorage.getItem('hasAboutShown');

    if (!hasAboutShown) {
      runAnimation();
      sessionStorage.setItem('hasAboutShown', 'true');
    }
  }, []);


  const { t } = useTranslation()

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
        {Props.isMobile ? (
          <>
            <div className="about__pic">
              <img src={require("../../assets/profile.jpg")} alt="profile" />
            </div>
            <div className='detailed__containerr'>
              <div className='detailed__row'>
                <div className="aboutttt__container containered">
                  <div className="about__content" style={{ marginTop: Props.language === "fr" ? "12rem" : Props.language === "de" || Props.language === "en" ? "35rem" : "22rem" }}>
                    <h1 style={{ textAlign: Props.language === "ar" ? "right" : "left", paddingRight: Props.language === "ar" ? "3rem" : "0", fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "fr" ? "2rem" : "3rem" }}>{t("navbar__about")}</h1>
                    <p style={{ fontSize: Props.language === "fr" ? "0.8rem" : "0.8rem", fontFamily: Props.language === "ar" ? "Almarai" : "", textAlignLast: Props.language === "ar" ? "right" : "left" }}>
                      {t("about__description")}
                    </p>
                    <div className="cv__button" style={{ justifyContent: Props.language === "ar" ? "flex-end" : "flex-start", paddingRight: Props.language === "ar" ? "1rem" : "0rem", paddingBottom: "6rem" }}>
                      <button>
                        <BiDownArrowAlt className='scroll-down' />
                        <a href={cv} download>{t("about__resume")}</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <motion.div >
            <motion.div className="about__pic" >
              <motion.img src={require("../../assets/profile.jpg")} alt="profile" />
            </motion.div>
            <motion.div className='detailed__containerr'>
              <motion.div className='detailed__row' >
                <div className="aboutttt__container containered">
                  <div className="about__content" style={{ marginTop: Props.language === "fr" ? "10rem" : Props.language === "de" || Props.language === "en" ? "8rem" : "0" }}>
                    <h1 style={{ textAlign: Props.language === "ar" ? "right" : "left", paddingRight: Props.language === "ar" ? "3rem" : "0", fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "fr" ? "2rem" : "3rem" }}>{t("navbar__about")}</h1>
                    <p style={{ fontSize: Props.language === "fr" ? "0.7rem" : "0.7rem", fontFamily: Props.language === "ar" ? "Almarai" : "", textAlignLast: Props.language === "ar" ? "right" : "left" }}>
                      {t("about__description")}
                    </p>
                    <div className="cv__button" style={{ justifyContent: Props.language === "ar" ? "flex-end" : "flex-start", paddingRight: Props.language === "ar" ? "19rem" : "0rem" }}>
                      <button>
                        <BiDownArrowAlt className='scroll-down' />
                        <a href={cv} download>{t("about__resume")}</a>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <MyStack />
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  )
}

export default AboutPage