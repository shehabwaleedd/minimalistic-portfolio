import React from 'react'
import './NavComponents.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavComponents = (Props) => {
    const { t } = useTranslation()
    return (
        <div className="nav__links-links">
            <Link
                className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/about"
                style={{
                    opacity: Props.navOpen ? "1" : "0",
                    padding: Props.navOpen ? "0.6rem" : "0",
                    transitionDelay: Props.navOpen ? "3s" : "0",
                    fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "",  letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "1rem" ,
                    bottom: Props.language === "ar" ? "1rem" : "0", 
                    width: Props.language === "ar" ? "100%" : Props.language === "fr" ? "120%" : "100%" ,
                }}
            >{t("navbar__about")}</Link>
            <Link
                className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/portfolio"
                style={{
                    opacity: Props.navOpen ? "1" : "0",
                    padding: Props.navOpen ? "0.6rem" : "0",
                    transitionDelay: Props.navOpen ? "3s" : "0",
                    fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "",  letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "",
                    bottom: Props.language === "ar" ? "1rem" : "0",
                }}
            >{t("navbar__projects")}</Link>
            <Link
                className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/contact"
                style={{
                    opacity: Props.navOpen ? "1" : "0",
                    padding: Props.navOpen ? "0.6rem" : "0",
                    transitionDelay: Props.navOpen ? "3s" : "0",
                    fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "",  letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "",
                    bottom: Props.language === "ar" ? "1rem" : "0",
                }}
            >{t("navbar__contact")}</Link>

        </div>
    )
}

export default NavComponents