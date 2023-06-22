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

  return (
    <nav className='nav'>
        <div className="navbar__container">
          <div className={Props.navOpen ? "logo spin" : "logo"} style={{ transitionDuration: Props.navOpen ? "1s" : "1.5s", transition: Props.navOpen ? "1.5s" : "1.5s" }}>
          <h1 style={{ fontFamily: Props.language === "ar" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "ar" ? "0" : "1rem", fontSize: Props.language === "ar" ? "2rem" : "" }}>{t("my__name")}</h1>
          </div>
          <div className="side__navbar">
            <NavComponents navOpen={Props.navOpen} />
            <DropDownMenu navOpen={Props.navOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
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
    </nav>
  )
}


export default AnimatedNav