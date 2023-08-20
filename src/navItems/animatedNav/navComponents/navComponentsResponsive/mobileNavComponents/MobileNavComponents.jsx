import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const MobileNavComponents = ({ navOpen, language  }) => {
    const { t } = useTranslation()
    return (
        <motion.div className={`${navOpen ? "nav__links-links spin" : "nav__links-links"}`} style={{ width: navOpen ? "100vw" : "", position: navOpen ? "absolute" : "absolute", left: navOpen ? "6rem" : "-30rem", top: navOpen ? language === "ar" ? "4rem" : "4rem" : "0", display: "flex", opacity: navOpen ? "1" : "0", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start"}} initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
            <div className="nav__links_container"
                style={{ display: "flex", flexDirection: "column", gap: "1rem", alignContent: "flex-start", alignItems: "flex-start", justifyContent: "center", height: "60vh", position: "relative", left: language === "ar" ? "-8rem" : "-3.1rem", textAlign: "left", width: "30vw"}}>
                <Link className={navOpen ? "nav__link spin" : "nav__link"} to="/" style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.1rem" : "0", transitionDelay: navOpen ? "3s" : "3s", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2.5rem" : "2.5rem", textAlign: "left"}}>
                    {t("navbar__home")}
                </Link>
                <Link className={navOpen ? "nav__link spin" : "nav__link"} to="/about" style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.1rem" : "0", transitionDelay: navOpen ? "3s" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2.5rem" : "2.5rem" }}>
                    {t("navbar__about")}
                </Link>
                <Link className={navOpen ? "nav__link spin" : "nav__link"} to="/projects"
                    style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.1rem" : "0", transitionDelay: navOpen ? "3s" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2.5rem" : "2.5rem", }}>
                    {t("navbar__projects")}
                </Link>
                <Link className={navOpen ? "nav__link spin" : "nav__link"} to="/contact"
                    style={{ opacity: navOpen ? "1" : "0", padding: navOpen ? "0.1rem" : "0", transitionDelay: navOpen ? "3s" : "0", fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.2rem", fontSize: language === "ar" ? "2.5rem" : "2.5rem", }}>
                    {t("navbar__contact")}
                </Link>
                <div className="nav-footer"
                    style={{ position: "absolute", bottom: language === "ar" ? "-2rem" : "-1rem", }}>
                    <div className="navbar-social-media">
                        <ul>
                            <li>
                                <Link to="https://www.instagram.com/shehabwaleedd/" target="__blank" rel="noreferrer">
                                    <span>Instagram</span>
                                    <FiArrowUpRight />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/in/shehabwaleedd/" target="__blank" rel="noreferrer">
                                    <span>LinkedIn</span>
                                    <FiArrowUpRight />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/in/shehabwaleedd/" target="__blank" rel="noreferrer">
                                    <span>Twitter</span>
                                    <FiArrowUpRight />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__location"
                        style={{ right: language === "ar" ? "0.2rem" : "0", bottom: language === "ar" ? "-7rem" : "-5rem", width: language === "ar" ? "40vw" : "100%", }}>
                        <h2>{t("contact__location-cairo")} {t("footer__info-egypt")}</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MobileNavComponents