import React, { useRef } from 'react'
import "./TabletAbout.scss"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import MyStack from '../../stack/MyStack'
import cv from "../../../../assets/Shehab Waleed Resume.docx"
import { Link } from 'react-router-dom'

const TabletAbout = ({ language }) => {
    const { t } = useTranslation();
    const aboutRef = useRef()
    return (
        <motion.div className='about_tablet' ref={aboutRef}>
            <motion.div className="about__pic_tablet" >
                <motion.img src={require("../../../../assets/profile3.JPG")} alt="profile" />
            </motion.div>
            <motion.div className='detailed__containerr_tablet'>
                <motion.div className='detailed__row_tablet' >
                    <div className="aboutttt__container_tablet container">
                        <div className="about__content_tablet" >
                            <motion.h1 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} style={{ textAlign: language === "ar" ? "right" : "left", paddingRight: language === "ar" ? "3rem" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "Posterama", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "fr" ? "2rem" : "5.2rem" }}>{t("navbar__about")}</motion.h1>
                            <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>I'm Shehab. A web developer, desginer and problem solver.</motion.h2>
                            <div className="about__description_tablet">
                                <motion.p initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }}>
                                    {t("about__description")}
                                </motion.p>
                                <motion.p initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }}>
                                    {t("about__description1")}
                                </motion.p>
                            </div>
                            <div className="about__quote_tablet">
                                <motion.span initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>One of my favourite quotes (by Marcus Aurelius):</motion.span>
                                <motion.h1 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>“Give yourself a gift, the present moment.”</motion.h1>
                                <motion.div className="quote__explain" initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                    <span>{t("about__quote_exp")}</span>
                                </motion.div>
                            </div>
                            <div className="cv__button" style={{ justifyContent: language === "ar" ? "flex-end" : "flex-start", paddingRight: language === "ar" ? "19rem" : "0rem" }}>
                                <motion.button initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                    <a href={cv} download>{t("about__resume")}</a>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <MyStack />
            <div className="about__bottom_tablet container">
                <motion.h1 initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__experience")}</motion.h1>
                <div className="about__bottom_container_tablet">
                    <div className="exp_desc_tablet">
                        <motion.h2 initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>- Degree in Financial Accounting</motion.h2>
                        <motion.h2 initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>- a year and a half of experience in Frontend Development.</motion.h2>
                    </div>
                </div>
                <motion.h1 initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__skills")}</motion.h1>
                <motion.div className="skills_desc_tablet" initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                    <h2>HTML5/CSS/JAVASCRIPT</h2>
                    <h2>REACTJS/NEXTJS/TYPESCRIPT</h2>
                    <h2>TAILWIND/BOOTSTRAP/SASS</h2>
                    <h2>GSAP/FRAMER MOTION</h2>
                    <h2>FIREBASE/GITHUB/GITLAB</h2>
                </motion.div>
                <div className="kudos_desc_tablet">
                    <motion.h1 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>KUDOS</motion.h1>
                    <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__kudos")}</motion.h2>
                    <Link to="/contact">
                        <motion.button initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                            Contact Me
                        </motion.button>
                    </Link>
                </div>
                <motion.img src={require("../../../../assets/profile2.JPG")} alt="profile" initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} />
            </div>
        </motion.div>
    )
}

export default TabletAbout