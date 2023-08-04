import React from 'react'
import { Link } from 'react-router-dom';
import DropDownMenu from '../../dropDownMenu/DropDownMenu';
import { useTranslation } from 'react-i18next';
import NavComponents from '../../navComponents/NavComponents';
import { TbMenu }  from "react-icons/tb";

const DesktopNavbar = ({ isAbout, isMobile, setIsMobile, setOpen, navOpen, setNavOpen, language, isMenuVisible, setLanguage, languageExpanded, setLanguageExpanded, setMenuVisible, shouldReload, setShouldReload }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="navbar__container" style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}>
                <Link to="/" className='sheboo_logo'>
                    <h1 className={navOpen ? language === "ar" ? "logoAr spin" : "logo spin" : language === "ar" ? "logoAr" : "logo"} style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "2.5rem" : "" }}>{t("my__name")}</h1>
                </Link>
                <div className="side__navbar" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", gap: language === "ar" ? "3rem" : "1rem" }}>
                    <NavComponents isMobile={isMobile} navOpen={navOpen} language={language} />
                    <DropDownMenu isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} setOpen={setOpen} isMobile={isMobile} setIsMobile={setIsMobile} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
                    <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ? "hamBox open" : "hamBox"}>
                            <span className={navOpen ? "lineTop spin" :  language === "ar" ? "lineTopAr" :  "lineTop"}></span>
                            <span className={navOpen ? "lineBottom spin" :  language === "ar" ? "lineBottomAr" : "lineBottom"}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-overlay" style={{ top: navOpen ? "0%" : "-200%", transitionDuration: navOpen ? "1s" : "1.5s" }}></div>
        </>
    )
}

export default DesktopNavbar