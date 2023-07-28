import React from 'react'
import { useTranslation } from 'react-i18next'
import {BiDownArrowAlt} from "react-icons/bi"
import cv from "../../../../assets/Shehab Waleed Resume.docx"

const MobileAbout = ({ language }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="about__pic">
                <img src={require("../../../../assets/profile.jpg")} alt="profile" />
            </div>
            <div className='detailed__containerr'>
                <div className='detailed__row'>
                    <div className="aboutttt__container containered">
                        <div className="about__content" style={{ marginTop: language === "fr" ? "12rem" : language === "de" || language === "en" ? window.innerWidth <= 416 ? "34rem" : "50rem" : "22rem" }}>
                            <h1 style={{ textAlign: language === "ar" ? "right" : "left", paddingRight: language === "ar" ? "3rem" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "fr" ? "2rem" : "3rem" }}>{t("navbar__about")}</h1>
                            <p style={{ fontSize: language === "fr" ? "0.8rem" : "0.8rem", fontFamily: language === "ar" ? "Almarai" : "", textAlignLast: language === "ar" ? "right" : "left" }}>
                                {t("about__description")}
                            </p>
                            <div className="cv__button" style={{ justifyContent: language === "ar" ? "flex-end" : "flex-start", paddingRight: language === "ar" ? "1rem" : "0rem", paddingBottom: "6rem" }}>
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
    )
}

export default MobileAbout