import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavComponents from '../../navComponents/NavComponents';
import DropDownMenu from "../../dropDownMenu/DropDownMenu";
import "./MobileNavbar.scss"
const MobileNavbar = ({ isMobile, setIsMobile, isAbout, setIsAbout, setOpen, navOpen, setNavOpen, language, isMenuVisible, setLanguage, languageExpanded, setLanguageExpanded, setMenuVisible, shouldReload, setShouldReload }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="navbar__container_mobile" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", direction: language === "ar" ? "rtl" : "ltr", padding: navOpen ? "3.2rem" : "3.2rem" }}>
                <Link to="/">
                    <h2 className={navOpen ? "logo_mobile spin" : "logo_mobile"} style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "2rem" : "1rem" }}>{t("my__name")}</h2>
                </Link>
                <div className="side__navbar_mobile" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", gap: language === "ar" ? "1.5rem" : "0.1rem" }}>
                    <NavComponents isMobile={isMobile} navOpen={navOpen} language={language} />
                    <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ? "hamBox_mobile hamBoxOpen" : "hamBox_mobile"}>
                            <span className={navOpen ? "lineTop_mobile spin" : "lineTop_mobile"}></span>
                            <span className={navOpen ? "lineBottom_mobile spin" : "lineBottom_mobile"}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-overlay" style={{
                top: navOpen ? "0%" : "-100%",
                transitionDuration: navOpen ? "3s" : "2s",
                height: navOpen ? "100vh" : "0vh",
                width: navOpen ? "100vw" : "100vw",

            }}>
                <DropDownMenu isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} isMobile={isMobile} setIsMobile={setIsMobile} setOpen={setOpen} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
            </div>
        </>
    )
}

export default MobileNavbar