import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'

const ScrollDown = () => {


  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

  const { t } = useTranslation()
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button ">
            <svg
                width="32px"
                height="32px"
                class="home__scroll-mouse"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "1.5",
                }}
              >
                <path
                  className="wheel"
                  d="M123.359,79.775l0,72.843"
                  style={{
                    fill: "none",
                    stroke: "var(--title-color)",
                    strokeWidth: "20px",
                    }}
                ></path>
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  style={{
                    fill: "none",
                    stroke: "var(--title-color)",
                    strokeWidth: "20px",
                }}
                ></path>
            </svg>
            <span className="home__scroll-name">
               {t("button__scroll_down")}
                
            </span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
            
        </a>
    </div>
  )
}

export default ScrollDown