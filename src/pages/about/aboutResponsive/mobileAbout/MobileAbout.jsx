import React from 'react'
import { useTranslation } from 'react-i18next'
import cv from "../../../../assets/Shehab Waleed Resume.docx"
import MyStack from '../../stack/MyStack'
import { motion } from "framer-motion"
import "./MobileAbout.scss"

const MobileAbout = ({ language, isMobile }) => {
    const { t } = useTranslation()
    return (
        <div className='about_mobile'>
            <div className="about__pic_mobile">
                <img src={require("../../../../assets/profile3.JPG")} alt="profile" />
            </div>
            <div className='detailed__containerr_mobile'>
                <div className='detailed__row_mobile'>
                    <div className="aboutttt__container_mobile containered">
                        <div className="about__content_mobile" style={{ marginTop: language === "fr" ? "12rem" : language === "de" || language === "en" ? window.innerWidth <= 416 ? "34rem" : "50rem" : "22rem" }}>
                            <h1 style={{ textAlign: language === "ar" ? "right" : "left", paddingRight: language === "ar" ? "3rem" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "fr" ? "2rem" : "3.2rem" }}>{t("navbar__about")}</h1>
                            <h2>I'm Shehab. A web developer, desginer and problem solver.</h2>
                            <div className="about__description_mobile">
                                <p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }}>
                                    {t("about__description")}
                                </p>
                                <p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }}>
                                    {t("about__description1")}
                                </p>
                            </div>
                            <div className="about__quote_mobile">
                                <span>One of my favourite quotes (by Marcus Aurelius):</span>
                                <h1>“Give yourself a gift, the present moment.”</h1>
                                <div className="quote__explain">
                                    <span>{t("about__quote_exp")}</span>
                                </div>
                            </div>
                            <div className="cv__button" style={{ justifyContent: language === "ar" ? "flex-end" : "flex-start", paddingRight: language === "ar" ? "19rem" : "0rem" }}>
                                <button>
                                    <a href={cv} download>{t("about__resume")}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__bottom_mobile container">
                <h1>{t("about__experience")}</h1>
                <div className="about__bottom_container_mobile">
                    <div className="exp_desc_mobile">
                        <h2>- Degree in Financial Accounting</h2>
                        <h2>- a year and a half of experience in Frontend Development.</h2>
                    </div>
                </div>
                <h1>{t("about__skills")}</h1>
                <div className="skills_desc_mobile">
                    <h2>HTML5/CSS/JAVASCRIPT</h2>
                    <h2>REACTJS/NEXTJS/TYPESCRIPT</h2>
                    <h2>TAILWIND/BOOTSTRAP/SASS</h2>
                    <h2>GSAP/FRAMER MOTION</h2>
                    <h2>FIREBASE/GITHUB/GITLAB</h2>
                </div>
                <MyStack isMobile={isMobile}/>
                <div className="kudos_desc_mobile">
                    <h1>KUDOS</h1>
                    <h2>{t("about__kudos")}</h2>
                </div>
                <motion.img src={require("../../../../assets/profile2.JPG")} alt="profile" />
            </div>
        </div>
    )
}

export default MobileAbout