import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import cv from "../../../../assets/Shehab Waleed Resume.docx"
import MyStack from '../../stack/MyStack'
import { motion } from "framer-motion"
import "./MobileAbout.scss"
import { Link } from 'react-router-dom'
const MobileAbout = ({ language, isMobile }) => {
    const { t } = useTranslation()
    const aboutRef = useRef()
    return (
        <div className='about_mobile' ref={aboutRef}>
            <div className="about__pic_mobile">
                <img src={require("../../../../assets/profile3.JPG")} alt="profile" />
            </div>
            <div className='detailed__containerr_mobile'>
                <div className='detailed__row_mobile'>
                    <div className="aboutttt__container_mobile containered">
                        <div className="about__content_mobile" style={{ marginTop: language === "de" ? "7rem" : language === "fr" ? "0rem" : language === "ar" ? "-38rem" : "-8rem" }}>
                            <motion.h1 style={{ textAlign: language === "ar" ? "right" : "left", paddingRight: language === "ar" ? "3rem" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "fr" ? "2rem" : "3.2rem" }} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("navbar__about")}</motion.h1>
                            <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__brief")}</motion.h2>
                            <motion.div className="about__description_mobile" initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                <motion.p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }} >
                                    {t("about__description")}
                                </motion.p>
                                <motion.p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }} >
                                    {t("about__description1")}
                                </motion.p>
                            </motion.div>
                            <motion.div className="about__quote_mobile" initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                <span>One of my favourite quotes (by Marcus Aurelius):</span>
                                <h1>“Give yourself a gift, the present moment.”</h1>
                                <div className="quote__explain">
                                    <span>{t("about__quote_exp")}</span>
                                </div>
                            </motion.div>
                            <motion.div className="cv__button" style={{ justifyContent: language === "ar" ? "flex-end" : "flex-start", paddingRight: language === "ar" ? "19rem" : "0rem" }} initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                                <button>
                                    <a href={cv} download>{t("about__resume")}</a>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__bottom_mobile container">
                <motion.h1 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__experience")}</motion.h1>
                <div className="about__bottom_container_mobile">
                    <div className="exp_desc_mobile">
                        <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>- Degree in Financial Accounting</motion.h2>
                        <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>- a year and a half of experience in Frontend Development.</motion.h2>
                    </div>
                </div>
                <motion.h1 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__skills")}</motion.h1>
                <motion.div className="skills_desc_mobile" initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                    <h2>HTML5/CSS/JAVASCRIPT</h2>
                    <h2>REACTJS/NEXTJS/TYPESCRIPT</h2>
                    <h2>TAILWIND/BOOTSTRAP/SASS</h2>
                    <h2>GSAP/FRAMER MOTION</h2>
                    <h2>FIREBASE/GITHUB/GITLAB</h2>
                </motion.div>
                <MyStack isMobile={isMobile} />
                <div className="kudos_desc_mobile">
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
        </div>
    )
}

export default MobileAbout