import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'

const ScrollDown = () => {

  const currentLanguageCode = cookies.get('i18next') || 'en'

  const { t } = useTranslation()
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button ">
            <span className="home__scroll-name">
               {t("button__scroll_down")}
                
            </span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
            
        </a>
    </div>
  )
}

export default ScrollDown