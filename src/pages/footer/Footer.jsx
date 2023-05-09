import React from 'react'
import "./Footer.css"
import { useTranslation } from 'react-i18next'


const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{t("my__name")} {t("my__name-last")}</h1>
        <div className="footer__social">
            <p><strong id="mono">{t("footer__info-address")}:</strong> 2 Abdulrahman Al Adawi - Imbaba, {t("footer__info-egypt")}</p>
            <p><strong id="mono">{t("footer__info-freelancing")}:</strong>   08:00 - 12:00. {t("footer__info-mon-to-sat")}</p>
            <p><strong id="mono">{t("footer__info-phone")}:</strong>   +201023288200</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://facebook/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><i class="bx bxl-facebook"></i></a>
            <a href="https://twitter.com/waleedjr_" className="footer__social-link" target='_blank' rel="noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.linkedin.com/in/shehabwaleedd/" className="footer__social-link" target='_blank' rel="noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCP2o3R5yqenBaZfsQjB-HJw" className="footer__social-link" target='_blank' rel="noreferrer"><i class="bx bxl-youtube"></i></a>
            <a href="https://github.com/shehabwaleedd" className="footer__social-link" target='_blank' rel="noreferrer"><i class="bx bxl-github"></i></a>
            
          </div>
        </div>
        <div className="footer__copyright">
          <small>&copy; Shehab Waleed. {t("footer__credits")}</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer