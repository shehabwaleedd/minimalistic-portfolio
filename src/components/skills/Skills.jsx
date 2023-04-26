import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Others from './Others'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const Skills = () => {

  const { t } = useTranslation() 
  return (
    <section className="skills section" id='skills'>
        <h2 className='section__title'>{t("section__my_skills")}</h2>
        <span className="section__subtitle">{t("section__subtitle_skills")}</span>
        <div className="skills__container container grid">
            <Frontend/>
            <Backend />
            <Others />
        </div>
    </section>
  )
}

export default Skills