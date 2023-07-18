import React from 'react'
import "./Footer.scss"
import { useTranslation } from 'react-i18next'
import {BiLogoFacebookCircle} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"
import {BiLogoGithub} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {motion} from "framer-motion"


const Footer = (Props) => {
  const { t } = useTranslation()
  return (
    <motion.footer className="footer" initial={{ opacity: 0, y: 100 ,transition: { delay: 0.2, duration: 0.5, ease: [0.42, 0, 0.58, 1]}}} animate={{ opacity: 1, y: 0 ,transition: { delay: 0.2, duration: 0.5, ease: [0.42, 0, 0.58, 1]}}} exit={{ opacity: 0, y: -100 , transition: { delay: 0.3, staggerChildren: 1.5, duration: 0.7, ease: [0.42, 0, 0.58, 1]  }}}>
      {Props.isMobile ? (
        <div className="footer__container container">
          <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "1.7rem" }} className="footer__title">{t("my__name")} {t("my__name-last")}</h1>
          <div className="footer__social">
            <div className="footer__info" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", gap: Props.language === "ar" ? "1rem" : "0.2rem", }}>
              <p style={{fontSize: "0.7rem" }}><strong id="mono" style={{fontSize: "0.7rem" }}>{t("footer__info-address")}</strong>{t("footer__info-street")}, {t("footer__info-egypt")}</p>
            </div>
            <div className="footer__info">
              <p style={{fontSize: "0.7rem" }}><strong id="mono" style={{fontSize: "0.7rem" }}>{t("footer__info-freelancing")}</strong>   {t("footer__info_hours")} {t("footer__info-mon-to-sat")}</p>
            </div>
            <div className="footer__info">
              <p style={{fontSize: "0.7rem" }}><strong id="mono" style={{fontSize: "0.7rem" }}>{t("footer__info-phone")}</strong>{t("footer__info_number")}</p>
            </div>
            <div className="footer__socials">
              <a href="https://www.instagram.com/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i className="uil uil-instagram"></i></a>
              <a href="https://facebook/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoFacebookCircle /></a>
              <a href="https://twitter.com/waleedjr_" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoTwitter /></a>
              <a href="https://www.linkedin.com/in/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoLinkedin /></a>
              <a href="https://github.com/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoGithub /></a>

            </div>
          </div>
          <div className="footer__copyright">
            <small>&copy; Shehab Waleed. {t("footer__credits")}</small>
          </div>
        </div>
      ) : (
        <motion.div className="footer__container container"  >
          <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "1.8rem" }} className="footer__title">{t("my__name")} {t("my__name-last")}</h1>
          <div className="footer__social">
            <div className="footer__info" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", gap: Props.language === "ar" ? "1rem" : "" }}>
              <p><strong id="mono">{t("footer__info-address")}</strong>{t("footer__info-street")}, {t("footer__info-egypt")}</p>
            </div>
            <div className="footer__info">
              <p><strong id="mono">{t("footer__info-freelancing")}</strong> {t("footer__info-mon-to-sat")} {t("footer__info_hours")} </p>
            </div>
            <div className="footer__info">
              <p><strong id="mono">{t("footer__info-phone")}</strong>{t("footer__info_number")}</p>
            </div>
            <div className="footer__socials">
              <a href="https://www.instagram.com/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoInstagram /></a>
              <a href="https://facebook/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoFacebookCircle/></a>
              <a href="https://twitter.com/waleedjr_" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoTwitter /></a>
              <a href="https://www.linkedin.com/in/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoLinkedin /></a>
              <a href="https://github.com/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><BiLogoGithub /></a>

            </div>
          </div>
          <div className="footer__copyright">
            <small>&copy; Shehab Waleed. {t("footer__credits")}</small>
          </div>
        </motion.div>
      )}
    </motion.footer>
  )
}

export default Footer