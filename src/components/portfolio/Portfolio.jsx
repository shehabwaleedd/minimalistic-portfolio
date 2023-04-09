import React, { useEffect } from 'react'
import './Portfolio.css'
import Works from './Works'
import { useTranslation } from 'react-i18next'
import { motion, useAnimation } from 'framer-motion'

const Portfolio = () => {
  const { t } = useTranslation()
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ x: 0, transition: { duration: 0.75, ease: "easeOut" } })
  }, [])


  return (
    <div className="portfolio-container">
      <section className="work section" id="portfolio" initial={{ x: "100%" }} animate={controls}>
        <h2 className="section__title">{t('section__portfolio')}</h2>
        <span className="section__subtitle">{t('section__subtitle_portfolio')}</span>

      </section>
    </div>
  )
}

export default Portfolio





