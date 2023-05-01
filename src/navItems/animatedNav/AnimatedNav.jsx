import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import './AnimatedNav.css'
import { useTranslation } from 'react-i18next'
import { UserAuth } from '../../pages/authContext/AuthContext'
import { useNavigate } from 'react-router-dom'

const AnimatedNav = () => {



  const user  = UserAuth()
  const logOut = UserAuth()
  const { t } = useTranslation()
  const [navOpen, setNavOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/login')
      console.log("logged out successfully")
    } catch (e) {
      console.log(e.message)
    }
  }



  return (
    <nav className='nav'>
      <div className="nav-container">
        <div className="navbar">
          <div className={navOpen ? "logo spin" : "logo"}>
            <Link to="/">{t("my__name-first")}</Link>
          </div>

          <div className="side__navbar">
          {user ? <>
              <Link className='nav__link' to="/createpost"> Create Post </Link> 
              <button className='button__sign-out nav__link' onClick={handleLogout} > {t("navbar__logout")}</button>
            </>
              :
              <>
                <Link
                 className={navOpen ? "nav__link spin" : "nav__link"} to="/login"
                 style={{
                  padding: navOpen ? "0.6rem" : "0",
                  transitionDelay: navOpen ? "3s" : "0",}}
                 >{t("navbar__login")}</Link> 
              </>
            }
            <DropDownMenu navOpen={navOpen}/>
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-overlay" style={{
          right: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0s" : "0s"
        }}>
          <ul className="nav-links">
            <li className="nav-item">
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => setNavOpen(!navOpen)} style={{
                top: navOpen ? "0" : "7.5rem",
                transitionDelay: navOpen ? "0.7s" : "0s",
                opacity: navOpen ? "1" : "0"
              }} data-text={t("navbar__about")} >{t("navbar__about")}</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "7.5rem",
                  transitionDelay: navOpen ? "0.4s" : "0s",
                  opacity: navOpen ? "1" : "0"
                }} data-text={t("navbar__projects")}
              >{t("navbar__projects")}</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/blog" onClick={() => setNavOpen(!navOpen)} style={{
                top: navOpen ? "0" : "7.5rem",
                transitionDelay: navOpen ? "0.1s" : "0s",
                opacity: navOpen ? "1" : "0"
              }} data-text="Blog" >Blog</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/contact " onClick={() => setNavOpen(!navOpen)} style={{
                top: navOpen ? "0" : "6.5rem",
                transitionDelay: navOpen ? "0.5s" : "0s",
                opacity: navOpen ? "1" : "0"
              }} data-text={t("navbar__contact")} >{t("navbar__contact")}</Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div className="location">
              Cairo, Egypt.
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a href="#">LI</a>
                </li>
                <li>
                  <a href="#">IG</a>
                </li>
                <li>
                  <a href="#">TW</a>
                </li>
                <li>
                  <a href="#">FB</a>
                </li>
                <li>
                  <a href="#">GH</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default AnimatedNav