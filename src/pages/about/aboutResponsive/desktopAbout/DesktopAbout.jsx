import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BiDownArrowAlt } from 'react-icons/bi'
import MyStack from '../../stack/MyStack'
import cv from "../../../../assets/Shehab Waleed Resume.docx"


const DesktopAbout = ({ language }) => {
    const { t } = useTranslation()
    return (
        <motion.div className='about'>
                <motion.div className="about__pic" >
                    <motion.img src={require("../../../../assets/profile3.JPG")} alt="profile" />
                </motion.div>
                <motion.div className='detailed__containerr'>
                    <motion.div className='detailed__row' >
                        <div className="aboutttt__container container">
                            <div className="about__content" style={{ marginTop: language === "fr" ? "10rem" : language === "de" || language === "en" ? "30rem" : "20rem" }}>
                                <h1 style={{ textAlign: language === "ar" ? "right" : "left", paddingRight: language === "ar" ? "3rem" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "fr" ? "2rem" : "8.2rem" }}>{t("navbar__about")}</h1>
                                <h2>
                                I'm Shehab. A web developer, desginer and problem solver.
                                </h2>
                                <p style={{ fontSize: language === "fr" ? "1.1rem" : "1.1rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }}>
                                    {t("about__description")}
                                </p>
                                <div className="cv__button" style={{ justifyContent: language === "ar" ? "flex-end" : "flex-start", paddingRight: language === "ar" ? "19rem" : "0rem" }}>
                                    <button>
                                        <BiDownArrowAlt className='scroll-down' />
                                        <a href={cv} download>{t("about__resume")}</a>
                                    </button>
                                </div>
            <MyStack />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
        </motion.div>
    )
}

export default DesktopAbout