import React from 'react'
import { Link } from 'react-router-dom';
import DropDownMenu from '../../dropDownMenu/DropDownMenu';
import { useTranslation } from 'react-i18next';
import NavComponents from '../../navComponents/NavComponents';

const DesktopNavbar = ({ isAbout, setIsAbout, isMobile, setIsMobile, setOpen, navOpen, setNavOpen, language, isMenuVisible, setLanguage, languageExpanded, setLanguageExpanded, setMenuVisible, shouldReload, setShouldReload }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="navbar__container" style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}>
                <div style={{ transition: navOpen ? "1.5s" : "1.5s" }}>
                    <Link to="/">
                        <h1 className={navOpen ? "logo spin" : isAbout && language === "ar" ? "logoAbout" : "logo"} style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "2rem" : "" }}>{t("my__name")}</h1>
                    </Link>
                </div>
                <div className="side__navbar" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", gap: language === "ar" ? "3rem" : "1rem" }}>
                    <NavComponents isMobile={isMobile} navOpen={navOpen} language={language}/>
                    <DropDownMenu isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} setOpen={setOpen} isMobile={isMobile} setIsMobile={setIsMobile} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
                    <div className={`${isAbout ? "menu-toggled" : "menu-toggle"}`} onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={navOpen ? "lineTop spin" : isAbout && language === "ar" ? "lineTopAboutAr" : isAbout ? "lineTopAbout" : "lineTop"}></span>
                            <span className={navOpen ? "lineBottom spin" : isAbout && language === "ar" ? "lineBottomAboutAr" : isAbout ? "lineBottomAbout" : "lineBottom"}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-overlay" style={{top: navOpen ? "0%" : "-200%", transitionDuration: navOpen ? "1s" : "1.5s"}}></div>
        </>
    )
}

export default DesktopNavbar