import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import './AnimatedNav.scss'
import { useTranslation } from 'react-i18next'
import NavComponents from './navComponents/NavComponents'
import { useLocation } from 'react-router-dom'

const AnimatedNav = ({ isTablet, setIsTablet, isMobile, setIsMobile, isAbout, setIsAbout, setOpen, navOpen, setNavOpen, language, isMenuVisible, setLanguage, languageExpanded, setLanguageExpanded, setMenuVisible, shouldReload, setShouldReload }) => {
  const { t } = useTranslation()
  const location = useLocation();


  useEffect(() => {

    setNavOpen(false); // Close the navbar when the location changes
    // eslint-disable-next-line 
  }, [location, setNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 935);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='nav'>
      {isMobile ? (
        <>
          <div className="navbar__container" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", direction: language === "ar" ? "rtl" : "ltr", padding: navOpen ? "3.2rem" : "3.2rem" }}>
            <div style={{ transition: navOpen ? "1.5s" : "1.5s" }}>
              <Link to="/">
                <h1 className={navOpen ? "logo spin" : isAbout ? "logoAbout" : "logo"} style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "2rem" : "1rem" }}>{t("my__name")}</h1>
              </Link>
            </div>
            <div className="side__navbar" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", gap: language === "ar" ? "1.5rem" : "0.1rem" }}>
              <NavComponents isAbout={isAbout} setIsAbout={setIsAbout} isMobile={isMobile} setIsMobile={setIsMobile} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
              <DropDownMenu isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} isMobile={isMobile} setIsMobile={setIsMobile} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
              <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "hamBox hamBoxOpen" : isAbout ? "hamBoxAbout" : "hamBox"}>
                  <span className={navOpen ? "lineTop spin" : isAbout ? "lineTopAbout" : "lineTop"}></span>
                  <span className={navOpen ? "lineBottom spin" : isAbout ? "lineBottomAbout" : "lineBottom"}></span>
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

          </div>
        </>
      ) : (
        <>
          <div className="navbar__container" style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}>
            <div style={{ transition: navOpen ? "1.5s" : "1.5s" }}>
              <Link to="/">
                <h1 className={navOpen ? "logo spin" : isAbout && language === "ar" ? "logoAbout" : "logo"} style={{ fontFamily: language === "ar" ? "Aref Ruqaa" : "", letterSpacing: language === "ar" ? "0" : "0.3rem", fontSize: language === "ar" ? "2rem" : "" }}>{t("my__name")}</h1>
              </Link>
            </div>
            <div className="side__navbar" style={{ flexDirection: language === "ar" ? "row-reverse" : "row", gap: language === "ar" ? "3rem" : "1rem" }}>
              <NavComponents isAbout={isAbout} setIsAbout={setIsAbout} isMobile={isMobile} setIsMobile={setIsMobile} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
              <DropDownMenu isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} setOpen={setOpen} isMobile={isMobile} setIsMobile={setIsMobile} shouldReload={shouldReload} setShouldReload={setShouldReload} navOpen={navOpen} setNavOpen={setNavOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
              <div className={`${isAbout ? "menu-toggled" : "menu-toggle"}`} onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                  <span className={navOpen ? "lineTop spin" : isAbout && language === "ar" ? "lineTopAboutAr" : isAbout ? "lineTopAbout" : "lineTop"}></span>
                  <span className={navOpen ? "lineBottom spin" : isAbout && language === "ar" ? "lineBottomAboutAr" : isAbout ? "lineBottomAbout" : "lineBottom"}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-overlay" style={{
            top: navOpen ? "0%" : "-200%",
            transitionDuration: navOpen ? "1s" : "1.5s",
          }}>
          </div>
        </>
      )}
    </nav>
  )
}


export default AnimatedNav