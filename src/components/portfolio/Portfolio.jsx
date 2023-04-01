import React from 'react'
import "./Portfolio.css"
import Works from './Works'
import { useTranslation } from 'react-i18next'




const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">{t("section__portfolio")}</h2>
        <span className="section__subtitle">{t("section__subtitle_portfolio")}</span>
        <Works />
    </section>
  )
}

export default Portfolio