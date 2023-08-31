import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import MyStack from '../../stack/MyStack'
import cv from "../../../../assets/Shehab Waleed Resume.docx"
import "./DesktopAbout.scss"
import { Link } from 'react-router-dom'

const DesktopAbout = ({ language }) => {

    const aboutRef = useRef()
    const { t } = useTranslation()
    return (
        <motion.div className='about_desktop' ref={aboutRef}>
            <motion.div className="about__pic" >
                <motion.img src={require("../../../../assets/profile3.JPG")} 
                alt="Personal Image Of Shehab Waleed"
                title='Personal Image Of Shehab Waleed'
                loading='eager'
                width="100%" height="100%"/>
            </motion.div>
            <motion.div className='detailed__containerr' >
                <motion.div className='detailed__row' >
                    <div className="aboutttt__container container">
                        <div className="about__content" style={{marginTop: language === "de" ? "10rem" : language === "fr" ? "7rem" : language === "ar" ? "-15rem" : ""}}>
                            <motion.h1 style={{ textAlign: language === "ar" ? "right" : "left", paddingRight: language === "ar" ? "3rem" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "fr" ? "8.2rem" : "8.2rem" }} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("navbar__about")}</motion.h1>
                            <motion.h2 style={{ textAlign: language === "ar" ? "right" : "left", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "3.6rem" : ""}} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__brief")}</motion.h2>
                            <div className="about__description">
                                <motion.p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                    {t("about__description")}
                                </motion.p>
                                <motion.p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                    {t("about__description1")}
                                </motion.p>
                            </div>
                            <div className="about__quote">
                                <motion.span initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>One of my favourite quotes (by Marcus Aurelius):</motion.span>
                                <motion.h3 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>“Give yourself a gift, the present moment.”</motion.h3>
                                <motion.div className="quote__explain" initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                    <span>{t("about__quote_exp")}</span>
                                </motion.div>
                            </div>
                            <div className="cv__button" style={{ justifyContent: language === "ar" ? "flex-end" : "flex-start", paddingRight: language === "ar" ? "19rem" : "0rem" }}>
                                <button>
                                    <a href={cv} download>{t("about__resume")}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <div className="about__bottom container">
                <motion.h2 initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__experience")}</motion.h2>
                <motion.div className="about__bottom_container" initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                    <div className="exp_desc">
                        <h3>- Degree in Financial Accounting</h3>
                        <h3>- a year and a half of experience in Frontend Development.</h3>
                    </div>
                </motion.div>
                <motion.h2 initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__skills")}</motion.h2>
                <motion.div className="skills_desc" initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                    <h3>HTML5/CSS/JAVASCRIPT</h3>
                    <h3>REACTJS/NEXTJS/TYPESCRIPT</h3>
                    <h3>TAILWIND/BOOTSTRAP/SASS</h3>
                    <h3>GSAP/FRAMER MOTION</h3>
                    <h3>FIREBASE/GITHUB/GITLAB</h3>
                </motion.div>
                <MyStack />
                <div className="kudos_desc">
                    <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>KUDOS</motion.h2>
                    <motion.h3 style={{letterSpacing: language === "ar" ? "0rem" : "0.2rem",  fontFamily: language === "ar" ? "Almarai" : "", fontSize: language === "ar" ? "1.1rem" : ""}} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__kudos")}</motion.h3>
                    <Link to="/contact">
                        <motion.button initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                            Contact Me
                        </motion.button>
                    </Link>
                    <motion.img className='bottom_img' width="100%"  title='Shehab Waleed In A Public Grocery Shop' height="100%" loading='eager' src={require("../../../../assets/profile2.JPG")} alt="Shehab Waleed In A Public Grocery Shop" initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} />
                </div>
            </div>
        </motion.div>
    )
}

export default DesktopAbout