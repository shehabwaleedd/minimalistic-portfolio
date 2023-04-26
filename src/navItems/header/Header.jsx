import React, { useTransition } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../pages/authContext/AuthContext'
import DropDownMenu from './DropDownMenu'
import { useTranslation } from 'react-i18next'
import SearchFilter from '../../blogItems/search/SearchFilter'

const Header = (Props) => {


  const { user, logOut } = UserAuth()
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

  const { t } = useTranslation()


  return (
    <header className='header'>
      <nav className='nav container'>
       <Link className="nav__logo" to="/">{t("my__name-first")}</Link>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <Link className="nav__link " to="/about">
              <li className="nav__item">
                <i className="uil uil-estate nav__icon"></i>{t("navbar__about")}
              </li>
            </Link>
            <Link className="nav__link " to="/portfolio">
              <li className="nav__item">
                <i className="uil uil-file-alt nav__icon"></i>{t("navbar__work")}
              </li>
            </Link>
            <Link className="nav__link " to="/blog">
              <li className="nav__item">
                <i className="uil uil-estate nav__icon"></i>{t("navbar__blog")}
              </li>
            </Link>
            <Link className="nav__link " to="/contact">Conatct</Link>
            {user ? <>
              <Link className='nav__link' to="/createpost"> Create Post </Link> 
              <button className='button__sign-out nav__link' onClick={handleLogout} > {t("navbar__logout")}</button>
            </>
              :
              <>
                <Link className='nav__link' to="/login">{t("navbar__login")}</Link> 
              </>
            }
            <DropDownMenu />
          </ul>
          <i class="uil uil-times nav__close"></i>
          
        </div>
       
        <div className="nav__toggle">
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header

