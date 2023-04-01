import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Others from './Others'
import { useTranslation } from 'react-i18next'
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect } from 'react'

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);



  const { t } = useTranslation() 
  return (
    <section className="skills section" id='skills'>
        <h2 className='section__title'>{t("section__my_skills")}</h2>
        <span className="section__subtitle">{t("section__subtitle_skills")}</span>
        <div className="skills__container container grid">
            <Frontend data-aos="flip-left"/>
            <Backend />
            <Others data-aos="flip-right"/>
        </div>
    </section>
  )
}

export default Skills