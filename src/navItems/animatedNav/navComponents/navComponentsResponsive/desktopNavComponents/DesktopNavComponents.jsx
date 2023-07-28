import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const DesktopNavComponents = ({ navOpen, language }) => {
    const { t } = useTranslation()
    return (
        <>
            <Link
                className={navOpen ? "nav__link spin" : "nav__link"} to="/about"
                style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.6rem" : "0", transitionDelay: navOpen ? "3s" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2rem" : "1rem", bottom: language === "ar" ? "1rem" : "0", width: language === "ar" ? "100%" : language === "fr" ? "140%" : "100%", }}>
                {t("navbar__about")}
            </Link>
            <Link
                className={navOpen ? "nav__link spin" : "nav__link"} to="/projects"
                style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.6rem" : "0", transitionDelay: navOpen ? "3s" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2rem" : "", bottom: language === "ar" ? "1rem" : "0", }}>
                {t("navbar__projects")}
            </Link>
            <Link
                className={navOpen ? "nav__link spin" : "nav__link"} to="/contact"
                style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.6rem" : "0", transitionDelay: navOpen ? "3s" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2rem" : "", bottom: language === "ar" ? "1rem" : "0", }}>
                {t("navbar__contact")}
            </Link>
        </>
    )
}

export default DesktopNavComponents