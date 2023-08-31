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
                            <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
                                style={{
                                    textAlignLast: language === "ar" ? "right" : "left",
                                    paddingRight: language === "ar" ? "0§rem" : "0",
                                    whiteSpace: language === "ar" ? "pre-line" : "",
                                    fontFamily: language === "ar" ? "Aref Ruqaa" : "",
                                    fontSize: language === "ar" ? "1.5rem" : "",
                                    letterSpacing: language === "ar" ? "0" : "0.2rem",
                                    width: language === "ar" ? "98vw" : ""
                                }}
                            >{t("about__brief")}</motion.h2>
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
                                <h2>“Give yourself a gift, the present moment.”</h2>
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
                <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__experience")}</motion.h2>
                <div className="about__bottom_container_mobile">
                    <div className="exp_desc_mobile">
                        <motion.h3 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>- Degree in Financial Accounting</motion.h3>
                        <motion.h3 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>- a year and a half of experience in Frontend Development.</motion.h3>
                    </div>
                </div>
                <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__skills")}</motion.h2>
                <motion.div className="skills_desc_mobile" initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>
                    <h3>HTML5/CSS/JAVASCRIPT</h3>
                    <h3>REACTJS/NEXTJS/TYPESCRIPT</h3>
                    <h3>TAILWIND/BOOTSTRAP/SASS</h3>
                    <h3>GSAP/FRAMER MOTION</h3>
                    <h3>FIREBASE/GITHUB/GITLAB</h3>
                </motion.div>
                <MyStack isMobile={isMobile} />
                <div className="kudos_desc_mobile">
                    <motion.h2 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>KUDOS</motion.h2>
                    <motion.h3 initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}>{t("about__kudos")}</motion.h3>
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