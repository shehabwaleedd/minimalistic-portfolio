import React from 'react'
import './NavComponents.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const NavComponents = (Props) => {
    const { t } = useTranslation()
    return (
        <>
            {Props.isMobile ? (
                <motion.div className={`${Props.navOpen ? "nav__links-links spin" : "nav__links-links"}`}
                    style={{
                        width: Props.navOpen ? "100vw" : "",
                        position: Props.navOpen ? "absolute" : "absolute",
                        left: Props.navOpen ? "-3rem" : "-30rem",
                        top: Props.navOpen ? Props.language === "ar" ? "1rem" : "1rem" : "0",
                        display: "flex",
                        opacity: Props.navOpen ? "1" : "0",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        zIndex: "99",
                    }}
                    initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                >
                    <div className="nav__links_container"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignContent: "flex-start",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            height: "60vh",
                            position: "relative",
                            left: Props.language === "ar" ? "-8rem" : "-3.1rem",
                        }}>
                        <Link
                            className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/"
                            style={{
                                opacity: Props.navOpen ? "1" : "0",
                                padding: Props.navOpen ? "0.1rem" : "0",
                                transitionDelay: Props.navOpen ? "3s" : "3s",
                                fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "2.5rem",

                            }}
                        >{t("navbar__home")}</Link>
                        <Link
                            className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/about"
                            style={{
                                opacity: Props.navOpen ? "1" : "0",
                                padding: Props.navOpen ? "0.1rem" : "0",
                                transitionDelay: Props.navOpen ? "3s" : "0",
                                fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "2.5rem",

                            }}
                        >{t("navbar__about")}</Link>
                        <Link
                            className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/projects"
                            style={{
                                opacity: Props.navOpen ? "1" : "0",
                                padding: Props.navOpen ? "0.1rem" : "0",
                                transitionDelay: Props.navOpen ? "3s" : "0",
                                fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "2.5rem",
                            }}
                        >{t("navbar__projects")}</Link>
                        <Link
                            className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/contact"
                            style={{
                                opacity: Props.navOpen ? "1" : "0",
                                padding: Props.navOpen ? "0.1rem" : "0",
                                transitionDelay: Props.navOpen ? "3s" : "0",
                                fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2.5rem" : "2.5rem",
                            }}
                        >{t("navbar__contact")}</Link>
                        <div className="nav-footer"
                            style={{ position: "absolute", bottom: Props.language === "ar" ? "-2rem" : "-1rem",}}>
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
                                style={{right: Props.language === "ar" ? "0.2rem" : "0",bottom: Props.language === "ar" ? "-7rem" : "-5rem",width: Props.language === "ar" ? "40vw" : "100%",}}>
                                <h2>{t("contact__location-cairo")} {t("footer__info-egypt")}</h2>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <>
                    <Link
                        className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/about"
                        style={{
                            opacity: Props.navOpen ? "1" : "0",
                            padding: Props.navOpen ? "0.6rem" : "0",
                            transitionDelay: Props.navOpen ? "3s" : "0",
                            fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "1rem",
                            bottom: Props.language === "ar" ? "1rem" : "0",
                            width: Props.language === "ar" ? "100%" : Props.language === "fr" ? "140%" : "100%",
                        }}
                    >{t("navbar__about")}</Link>
                    <Link
                        className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/projects"
                        style={{
                            opacity: Props.navOpen ? "1" : "0",
                            padding: Props.navOpen ? "0.6rem" : "0",
                            transitionDelay: Props.navOpen ? "3s" : "0",
                            fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "",
                            bottom: Props.language === "ar" ? "1rem" : "0",
                        }}
                    >{t("navbar__projects")}</Link>
                    <Link
                        className={Props.navOpen ? "nav__link spin" : "nav__link"} to="/contact"
                        style={{
                            opacity: Props.navOpen ? "1" : "0",
                            padding: Props.navOpen ? "0.6rem" : "0",
                            transitionDelay: Props.navOpen ? "3s" : "0",
                            fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.2rem", fontSize: Props.language === "ar" ? "2rem" : "",
                            bottom: Props.language === "ar" ? "1rem" : "0",
                        }}
                    >{t("navbar__contact")}</Link>
                </>
            )}
        </>

    )
}

export default NavComponents