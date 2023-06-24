import React from 'react'
import "./Footer.scss"
import { useTranslation } from 'react-i18next'


const Footer = (Props) => {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      {Props.isMobile ? (
        <div className="footer__container container">
          <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "1.7rem" }} className="footer__title">{t("my__name")} {t("my__name-last")}</h1>
          <div className="footer__social">
            <div className="footer__info" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", gap: Props.language === "ar" ? "1rem" : "0.2rem", }}>
              <p style={{fontSize: "0.8rem" }}><strong id="mono">{t("footer__info-address")}</strong>{t("footer__info-street")}, {t("footer__info-egypt")}</p>
            </div>
            <div className="footer__info">
              <p><strong id="mono">{t("footer__info-freelancing")}</strong>   {t("footer__info_hours")} {t("footer__info-mon-to-sat")}</p>
            </div>
            <div className="footer__info">
              <p><strong id="mono">{t("footer__info-phone")}</strong>{t("footer__info_number")}</p>
            </div>
            <div className="footer__socials">
              <a href="https://www.instagram.com/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i className="uil uil-instagram"></i></a>
              <a href="https://facebook/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-facebook"></i></a>
              <a href="https://twitter.com/waleedjr_" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-twitter"></i></a>
              <a href="https://www.linkedin.com/in/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
              <a href="https://www.youtube.com/channel/UCP2o3R5yqenBaZfsQjB-HJw" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-youtube"></i></a>
              <a href="https://github.com/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-github"></i></a>

            </div>
          </div>
          <div className="footer__copyright">
            <small>&copy; Shehab Waleed. {t("footer__credits")}</small>
          </div>
        </div>
      ) : (
        <div className="footer__container container">
          <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "4rem" : "1.8rem" }} className="footer__title">{t("my__name")} {t("my__name-last")}</h1>
          <div className="footer__social">
            <div className="footer__info" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", gap: Props.language === "ar" ? "1rem" : "" }}>
              <p><strong id="mono">{t("footer__info-address")}</strong>{t("footer__info-street")}, {t("footer__info-egypt")}</p>
            </div>
            <div className="footer__info">
              <p><strong id="mono">{t("footer__info-freelancing")}</strong>   {t("footer__info_hours")} {t("footer__info-mon-to-sat")}</p>
            </div>
            <div className="footer__info">
              <p><strong id="mono">{t("footer__info-phone")}</strong>{t("footer__info_number")}</p>
            </div>
            <div className="footer__socials">
              <a href="https://www.instagram.com/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i className="uil uil-instagram"></i></a>
              <a href="https://facebook/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-facebook"></i></a>
              <a href="https://twitter.com/waleedjr_" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-twitter"></i></a>
              <a href="https://www.linkedin.com/in/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
              <a href="https://www.youtube.com/channel/UCP2o3R5yqenBaZfsQjB-HJw" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-youtube"></i></a>
              <a href="https://github.com/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><i className="bx bxl-github"></i></a>

            </div>
          </div>
          <div className="footer__copyright">
            <small>&copy; Shehab Waleed. {t("footer__credits")}</small>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer