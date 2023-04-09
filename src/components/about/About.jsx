
import React from 'react'
import "./About.css"
import AboutImg from "../../assets/profile.jpg"
import CV from '../../assets/Shehab-Waleed_CV.pdf'
import Info from './Info'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import Qualifications from '../qualifications/Qualifications'
import Experience from './Experience'
import Education from './Education'

const About = () => {
  const { t } = useTranslation()

  return (
      <motion.div initial={{ x: "100vw" }} animate={{ x: "0%" }} transition={{ duration: 0.65, ease: "easeOut" }} exit={{ opacity: 0, scaleX: "100vh" }}>
        <section className="about section" id='about'>
          <h2 className="section__title">{t("section__about_me")}</h2>
          <span className="section__subtitle">{t("section__subtitle_about")}</span>
          <Info />
          <Experience />
          <Education />
        </section>
      </motion.div>
  )
}

export default About