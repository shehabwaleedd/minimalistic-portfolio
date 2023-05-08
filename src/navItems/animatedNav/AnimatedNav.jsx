import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import './AnimatedNav.css'
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
      <div className="nav-container">
        <div className="navbar">
          <div className={Props.navOpen ? "logo spin" : "logo"} style={{transitionDuration: Props.navOpen ? "1s" : "1.5s", transition: Props.navOpen ? "1.5s" : "1.5s"}}>
            <Link to="/">{t("my__name")}</Link>
          </div>

          <div className="side__navbar">
            <NavComponents navOpen={Props.navOpen} />
            <DropDownMenu navOpen={Props.navOpen} />
            <div className="menu-toggle" onClick={() => Props.setNavOpen(!Props.navOpen)}>
              <div className={Props.navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={Props.navOpen ? "lineTop spin" : "lineTop"}></span>
                <span className={Props.navOpen ? "lineBottom spin" : "lineBottom"}></span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-footer" style={{
          opacity: Props.navOpen ? "1" : "0",
          transition: Props.navOpen ? "1s" : "0s",
          transitionDelay: Props.navOpen ? "3s" : "0s",
        }}>
        </div>
        <div className="nav-overlay" style={{
          top: Props.navOpen ? "0" : "-100%",
          transitionDelay: Props.navOpen ? "0s" : "0s",
          transitionDuration: Props.navOpen ? "2s" : "2.5s",
        }}>
        </div>
      </div>
    </nav>
  )
}


export default AnimatedNav