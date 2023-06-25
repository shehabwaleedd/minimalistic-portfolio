import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import './AnimatedNav.scss'
import { useTranslation } from 'react-i18next'
import NavComponents from './navComponents/NavComponents'
import { useLocation } from 'react-router-dom'

const AnimatedNav = (Props) => {
  const { t } = useTranslation()
  const location = useLocation();


  useEffect(() => {

    Props.setNavOpen(false); // Close the navbar when the location changes
    // eslint-disable-next-line 
  }, [location, Props.setNavOpen]);

  useEffect(() => {
    const handleResize = () => {
        Props.setIsMobile(window.innerWidth <= 468);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  return (
    <nav className='nav'>
      {Props.isMobile ? (
        <>
          <div className="navbar__container" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", padding: Props.navOpen ? "3.2rem" : "3.2rem" }}>
            <div style={{ transitionDuration: Props.navOpen ? "1s" : "1.5s", transition: Props.navOpen ? "1.5s" : "1.5s" }}>
              <Link to="/">
                <h1 className={Props.navOpen ? "logo spin" : "logo"} style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "2rem" : "1rem" }}>{t("my__name")}</h1>
              </Link>
            </div>
            <div className="side__navbar" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", gap: Props.language === "ar" ? "1.5rem" : "0.1rem" }}>
              <NavComponents isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
              <DropDownMenu isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
              <div className="menu-toggle" onClick={() => Props.setNavOpen(!Props.navOpen)}>
                <div className={Props.navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                  <span className={Props.navOpen ? "lineTop spin" : "lineTop"}></span>
                  <span className={Props.navOpen ? "lineBottom spin" : "lineBottom"}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-overlay" style={{
            top: Props.navOpen ? "0%" : "-180%",
            transitionDuration: Props.navOpen ? "1.4s" : "2s",
            height: "20vh"
          }}>
          </div>
        </>
      ) : (
        <>
          <div className="navbar__container" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row" }}>
            <div style={{ transitionDuration: Props.navOpen ? "1s" : "1.5s", transition: Props.navOpen ? "1.5s" : "1.5s" }}>
              <Link to="/">
                <h1 className={Props.navOpen ? "logo spin" : "logo"} style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "0.3rem", fontSize: Props.language === "ar" ? "2rem" : "" }}>{t("my__name")}</h1>
              </Link>
            </div>
            <div className="side__navbar" style={{ flexDirection: Props.language === "ar" ? "row-reverse" : "row", gap: Props.language === "ar" ? "3rem" : "1rem" }}>
              <NavComponents isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
              <DropDownMenu setOpen={Props.setOpen} isMobile={Props.isMobile} setIsMobile={Props.setIsMobile} shouldReload={Props.shouldReload} setShouldReload={Props.setShouldReload} navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
              <div className="menu-toggle" onClick={() => Props.setNavOpen(!Props.navOpen)}>
                <div className={Props.navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                  <span className={Props.navOpen ? "lineTop spin" : "lineTop"}></span>
                  <span className={Props.navOpen ? "lineBottom spin" : "lineBottom"}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-overlay" style={{
            top: Props.navOpen ? "0%" : "-200%",
            transitionDuration: Props.navOpen ? "1s" : "1.5s",
          }}>
          </div>
        </>
      )}
    </nav>
  )
}


export default AnimatedNav